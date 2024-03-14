import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'Welcome to Codewithshin where you can find a lot of coding goodies' })).toBeVisible();
});


test('svelte-uis page has expected h1', async ({ page }) => {
	await page.goto('/svelte');
	await expect(page.getByRole('heading', { name: 'Svelte Libraries' })).toBeVisible();
});


test('svelte-svg-icon-sets page has expected h1', async ({ page }) => {
	await page.goto('/svelte-svg-icon-sets');
	await expect(page.getByRole('heading', { name: '29 Svelte SVG Icon Sets' })).toBeVisible();
});

test('terminal-tools page has expected h1', async ({ page }) => {
	await page.goto('/terminal-tools');
	await expect(page.getByRole('heading', { name: 'Terminal Tools' })).toBeVisible();
});


test('python-and-jupyter page has expected h1', async ({ page }) => {
	await page.goto('/python-and-jupyter');
	await expect(page.getByRole('heading', { name: 'Python and Jupyter' })).toBeVisible();
});

test('others page has expected h1', async ({ page }) => {
	await page.goto('/homebrew');
	await expect(page.getByRole('heading', { name: 'Homebrew Taps' })).toBeVisible();
});

test('apps page has expected h1', async ({ page }) => {
	await page.goto('/web-apps');
	await expect(page.getByRole('heading', { name: 'Web apps' })).toBeVisible();
});