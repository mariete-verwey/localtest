import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const googlePlugin = createPlugin({
  id: 'google',
  routes: {
    root: rootRouteRef,
  },
});

export const Google = googlePlugin.provide(
  createRoutableExtension({
    name: 'Google',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);

export const GooglePage = googlePlugin.provide(
  createRoutableExtension({
    name: 'GooglePage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponentPage),
    mountPoint: rootRouteRef,
  }),
);
