import { confluenceBrowserPlugin } from './plugin';

describe('confluence-browser', () => {
  it('should export plugin', () => {
    expect(confluenceBrowserPlugin).toBeDefined();
  });
});
