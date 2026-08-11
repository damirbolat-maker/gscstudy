#!/bin/sh
# Пост-деплой для Plesk (выполняется после git-обновления кода).
# Ставит зависимости, применяет схему БД, сидирует при первом запуске, собирает
# и перезапускает приложение через Passenger (tmp/restart.txt).
set -e

echo "[deploy] npm ci (с dev-зависимостями для сборки)…"
npm ci --include=dev

echo "[deploy] схема БД + сиды при первом запуске…"
npm run db:deploy

echo "[deploy] next build…"
npm run build

echo "[deploy] перезапуск приложения (Passenger)…"
mkdir -p tmp && touch tmp/restart.txt

echo "[deploy] готово."
