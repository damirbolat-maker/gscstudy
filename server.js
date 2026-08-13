// Стартовый файл для Plesk (Node.js / Phusion Passenger).
// Passenger задаёт process.env.PORT (номер порта или путь к сокету) —
// приложение должно слушать именно его. Здесь мы поднимаем Next.js в prod-режиме.

const { createServer } = require("http");
const fs = require("fs");
const path = require("path");
const next = require("next");

// Путь к базе. В архив НЕ входит .env, а Prisma читает env("DATABASE_URL").
// Поэтому задаём абсолютный путь к prod.db по умолчанию — сайт работает
// без ручной настройки переменных окружения на хостинге. Если DATABASE_URL
// всё же задан в панели — уважаем его.
if (!process.env.DATABASE_URL) {
  process.env.DATABASE_URL = "file:" + path.join(__dirname, "prisma", "prod.db");
  console.log("> DATABASE_URL по умолчанию:", process.env.DATABASE_URL);
}

// Первичная инициализация БД: если рабочего prod.db ещё нет — берём готовый
// шаблон prod.db.seed (создан в CI, со схемой и стартовыми данными).
// Так хостингу не нужен prisma-движок схемы, а данные потом не затираются
// (prod.db исключён из FTP-выгрузки).
try {
  const dbFile = path.join(__dirname, "prisma", "prod.db");
  const seedFile = path.join(__dirname, "prisma", "prod.db.seed");
  if (!fs.existsSync(dbFile) && fs.existsSync(seedFile)) {
    fs.copyFileSync(seedFile, dbFile);
    console.log("> Инициализировали prod.db из шаблона prod.db.seed");
  }
} catch (e) {
  console.error("DB init warning:", e);
}

const app = next({ dev: false });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = createServer((req, res) => handle(req, res));
  // PORT может быть числом или строкой (unix-сокет) — http.listen принимает оба.
  const port = process.env.PORT || 3000;
  server.listen(port, () => {
    console.log(`> GSC Study ready on ${port}`);
  });
});
