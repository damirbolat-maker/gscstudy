const fs = require("fs");
const path = require("path");

const STORE_PATH = path.join(__dirname, "..", "data", "gsc-store.json");

function load() {
  try {
    if (fs.existsSync(STORE_PATH)) {
      const raw = fs.readFileSync(STORE_PATH, "utf8");
      const j = JSON.parse(raw);
      if (j && typeof j.kv === "object") return j;
    }
  } catch (_) {}
  return { kv: {} };
}

function save(data) {
  fs.mkdirSync(path.dirname(STORE_PATH), { recursive: true });
  fs.writeFileSync(STORE_PATH, JSON.stringify(data), "utf8");
}

/** File-backed KV compatible with @vercel/kv list ops used by api/*.js */
const kv = {
  async get(key) {
    const data = load();
    return Object.prototype.hasOwnProperty.call(data.kv, key)
      ? data.kv[key]
      : null;
  },
  async set(key, value) {
    const data = load();
    data.kv[key] = value;
    save(data);
  },
  async del(key) {
    const data = load();
    delete data.kv[key];
    save(data);
  },
  async lpush(key, value) {
    const data = load();
    let arr = data.kv[key];
    if (!Array.isArray(arr)) arr = [];
    arr.unshift(value);
    data.kv[key] = arr;
    save(data);
  },
  async lrange(key, start, end) {
    const data = load();
    const arr = data.kv[key];
    if (!Array.isArray(arr)) return [];
    return arr.slice(start, end + 1);
  },
  async ltrim(key, start, end) {
    const data = load();
    let arr = data.kv[key];
    if (!Array.isArray(arr)) arr = [];
    data.kv[key] = arr.slice(start, end + 1);
    save(data);
  }
};

module.exports = { kv, STORE_PATH };
