module.exports = ({ env }) => ({
  auth: {
    secret: 'xXu377vIB+BqYAQMi5p1cw==',
  },
  apiToken: {
    salt: '2VHfxfy/gK9IQIyYzLK4Yw==',
  },
  transfer: {
    token: {
      salt: env('3nLoXmtNaX5jMwDgBRYxqw=='),
    },
  },
  flags: {
    nps: true, // Hardcoded flag value
    promoteEE: true, // Hardcoded flag value
  },
});
