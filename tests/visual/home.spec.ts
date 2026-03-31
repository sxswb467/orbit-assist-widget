import { expect, test } from '@playwright/test';

test('home page visual baseline', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('embedded AI support');
  await expect(page.getByRole('link', { name: 'Open Playground' })).toBeVisible();
  await expect(page).toHaveScreenshot('home-page.png', { fullPage: true });
});
