const createNextIntlPlugin = require("next-intl/plugin");
const withNextIntl = createNextIntlPlugin();

module.exports = {
  async rewrites() {
    return [
      {
        source: "/_next/:path*",
        destination: "/_next/:path*",
      },
    ];
  },
  ...withNextIntl({
    experimental: {
      appDir: true,
    },
    // intl: {
    //   timeZone: 'Europe/Worsow',
    // },
  }),
};
