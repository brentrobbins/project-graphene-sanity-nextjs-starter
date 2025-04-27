import { expect, test } from '@playwright/test';

test.describe('home page', () => {
  test('given any user: shows the test user', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByText('Get started by editing src/app/page.tsx.')).toBeVisible();
    await expect(page.getByText('Save and see your changes instantly.')).toBeVisible();
  });
});