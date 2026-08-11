# Деплой GSC Study на VPS

Стек: Next.js + SQLite в Docker, обратный прокси Nginx, автодеплой через GitHub Actions.
База — файл SQLite в постоянном томе `./data/db`, загруженные фото — в `./data/uploads`.

Предполагается Ubuntu 22.04/24.04 и доступ к серверу по SSH под `root`.
Репозиторий публичный — серверу не нужны ключи, чтобы его склонировать.

---

## 1. Подготовка сервера (один раз)

Зайдите на сервер по SSH и выполните:

```bash
# 1.1 Установить Docker (с плагином compose)
curl -fsSL https://get.docker.com | sh

# 1.2 Склонировать проект
mkdir -p /opt && cd /opt
git clone https://github.com/damirbolat-maker/gscstudy.git
cd gscstudy

# 1.3 Создать .env с реальными секретами
cp .env.example .env
nano .env
```

В `.env` задайте (DATABASE_URL указывать НЕ нужно — его задаёт docker-compose):

```
ADMIN_USERNAME="admin"
ADMIN_PASSWORD="придумайте-надёжный-пароль"
AUTH_SECRET="длинная-случайная-строка"        # напр. вывод: openssl rand -hex 32
# BITRIX_WEBHOOK_URL=...                        # можно оставить пустым и задать в админке
```

## 2. Домен

В DNS вашего домена создайте A-записи на IP сервера:

```
@     A     <IP-сервера>
www   A     <IP-сервера>
```

Пропишите домен в конфиге Nginx (замените `gscstudy.kz`):

```bash
nano /opt/gscstudy/nginx/conf.d/default.conf
```

## 3. Первый запуск

```bash
cd /opt/gscstudy
docker compose up -d --build
```

Контейнер сам применит схему БД и зальёт стартовые данные (тесты, лагеря).
Сайт откроется по `http://<IP>` и `http://<домен>` (после распространения DNS).

Проверить логи: `docker compose logs -f app`

## 4. HTTPS (после того как домен указывает на сервер)

Выпустить сертификат Let's Encrypt (webroot):

```bash
cd /opt/gscstudy
docker run --rm \
  -v $PWD/nginx/certbot/conf:/etc/letsencrypt \
  -v $PWD/nginx/certbot/www:/var/www/certbot \
  certbot/certbot certonly --webroot -w /var/www/certbot \
  -d ВАШ-домен -d www.ВАШ-домен \
  --email you@example.com --agree-tos --no-eff-email
```

Затем в `nginx/conf.d/default.conf`: раскомментируйте блок `server { listen 443 ... }`
и редирект с 80 на HTTPS, подставьте домен, и:

```bash
docker compose restart nginx
```

Автопродление сертификата — cron раз в неделю:

```bash
(crontab -l 2>/dev/null; echo '0 3 * * 1 cd /opt/gscstudy && docker run --rm -v $PWD/nginx/certbot/conf:/etc/letsencrypt -v $PWD/nginx/certbot/www:/var/www/certbot certbot/certbot renew && docker compose restart nginx') | crontab -
```

## 5. Автодеплой из GitHub (пуш в main → сайт обновляется)

Нужно дать GitHub Actions доступ заходить на сервер по SSH.

1. Сгенерируйте ключ (на своём компьютере или сервере):
   ```bash
   ssh-keygen -t ed25519 -f gsc_deploy -N ""
   ```
2. Публичную часть добавьте на сервер:
   ```bash
   ssh-copy-id -i gsc_deploy.pub root@<IP>
   # или вручную: содержимое gsc_deploy.pub -> в ~/.ssh/authorized_keys на сервере
   ```
3. В GitHub: репозиторий → **Settings → Secrets and variables → Actions → New repository secret** — добавьте:

   | Secret | Значение |
   |--------|----------|
   | `VPS_HOST` | IP сервера |
   | `VPS_USER` | `root` |
   | `VPS_SSH_KEY` | содержимое приватного ключа `gsc_deploy` (весь файл) |
   | `VPS_PORT` | `22` |
   | `VPS_PATH` | `/opt/gscstudy` |

После этого каждый пуш в `main` автоматически обновляет сайт
(workflow `.github/workflows/deploy.yml`). Запустить вручную можно во вкладке
**Actions → Deploy to VPS → Run workflow**.

## Обслуживание

- Обновить вручную: `cd /opt/gscstudy && git pull && docker compose up -d --build`
- Логи: `docker compose logs -f app`
- Перезапуск: `docker compose restart`
- Бэкап БД: скопировать файл `/opt/gscstudy/data/db/prod.db`
- Бэкап фото: папка `/opt/gscstudy/data/uploads`
