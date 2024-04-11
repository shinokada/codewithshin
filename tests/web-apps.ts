import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  console.log(`Running ${test.info().title}`);
  await page.goto('/web-apps');
});


test('web-apps page has expected h1', async ({ page }) => {
	await expect(page.getByRole('heading', { name: 'Web apps' })).toBeVisible();
	// await expect(page).toHaveTitle('Web Apps - codewithshin.com');
});