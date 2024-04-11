import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  console.log(`Running ${test.info().title}`);
  await page.goto('/homebrew');
});

test('homebrew page has expected h1, meta title', async ({ page }) => {
	await expect(page.getByRole('heading', { name: 'Homebrew Taps' })).toBeVisible();
	// await expect(page).toHaveTitle('Homebrew Taps - codewithshin.com');
});