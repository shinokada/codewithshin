import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  console.log(`Running ${test.info().title}`);
  await page.goto('/web-apps');
});

test('web apps page has expected h1', async ({ page }) => {
  await expect(page.getByRole('heading', { name: 'Web apps' })).toBeVisible();
});

test('web apps page has expected meta title', async ({ page }) => {
  await expect(page).toHaveTitle('Web apps - codewithshin.com');
});

test('web apps page has expected meta description', async ({ page }) => {
  const metaDescription = page.locator('meta[name="description"]');
  await expect(metaDescription).toHaveAttribute('content', 'Web apps for learning and other purposes');
});

test('web apps page has expected meta og', async ({ page }) => {
  const metaOgTitle = page.locator('meta[property="og:title"]');
  await expect(metaOgTitle).toHaveAttribute('content', 'Web apps - codewithshin.com');
  const metaOgDescription = page.locator('meta[property="og:description"]');
  await expect(metaOgDescription).toHaveAttribute('content', 'Web apps for learning and other purposes');
  const metaImage = page.locator('meta[property="og:image"]');
  await expect(metaImage).toHaveAttribute('content', 'https://open-graph-vercel.vercel.app/api/codewithshin?title=Web%20apps');
});

test('web apps page has expected meta twitter', async ({ page }) => {
  const metaTwitterTitle = page.locator('meta[name="twitter:title"]');
  await expect(metaTwitterTitle).toHaveAttribute('content', 'Web apps - codewithshin.com');
  const metaTwitterDescription = page.locator('meta[name="twitter:description"]');
  await expect(metaTwitterDescription).toHaveAttribute('content', 'Web apps for learning and other purposes');
  const metaTwitterImage = page.locator('meta[name="twitter:image"]');
  await expect(metaTwitterImage).toHaveAttribute('content', 'https://open-graph-vercel.vercel.app/api/codewithshin?title=Web%20apps');
});
