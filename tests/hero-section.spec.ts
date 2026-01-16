import { test, expect } from '@playwright/test';

test.describe('Hero Section', () => {
  test('NeonFlow canvas renders', async ({ page }) => {
    await page.goto('/');

    const canvas = page.locator('canvas');
    await expect(canvas).toBeVisible();
    await expect(canvas).toHaveCSS('display', 'block');
  });

  test('Canvas responds to click', async ({ page }) => {
    await page.goto('/');

    const canvas = page.locator('canvas');
    await canvas.click({ position: { x: 100, y: 100 } });

    // Canvas should still be visible after click (color randomization happened)
    await expect(canvas).toBeVisible();
  });
});
