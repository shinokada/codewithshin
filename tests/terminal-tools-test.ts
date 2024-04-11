import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  console.log(`Running ${test.info().title}`);
  await page.goto('/terminal-tools');
});

test.describe('Tests for terminal tools page', () => {
  test('terminal-tools page has expected h1', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Terminal Tools' })).toBeVisible();
  });
})