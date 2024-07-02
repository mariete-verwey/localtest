import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { confluenceBrowserPlugin, ConfluenceBrowserPage } from '../src/plugin';

createDevApp()
  .registerPlugin(confluenceBrowserPlugin)
  .addPage({
    element: <ConfluenceBrowserPage />,
    title: 'Root Page',
    path: '/confluence-browser',
  })
  .render();
