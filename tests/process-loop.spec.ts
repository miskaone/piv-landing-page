import { test, expect } from '@playwright/test';

test.describe('ProcessLoop Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('[data-testid="process-loop"]');
  });

  test('auto-cycles through all three phases', async ({ page }) => {
    const processSection = page.locator('[data-testid="process-loop"]');
    await expect(processSection).toBeVisible();

    // Check initial phase (Plan)
    const planCard = page.locator('[data-phase="0"]');
    await expect(planCard).toHaveClass(/active/);

    // Wait for auto-cycle to Implement
    await page.waitForTimeout(4100);
    const implementCard = page.locator('[data-phase="1"]');
    await expect(implementCard).toHaveClass(/active/);

    // Wait for auto-cycle to Validate
    await page.waitForTimeout(4100);
    const validateCard = page.locator('[data-phase="2"]');
    await expect(validateCard).toHaveClass(/active/);
  });

  test('click advances to specific phase immediately', async ({ page }) => {
    // Click on Validate card
    await page.locator('[data-phase="2"]').click();

    // Should immediately show Validate as active
    await expect(page.locator('[data-phase="2"]')).toHaveClass(/active/);
    await expect(page.locator('[data-testid="validate-logs"]')).toBeVisible();
  });

  test('SVG beam animation is visible on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });

    const beam = page.locator('[data-testid="connection-beam"]');
    await expect(beam).toBeVisible();
  });
});
