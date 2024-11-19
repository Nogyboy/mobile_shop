// @ts-check
import { test, expect } from '@playwright/test'

// Search Product
test('search product', async ({ page }) => {
  await page.goto('http://localhost:5173/')

  // Wait for the card to be visible.
  const cardElement = page.locator('#ListProducts >> text=neoTouch P400')
  await cardElement.waitFor()

  await page.getByPlaceholder('Search').click()
  await page.getByPlaceholder('Search').fill('neoTouch P400')

  // Expect a item Liquid E2 to be visible
  await expect(page.getByText('neoTouch P400')).toBeVisible()
  await expect(page.getByText('neoTouch P300')).not.toBeVisible()
})

// Product Detail
test('product detail', async ({ page }) => {
  await page.goto('http://localhost:5173/')

  // Wait for the card to be visible.
  const cardElement = page.locator('#ListProducts >> text=neoTouch P400')
  await cardElement.waitFor()

  await page.getByPlaceholder('Search').click()
  await page.getByPlaceholder('Search').fill('neoTouch P400')

  await page.waitForTimeout(1000)

  await page.getByRole('link', { name: 'Buy Now' }).first().click()

  await expect(page.getByText('Weight: 125')).toBeVisible()
})

// Add to Cart

test('add to cart', async ({ page }) => {
  await page.goto('http://localhost:5173/')

  // Wait for the card to be visible.
  const cardElement = page.locator('#ListProducts >> text=neoTouch P400')
  await cardElement.waitFor()

  await page.getByPlaceholder('Search').click()
  await page.getByPlaceholder('Search').fill('neoTouch P400')

  await page.waitForTimeout(1000)

  await page.getByRole('link', { name: 'Buy Now' }).first().click()

  await expect(page.getByText('Weight: 125')).toBeVisible()

  await page.getByRole('button', { name: 'Add to Cart' }).click()

  await page.getByRole('button', { name: '1' }).click()

  await page.getByRole('button', { name: 'View cart' }).click()

  await expect(page.getByRole('heading', { name: 'neoTouch P400' })).toBeVisible()
})
