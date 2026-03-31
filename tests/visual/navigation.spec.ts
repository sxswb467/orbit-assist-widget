import { expect, test } from '@playwright/test';

test('mobile navigation opens and routes to the design system page', async ({ page }, testInfo) => {
  test.skip(!testInfo.project.name.includes('mobile'), 'Mobile-only navigation flow.');

  await page.goto('/');
  const menuButton = page.getByRole('button', { name: /open navigation menu/i });
  await expect(menuButton).toBeVisible();

  await menuButton.click();
  const mobileNav = page.getByRole('navigation', { name: 'Mobile primary' });
  const designSystemLink = mobileNav.getByRole('link', { name: 'Design System', exact: true });
  await expect(designSystemLink).toBeVisible();

  await designSystemLink.click();
  await expect(page.getByRole('heading', { name: /tokens, surface rules/i })).toBeVisible();
  await expect(page.getByRole('button', { name: /open navigation menu/i })).toBeVisible();
});
