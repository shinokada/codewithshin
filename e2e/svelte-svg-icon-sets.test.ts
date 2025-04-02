import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  console.log(`Running ${test.info().title}`);
  await page.goto('/svelte-svg-icon-sets');
});

test('svelte-svg-icon-sets page has expected h1, meta title', async ({ page }) => {
  await expect(page.getByRole('heading', { name: 'Svelte SVG Icon & Illustration Sets' })).toBeVisible();
});

test('svelte-svg-icon-sets page has expected meta title', async ({ page }) => {
  await expect(page).toHaveTitle('Svelte SVG Icon Sets - codewithshin.com');
});

test('svelte-svg-icon-sets page has expected meta description', async ({ page }) => {
  const metaDescription = page.locator('meta[name="description"]');
  await expect(metaDescription).toHaveAttribute('content', 'Svelte SVG Icon and Illustration Sets for for Svelte 4/5/Runes projects');
});

test('svelte-svg-icon-sets page has expected meta og tags', async ({ page }) => {
  const metaOgTitle = page.locator('meta[property="og:title"]');
  await expect(metaOgTitle).toHaveAttribute('content', 'Svelte SVG Icon Sets - codewithshin.com');
  const metaOgDescription = page.locator('meta[property="og:description"]');
  await expect(metaOgDescription).toHaveAttribute('content', '29 Svelte SVG Icon Sets for Svelte 4/5/Runes projects');
  const metaOgUrl = page.locator('meta[property="og:url"]');
  await expect(metaOgUrl).toHaveAttribute('content', 'http://localhost:4173/svelte-svg-icon-sets');
  const metaOgImage = page.locator('meta[property="og:image"]');
  await expect(metaOgImage).toHaveAttribute('content', 'https://open-graph-vercel.vercel.app/api/codewithshin?title=Svelte%20SVG%20Icon%20Sets');
});

test('svelte-svg-icon-sets page has expected meta twitter tags', async ({ page }) => {
  const metaTwitterTitle = page.locator('meta[name="twitter:title"]');
  await expect(metaTwitterTitle).toHaveAttribute('content', 'Svelte SVG Icon Sets - codewithshin.com');
  const metaTwitterDescription = page.locator('meta[name="twitter:description"]');
  await expect(metaTwitterDescription).toHaveAttribute('content', 'Svelte SVG Icon & Illustration Sets for for Svelte 4/5/Runes projects');
  const metaTwitterImage = page.locator('meta[name="twitter:image"]');
  await expect(metaTwitterImage).toHaveAttribute('content', 'https://open-graph-vercel.vercel.app/api/codewithshin?title=Svelte%20SVG%20Icon%20Sets');
});
