import React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';
import App from './App.tsx';

test('renders hello world', async ({ mount }) => {
  const appComponent = await mount(<App />);
  await expect(appComponent).toContainText('Hello World!');
});
