const puppeteer = require('puppeteer');
(async () => {
    const siteUrl = 'https://www.flipkart.com/';
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    const search = "Samsung Galaxy M31"
    
    await page.goto(siteUrl, { waitUntil: 'networkidle2' });

    await page.click("input[class='_3704LK']"),
    await page.type("input[class='_3704LK']", search);
    await Promise.all([
        page.waitForNavigation({ waitUntil: "networkidle2" }),
        page.click("button[class='L0Z3Pu']"),
    ]);

    
    await page.waitForSelector('div[class="_4rR01T"]', { visible: true });
    await Promise.all([
        page.waitForNavigation({ waitUntil: "networkidle2" }),
        page.click('div[class="_4rR01T"]'),
        // page.click('div[class="_13oc-S"]'),
    ]);

    let data = await page.evaluate(() => {
        // await page.waitForSelector('div[class="_4rR01T"]', { visible: true });
        let title = document.querySelector('span[class="B_NuCI"]').innerText
        // let rating = document.getElementsByClassName('a-icon-alt')[0].innerText
        // let mrp = document.getElementsByClassName('priceBlockStrikePriceString')[0].innerText
        // let price = document.getElementById('priceblock_dealprice').innerText
        // let savings = document.getElementsByClassName('priceBlockSavingsString')[0].innerText
        // let desc = document.getElementById('productDescription').innerText
        // let url=document.URL
        // let img1=document.getElementById('landingImage').src
        // let imgs = document.getElementsByClassName('a-dynamic-image')
        // let img1=imgs[0].src
        // let img2=imgs[1].src
        // let img3=imgs[3].src
        // let img4=imgs[4].src
        return {
            title
            // rating,
            // mrp,
            // price,
            // savings,
            // url,
            // desc,
            // img1,
            // img2,
            // img3,
            // img4
        }
    })


    console.log(data);

    // fs.writeFileSync('flipkart-file.json', JSON.stringify(data));

    await browser.close();
})();


