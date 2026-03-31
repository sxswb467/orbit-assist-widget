import { expect, test } from '@playwright/test';

test('widget controls update the live preview', async ({ page }) => {
  await page.goto('/playground');

  const overlayInput = page.getByLabel('Selected overlay label');
  await overlayInput.fill('Revenue pulse');
  await expect(page.getByRole('button', { name: /metric revenue pulse/i })).toBeVisible();

  const showSourcesSwitch = page.getByRole('switch', { name: 'Show sources' });
  await showSourcesSwitch.click();
  await expect(page.getByText(/Sources:/)).toBeHidden();

  await page.getByRole('button', { name: 'Hide Chat' }).click();
  await expect(page.getByLabel('AI chat panel')).toBeHidden();
  await page.getByRole('button', { name: 'Show Chat' }).click();
  await expect(page.getByLabel('AI chat panel')).toBeVisible();
});
