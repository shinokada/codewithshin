import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  console.log(`Running ${test.info().title}`);
  await page.goto('/');
});

// index page
test('index page has expected h1.', async ({ page }) => {
  await expect(page.getByRole('heading', { name: 'Welcome to Codewithshin where you can find a lot of coding goodies' })).toBeVisible();
});

test('index page has expected meta title.', async ({ page }) => {
  await expect(page).toHaveTitle('codewithshin.com');
});

test('index page has expected meta description.', async ({ page }) => {
  const metaDescription = page.locator('meta[name="description"]');
  await expect(metaDescription).toHaveAttribute('content', "Hi, I'm Shin, a programmer and technology enthusiast with a passion for sharing my knowledge and experience.");
});

test('index page has expected meta keywords.', async ({ page }) => {
  const metaKeywords = page.locator('meta[name="keywords"]');
  await expect(metaKeywords).toHaveAttribute('content', 'svelte, runes, js, ts, tailwind, bash, python');
});

test('index page has expected meta og tags.', async ({ page }) => {
  const metaOgTitle = page.locator('meta[property="og:title"]');
  await expect(metaOgTitle).toHaveAttribute('content', 'codewithshin.com');
});

test('index page has expected meta og description.', async ({ page }) => {
  const metaOgDescription = page.locator('meta[property="og:description"]');
  await expect(metaOgDescription).toHaveAttribute('content', "Hi, I'm Shin, a programmer and technology enthusiast with a passion for sharing my knowledge and experience.");
});

test('index page has expected meta og url and og image.', async ({ page }) => {
  const metaOgUrl = page.locator('meta[property="og:url"]');
  await expect(metaOgUrl).toHaveAttribute('content', 'http://localhost:4173/');
  const metaOgImage = page.locator('meta[property="og:image"]');
  await expect(metaOgImage).toHaveAttribute('content', 'https://open-graph-vercel.vercel.app/api/codewithshin');
});

test('index page has expected meta twitter tags.', async ({ page }) => {
  const metaTwitterTitle = page.locator('meta[name="twitter:title"]');
  await expect(metaTwitterTitle).toHaveAttribute('content', 'codewithshin.com');
  const metaTwitterDescription = page.locator('meta[name="twitter:description"]');
  await expect(metaTwitterDescription).toHaveAttribute('content', "Hi, I'm Shin, a programmer and technology enthusiast with a passion for sharing my knowledge and experience.");
});
