import { expect, test } from '@playwright/test';

test('playground page visual baseline', async ({ page }) => {
  await page.goto('/playground');
  await expect(page.getByRole('heading', { name: /widget experience/i })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Hide Chat' })).toBeVisible();
  await expect(page).toHaveScreenshot('playground-page.png', { fullPage: true });
});
