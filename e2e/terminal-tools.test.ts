import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
	console.log(`Running ${test.info().title}`);
	await page.goto('/terminal-tools');
});

test('terminal tools page has expected h1', async ({ page }) => {
	await expect(page.getByRole('heading', { name: 'Terminal Tools' })).toBeVisible();
});

test('terminal tools page has expected meta title', async ({ page }) => {
	await expect(page).toHaveTitle('Terminal Tools - codewithshin.com');
});

test('terminal tools page has expected meta description', async ({ page }) => {
	const metaDescription = page.locator('meta[name="description"]');
	await expect(metaDescription).toHaveAttribute(
		'content',
		'Bash and Node.js tools for your terminal'
	);
});

test('terminal tools page has expected meta og', async ({ page }) => {
	const metaOgTitle = page.locator('meta[property="og:title"]');
	await expect(metaOgTitle).toHaveAttribute('content', 'Terminal Tools - codewithshin.com');
	const metaOgDescription = page.locator('meta[property="og:description"]');
	await expect(metaOgDescription).toHaveAttribute(
		'content',
		'Bash and Node.js tools for your terminal'
	);
	const metaImage = page.locator('meta[property="og:image"]');
	await expect(metaImage).toHaveAttribute(
		'content',
		'https://open-graph-vercel.vercel.app/api/codewithshin?title=Terminal%20Tools'
	);
});

test('terminal tools page has expected meta twitter', async ({ page }) => {
	const metaTwitterTitle = page.locator('meta[name="twitter:title"]');
	await expect(metaTwitterTitle).toHaveAttribute('content', 'Terminal Tools - codewithshin.com');
	const metaTwitterDescription = page.locator('meta[name="twitter:description"]');
	await expect(metaTwitterDescription).toHaveAttribute(
		'content',
		'Bash and Node.js tools for your terminal'
	);
	const metaTwitterImage = page.locator('meta[name="twitter:image"]');
	await expect(metaTwitterImage).toHaveAttribute(
		'content',
		'https://open-graph-vercel.vercel.app/api/codewithshin?title=Terminal%20Tools'
	);
});
