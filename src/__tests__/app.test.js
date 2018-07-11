let page;

beforeAll(async () => {
    page = await browser.newPage();
});

afterAll(async () => {
    await page.close();
});

test('should lazy load new list items', async () => {
        const url = "https://google.com/"
        await page.goto(url);
    },
    10000
);
