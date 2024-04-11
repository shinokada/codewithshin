import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  console.log(`Running ${test.info().title}`);
  await page.goto('/python-and-jupyter');
});

test('python-and-jupyter page has expected h1, meta title', async ({ page }) => {
	await expect(page.getByRole('heading', { name: 'Python and Jupyter' })).toBeVisible();
	// await expect(page).toHaveTitle('Python and Jupyter - codewithshin.com');
});