import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'Welcome to Codewithshin where you can find a lot of coding goodies' })).toBeVisible();
});


test('svelte-uis page has expected h1', async ({ page }) => {
	await page.goto('/svelte-uis');
	await expect(page.getByRole('heading', { name: 'Flowbite Svelte UIs' })).toBeVisible();
});


test('svelte-svg-icon-sets page has expected h1', async ({ page }) => {
	await page.goto('/svelte-svg-icon-sets');
	await expect(page.getByRole('heading', { name: 'Svelte SVG Icon Sets' })).toBeVisible();
});

test('terminal-tools page has expected h1', async ({ page }) => {
	await page.goto('/terminal-tools');
	await expect(page.getByRole('heading', { name: 'Terminal Tools' })).toBeVisible();
});

test('svelte-libraries page has expected h1', async ({ page }) => {
	await page.goto('/svelte-libraries');
	await expect(page.getByRole('heading', { name: 'Svelte Libraries' })).toBeVisible();
});

test('python-and-jupyter page has expected h1', async ({ page }) => {
	await page.goto('/python-and-jupyter');
	await expect(page.getByRole('heading', { name: 'Python & Jupyter' })).toBeVisible();
});