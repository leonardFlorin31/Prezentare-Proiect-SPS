import { test, expect } from '@playwright/test';

test.describe('Blog Page Test', () => {
    test('Display ale blog-cardurilor', async ({ page }) => {
      // deschide pagina principala a aplicatiei
      await page.goto('http://localhost:3000');

      await page.waitForSelector('.blog-card');

    const blogCards = await page.$$('.blog-card');
    expect(blogCards.length).toBeGreaterThan(0);

    // verifica informatiile
    for (const blogCard of blogCards) {
      //extrag informatiile
      const title = await blogCard.$eval('.blog-title', el => el.textContent);
      const overview = await blogCard.$eval('.blog-overview', el => el.textContent);
      const image = await blogCard.$eval('.blog-image', el => el.getAttribute('src'));

      // verifica dacă titlul, overview și imaginea sunt afisate
      expect(title).not.toBe('');
      expect(overview).not.toBe('');
      expect(image).not.toBe('');
    }
}
    )})

    