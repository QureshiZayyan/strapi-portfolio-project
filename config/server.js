module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  keys: [
    env('APP_KEY_1','W6Ox&tJxUu-R+8-w-D}K%+K2a>Y$Q>T3asW8vhGKC%fzk*r}QFsPkH+WhS3(}A7'),
    env('APP_KEY_2',`=Q3y++wj@O=;{#x^XSbtED+;{QG(2)d6PC#W[WqJRkHS%R"yC,ipUCujHj'"2@O`),
  ],
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
