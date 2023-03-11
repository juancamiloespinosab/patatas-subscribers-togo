export const environment = {
  production: true,
  invertebradoApi: {
    domain: 'lab.app.invertebrado.co',
    baseUrl: 'https://lab.app.invertebrado.co/api',
    paths: {
      account: {
        parent: '/account',
        children: {
          login: '/login',
        },
      },
      subscribers: {
        parent: '/subscribers',
      },
      countries: {
        parent: '/countries',
      },
    },
  },
};
