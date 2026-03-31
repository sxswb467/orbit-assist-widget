import { expect, test } from '@playwright/test';

test('mobile navigation opens and routes to the design system page', async ({ page }, testInfo) => {
  test.skip(!testInfo.project.name.includes('mobile'), 'Mobile-only navigation flow.');

  await page.goto('/');
  const menuButton = page.getByRole('button', { name: /open navigation menu/i });
  await expect(menuButton).toBeVisible();

  await menuButton.click();
  await expect(page.getByRole('link', { name: 'Design System' })).toBeVisible();

  await page.getByRole('link', { name: 'Design System' }).click();
  await expect(page.getByRole('heading', { name: /tokens, surface rules/i })).toBeVisible();
  await expect(page.getByRole('button', { name: /open navigation menu/i })).toBeVisible();
});
