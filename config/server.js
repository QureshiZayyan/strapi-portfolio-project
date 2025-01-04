module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('RENDER_EXTERNAL_URL', 'https://strapi-portfolio-project-1.onrender.com'),
  app: {
    keys: [
      env('APP_KEY_1'),
      env('APP_KEY_2'),
      env('APP_KEY_3'),
      env('APP_KEY_4'),
    ],
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});

