import { expect, test } from '@playwright/test';

test('index page has expected h1, meta title.', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'Welcome to Codewithshin where you can find a lot of coding goodies' })).toBeVisible();
	await expect(page).toHaveTitle('codewithshin.com - Homepage');
});


test('svelte-uis page has expected h1, meta title', async ({ page }) => {
	await page.goto('/svelte');
	await expect(page.getByRole('heading', { name: 'Svelte Libraries' })).toBeVisible();
	await expect(page).toHaveTitle('Svelte Libraries - codewithshin.com');
});


test('svelte-svg-icon-sets page has expected h1, meta title', async ({ page }) => {
	await page.goto('/svelte-svg-icon-sets');
	await expect(page.getByRole('heading', { name: '29 Svelte SVG Icon Sets' })).toBeVisible();
	await expect(page).toHaveTitle('Svelte SVG Icon Sets - codewithshin.com');
});

test('terminal-tools page has expected h1', async ({ page }) => {
	await page.goto('/terminal-tools');
	await expect(page.getByRole('heading', { name: 'Terminal Tools' })).toBeVisible();
	await expect(page).toHaveTitle('Terminal Tools - codewithshin.com');
});


test('python-and-jupyter page has expected h1, meta title', async ({ page }) => {
	await page.goto('/python-and-jupyter');
	await expect(page.getByRole('heading', { name: 'Python and Jupyter' })).toBeVisible();
	await expect(page).toHaveTitle('Python and Jupyter - codewithshin.com');
});

test('homebrew page has expected h1, meta title', async ({ page }) => {
	await page.goto('/homebrew');
	await expect(page.getByRole('heading', { name: 'Homebrew Taps' })).toBeVisible();
	await expect(page).toHaveTitle('Homebrew Taps - codewithshin.com');
});

test('apps page has expected h1', async ({ page }) => {
	await page.goto('/web-apps');
	await expect(page.getByRole('heading', { name: 'Web apps' })).toBeVisible();
	await expect(page).toHaveTitle('Web Apps - codewithshin.com');
});