module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 3176),
  url: env("URL", "http://178.18.252.38:3176"),
  app: {
    keys: env.array("APP_KEYS", ["testKey1", "testKey2"]),
  },
});
