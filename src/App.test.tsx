import App from './App';
import { test, expect } from '@playwright/experimental-ct-react';

test('renders hello world', async ({ mount }) => {
    const appComponent = await mount(<App />);
    await expect(appComponent).toContainText('Hello World!');
});
