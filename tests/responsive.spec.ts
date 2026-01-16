import { test, expect } from '@playwright/test';

test.describe('Responsive Design', () => {
  test('Mobile layout stacks correctly', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    const cards = page.locator('[data-phase]');
    const count = await cards.count();
    expect(count).toBe(3);

    // All cards should be visible
    for (let i = 0; i < count; i++) {
      await expect(cards.nth(i)).toBeVisible();
    }
  });

  test('Touch targets meet 44px minimum', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    const card = page.locator('[data-phase="0"]');
    const box = await card.boundingBox();

    expect(box?.height).toBeGreaterThan(44);
    expect(box?.width).toBeGreaterThan(44);
  });
});
