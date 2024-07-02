import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { googlePlugin, GooglePage } from '../src/plugin';

createDevApp()
  .registerPlugin(googlePlugin)
  .addPage({
    element: <GooglePage />,
    title: 'Root Page',
    path: '/google',
  })
  .render();
