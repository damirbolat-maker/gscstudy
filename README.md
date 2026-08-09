# GSC Study

Сайт образовательного центра GSC Study — языковые курсы, подготовка к IELTS и
Digital SAT, поступление в зарубежные вузы.

## Стек

- **Next.js 15** (App Router) + **TypeScript** + **Tailwind CSS** — фронтенд, API и админка в одном приложении
- **Docker** + **Nginx** — контейнеризация и reverse-proxy на VPS
- **GitHub Actions** — автодеплой на VPS при пуше в `main`
- PostgreSQL + Prisma — планируется для заявок/тестов/контента

## Локальная разработка

```bash
npm install
cp .env.example .env      # заполнить (для локали значения по умолчанию подходят)
npm run db:push           # создать локальную базу SQLite (prisma/dev.db)
npm run dev               # http://localhost:3000
```

Прод-сборка локально:

```bash
npm run build
npm start
```

## Админка

Панель управления — по адресу **`/admin`** (логин/пароль из `.env`:
`ADMIN_USERNAME` / `ADMIN_PASSWORD`).

Разделы: Обзор, Страницы, Тесты уровня, **Заявки** (все обращения с форм сайта),
Лагеря, Настройки. Заявки с форм автоматически сохраняются в базу и видны в
разделе «Заявки».

## База данных

- ORM: **Prisma**, локально — **SQLite** (`prisma/dev.db`).
- Схема: `prisma/schema.prisma`. После изменений — `npm run db:push`.
- На проде можно переключить на PostgreSQL, поменяв `DATABASE_URL` и
  `provider` в схеме.

## Структура

```
src/
  app/            # страницы (App Router) и API-роуты
    api/leads/    # приём заявок с форм (заглушка под Bitrix24/БД)
    page.tsx      # главная
  components/     # секции главной (Header, Hero, Directions, ...)
  lib/site.ts     # общие данные: телефоны, адреса, навигация
public/           # статика (robots.txt, изображения)
nginx/            # конфиг reverse-proxy
Dockerfile        # multi-stage сборка (standalone)
docker-compose.yml
.github/workflows/deploy.yml
```

## Деплой на VPS

Разовая настройка сервера (Ubuntu):

```bash
# 1. Docker + compose plugin
curl -fsSL https://get.docker.com | sh

# 2. Клонировать репозиторий
git clone https://github.com/damirbolat-maker/gscstudy /opt/gscstudy
cd /opt/gscstudy
cp .env.example .env   # заполнить значения

# 3. Первый запуск
docker compose up -d --build
```

Дальше — автоматика: пуш в `main` → GitHub Actions заходит по SSH на VPS,
подтягивает код и пересобирает контейнеры.

### Секреты GitHub (Settings → Secrets and variables → Actions)

| Секрет        | Значение                              |
| ------------- | ------------------------------------- |
| `VPS_HOST`    | IP или домен сервера                   |
| `VPS_USER`    | пользователь SSH (напр. `root`)        |
| `VPS_SSH_KEY` | приватный SSH-ключ для доступа          |
| `VPS_PATH`    | путь к репозиторию (напр. `/opt/gscstudy`) |
| `VPS_PORT`    | порт SSH (необязательно, по умолчанию 22) |

### HTTPS

После того как домен указывает на VPS, выпустить сертификат Let's Encrypt
(certbot) и раскомментировать HTTPS-блок в `nginx/conf.d/default.conf`.
