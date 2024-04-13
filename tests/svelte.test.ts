import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  console.log(`Running ${test.info().title}`);
  await page.goto('/svelte');
});

test.describe('Tests for Svelt page', () => {
  test('svelte page has expected h1, meta title', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Svelte Libraries' })).toBeVisible();
  });

  test('svelte page has expected meta title', async ({ page }) => {
    await expect(page).toHaveTitle('Svelte libraries | codewithshin.com');
  });

  test('svelte page has expected meta description', async ({ page }) => {
    const metaDescription = page.locator('meta[name="description"]');
    await expect(metaDescription).toHaveAttribute('content', 'Svelte 4, 5, and Runes libraries');
  });

  test('svelte page has expected meta keywords', async ({ page }) => {
    const metaKeywords = page.locator('meta[name="keywords"]');
    await expect(metaKeywords).toHaveAttribute('content', 'svelte, runes, js, ts, tailwind, bash, python');
  });

  test('svelte page has expected meta og tags', async ({ page }) => {
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
  });

  test('svelte page has expected meta twitter tags', async ({ page }) => {
    const metaTwitterTitle = page.locator('meta[name="twitter:title"]');
    await expect(metaTwitterTitle).toHaveAttribute('content', 'Svelte libraries | codewithshin.com');
    const metaTwitterDescription = page.locator('meta[name="twitter:description"]');
    await expect(metaTwitterDescription).toHaveAttribute('content', 'Svelte 4, 5, and Runes libraries');
    const metaTwitterImage = page.locator('meta[name="twitter:image"]');
    await expect(metaTwitterImage).toHaveAttribute('content', 'https://open-graph-vercel.vercel.app/api/codewithshin?title=Svelte%20libraries');
  });  
});