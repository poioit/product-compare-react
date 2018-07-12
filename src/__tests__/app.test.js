let page;

beforeAll(async () => {
    page = await browser.newPage();
});

afterAll(async () => {
    await page.close();
});

test('check title chair', async () => {
        const url = "http://localhost:3000/"
        await page.goto(url);
        const html = await page.$eval('.product_name', e => e.innerHTML);
        expect(html).toBe('Chair');
    },
    10000
);
