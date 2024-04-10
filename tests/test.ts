import { expect, test } from '@playwright/test';

test('index page has expected h1, meta title.', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'Welcome to Codewithshin where you can find a lot of coding goodies' })).toBeVisible();
	await expect(page).toHaveTitle('codewithshin.com');
  const metaDescription = page.locator('meta[name="description"]');
  await expect(metaDescription).toHaveAttribute('content', 'Hi, I\'m Shin, a programmer and technology enthusiast with a passion for sharing my knowledge and experience.');
  const metaKeywords = page.locator('meta[name="keywords"]');
  await expect(metaKeywords).toHaveAttribute('content', 'svelte, runes, js, ts, tailwind, bash, python');
  const metaOgTitle = page.locator('meta[property="og:title"]');
  await expect(metaOgTitle).toHaveAttribute('content', 'codewithshin.com');
  const metaOgDescription = page.locator('meta[property="og:description"]');
  await expect(metaOgDescription).toHaveAttribute('content', 'Hi, I\'m Shin, a programmer and technology enthusiast with a passion for sharing my knowledge and experience.');
  const metaOgUrl = page.locator('meta[property="og:url"]');
  await expect(metaOgUrl).toHaveAttribute('content', 'http://localhost:4173/');
  const metaOgImage = page.locator('meta[property="og:image"]');
  await expect(metaOgImage).toHaveAttribute(
    'content',
    'https://open-graph-vercel.vercel.app/api/codewithshin'
  );
  const metaTwitterTitle = page.locator('meta[name="twitter:title"]');
  await expect(metaTwitterTitle).toHaveAttribute('content', 'codewithshin.com');
  const metaTwitterDescription = page.locator('meta[name="twitter:description"]');
  await expect(metaTwitterDescription).toHaveAttribute('content', 'Hi, I\'m Shin, a programmer and technology enthusiast with a passion for sharing my knowledge and experience.');
});

test('svelte page has expected h1, meta title', async ({ page }) => {
	await page.goto('/svelte');
	await expect(page.getByRole('heading', { name: 'Svelte Libraries' })).toBeVisible();
	await expect(page).toHaveTitle('Svelte libraries | codewithshin.com');
  const metaDescription = page.locator('meta[name="description"]');
  await expect(metaDescription).toHaveAttribute('content', 'Svelte 4, 5, and Runes libraries');
  const metaKeywords = page.locator('meta[name="keywords"]');
  await expect(metaKeywords).toHaveAttribute('content', 'svelte, runes, js, ts, tailwind, bash, python');
  const metaOgTitle = page.locator('meta[property="og:title"]');
  await expect(metaOgTitle).toHaveAttribute('content', 'Svelte libraries | codewithshin.com');
  const metaOgDescription = page.locator('meta[property="og:description"]');
  await expect(metaOgDescription).toHaveAttribute('content', 'Svelte 4, 5, and Runes libraries');
  const metaOgUrl = page.locator('meta[property="og:url"]');
  await expect(metaOgUrl).toHaveAttribute('content', 'http://localhost:4173/svelte');
  const metaOgImage = page.locator('meta[property="og:image"]');
  await expect(metaOgImage).toHaveAttribute(
    'content',
    'https://open-graph-vercel.vercel.app/api/codewithshin?title=Svelte%20libraries'
  );
  const metaTwitterTitle = page.locator('meta[name="twitter:title"]');
  await expect(metaTwitterTitle).toHaveAttribute('content', 'Svelte libraries | codewithshin.com');
  const metaTwitterDescription = page.locator('meta[name="twitter:description"]');
	await expect(metaTwitterDescription).toHaveAttribute('content', 'Svelte 4, 5, and Runes libraries');
	const metaTwitterImage = page.locator('meta[name="twitter:image"]');
	await expect(metaTwitterImage).toHaveAttribute('content', 'https://open-graph-vercel.vercel.app/api/codewithshin?title=Svelte%20libraries');
});

test('svelte-svg-icon-sets page has expected h1, meta title', async ({ page }) => {
	await page.goto('/svelte-svg-icon-sets');
	await expect(page.getByRole('heading', { name: '29 Svelte SVG Icon Sets' })).toBeVisible();
	await expect(page).toHaveTitle('Svelte SVG Icon Sets | codewithshin.com');
  const metaDescription = page.locator('meta[name="description"]');
  await expect(metaDescription).toHaveAttribute('content', 'Svelte 4, 5, and Runes libraries | codewithshin.com.');
  const metaKeywords = page.locator('meta[name="keywords"]');
  await expect(metaKeywords).toHaveAttribute('content', 'svelte, runes, js, ts, tailwind, bash, python');
  const metaOgTitle = page.locator('meta[property="og:title"]');
  await expect(metaOgTitle).toHaveAttribute('content', 'Svelte SVG Icon Sets | codewithshin.com');
  const metaOgDescription = page.locator('meta[property="og:description"]');
  await expect(metaOgDescription).toHaveAttribute('content', 'Svelte 4, 5, and Runes libraries | codewithshin.com.');
  const metaOgUrl = page.locator('meta[property="og:url"]');
  await expect(metaOgUrl).toHaveAttribute('content', 'http://localhost:4173/svelte-svg-icon-sets');
  const metaOgImage = page.locator('meta[property="og:image"]');
  await expect(metaOgImage).toHaveAttribute(
    'content',
    'https://open-graph-vercel.vercel.app/api/codewithshin?title=Svelte%20SVG%20Icon%20Sets'
  );
  const metaTwitterTitle = page.locator('meta[name="twitter:title"]');
  await expect(metaTwitterTitle).toHaveAttribute('content', 'Svelte SVG Icon Sets | codewithshin.com');
  const metaTwitterDescription = page.locator('meta[name="twitter:description"]');
	await expect(metaTwitterDescription).toHaveAttribute('content', 'Svelte 4, 5, and Runes libraries | codewithshin.com.');
	const metaTwitterImage = page.locator('meta[name="twitter:image"]');
	await expect(metaTwitterImage).toHaveAttribute('content', 'https://open-graph-vercel.vercel.app/api/codewithshin?title=Svelte%20SVG%20Icon%20Sets');
});

test('terminal-tools page has expected h1', async ({ page }) => {
	await page.goto('/terminal-tools');
	await expect(page.getByRole('heading', { name: 'Terminal Tools' })).toBeVisible();
	// await expect(page).toHaveTitle('Terminal Tools - codewithshin.com');
});


test('python-and-jupyter page has expected h1, meta title', async ({ page }) => {
	await page.goto('/python-and-jupyter');
	await expect(page.getByRole('heading', { name: 'Python and Jupyter' })).toBeVisible();
	// await expect(page).toHaveTitle('Python and Jupyter - codewithshin.com');
});

test('homebrew page has expected h1, meta title', async ({ page }) => {
	await page.goto('/homebrew');
	await expect(page.getByRole('heading', { name: 'Homebrew Taps' })).toBeVisible();
	// await expect(page).toHaveTitle('Homebrew Taps - codewithshin.com');
});

test('apps page has expected h1', async ({ page }) => {
	await page.goto('/web-apps');
	await expect(page.getByRole('heading', { name: 'Web apps' })).toBeVisible();
	// await expect(page).toHaveTitle('Web Apps - codewithshin.com');
});