import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('navigates between pages', async ({ page }) => {
    await page.goto('/');
    
    // Click About link
    await page.click('text=About');
    await expect(page).toHaveURL('/about');
    await expect(page.locator('h1')).toContainText('Our Story');
    
    // Click Features link
    await page.click('text=Features');
    await expect(page).toHaveURL('/features');
    await expect(page.locator('h1')).toContainText('Features That Empower');
    
    // Test mobile menu
    await page.setViewportSize({ width: 375, height: 667 });
    await page.click('button[aria-label="Open menu"]');
    await expect(page.locator('[role="menu"]')).toBeVisible();
  });
});

test('accessibility navigation', async ({ page }) => {
  await page.goto('/');
  
  // Test skip link
  await page.keyboard.press('Tab');
  await expect(page.locator('a:text("Skip to main content")')).toBeFocused();
  
  // Test keyboard navigation
  await page.keyboard.press('Tab');
  await expect(page.locator('a:text("Home")')).toBeFocused();
});