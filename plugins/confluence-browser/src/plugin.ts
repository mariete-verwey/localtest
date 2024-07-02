import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const confluenceBrowserPlugin = createPlugin({
  id: 'confluence-browser',
  routes: {
    root: rootRouteRef,
  },
});

export const ConfluenceBrowserPage = confluenceBrowserPlugin.provide(
  createRoutableExtension({
    name: 'ConfluenceBrowserPage',
    component: () =>
      import('./components/ConfluenceComponent').then(
        m => m.ConfluenceComponent,
      ),
    mountPoint: rootRouteRef,
  }),
);
