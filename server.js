// Стартовый файл для Plesk (Node.js / Phusion Passenger).
// Passenger задаёт process.env.PORT (номер порта или путь к сокету) —
// приложение должно слушать именно его. Здесь мы поднимаем Next.js в prod-режиме.

const { createServer } = require("http");
const next = require("next");

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
