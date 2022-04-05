module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 3176),
  url: env("URL", "http://localhost:3176"),
  app: {
    keys: env.array("APP_KEYS", ["testKey1", "testKey2"]),
  },
});
