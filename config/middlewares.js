module.exports = [
  'strapi::logger',
{
  resolve: './src/middlewares/logger',
  config: {
    enabled: true,
  },
},
  'strapi::errors',
  // 'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      origin: ['https://strapi-portfolio-project-1.onrender.com', 'http://localhost:3000'], // Include your front-end domain.
    },
    
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
