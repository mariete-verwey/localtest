import React from 'react';
import { Page, Header, Content } from '@backstage/core-components';

export const ExampleComponent = () => {
  return (
    <Page themeId="tool">
      <Header title="Inception" subtitle="Google inside Backstage" />
      <Content>
        <iframe
          src="https://www.google.com/webhp?igu=1"
          title="Google component"
          width="100%"
          height="100%"
          style={{ border: 0 }}
        />
      </Content>
    </Page>
  );
};
