import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { googlePlugin, Google } from '../src/plugin';

createDevApp()
  .registerPlugin(googlePlugin)
  .addPage({
    element: <Google />,
    title: 'Root Page',
    path: '/google',
  })
  .render();
