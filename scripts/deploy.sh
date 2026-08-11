#!/bin/sh
# Пост-деплой для Plesk (выполняется после git-обновления кода).
# Ставит зависимости, применяет схему БД, сидирует при первом запуске, собирает
# и перезапускает приложение через Passenger (tmp/restart.txt).
set -e

echo "[deploy] npm ci (с dev-зависимостями для сборки)…"
npm ci --include=dev

echo "[deploy] prisma generate…"
npx prisma generate

echo "[deploy] prisma db push…"
npx prisma db push --skip-generate

# Сиды только если тестов ещё нет — чтобы не затирать правки из админки.
COUNT=$(node -e "const{PrismaClient}=require('@prisma/client');const p=new PrismaClient();p.test.count().then(c=>console.log(c)).catch(()=>console.log(0)).finally(()=>p.\$disconnect())" 2>/dev/null || echo 0)
if [ "$COUNT" = "0" ]; then
  echo "[deploy] пустая БД — сидируем стартовые данные…"
  node prisma/seed.mjs || true
else
  echo "[deploy] данные есть (tests=$COUNT) — сиды пропускаем."
fi

echo "[deploy] next build…"
npm run build

echo "[deploy] перезапуск приложения (Passenger)…"
mkdir -p tmp && touch tmp/restart.txt

echo "[deploy] готово."
