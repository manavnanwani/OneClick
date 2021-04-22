    const puppeteer = require('puppeteer');
    const fs = require('fs');
    (async () => {
        const siteUrl = 'https://www.amazon.in/';
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();
    
        const search = "Samsung Galaxy M31 (Ocean Blue, 6GB RAM, 128GB Storage)"
    
        await page.goto(siteUrl, { waitUntil: 'networkidle2' });
        await page.type("input[name='field-keywords']", search);
        await Promise.all([
            page.waitForNavigation({ waitUntil: "networkidle2" }),
            page.click("input[id='nav-search-submit-button']"),
        ]);
    
        await page.waitForSelector('span[class="a-price-whole"]', { visible: true });
        await Promise.all([
            page.waitForNavigation({ waitUntil: "networkidle2" }),
            page.click('span[class="a-price-whole"]'),
        ]);
    
        let data = await page.evaluate(() => {
            // await page.waitForSelector('a[class="a-link-normal a-text-normal"]', { visible: true });
            let title = document.querySelector('div[id="titleSection"]').innerText
            let rating = document.getElementsByClassName('a-icon-alt')[0].innerText
            let mrp = document.getElementsByClassName('priceBlockStrikePriceString')[0].innerText
            let price = document.getElementById('priceblock_dealprice').innerText
            let savings = document.getElementsByClassName('priceBlockSavingsString')[0].innerText
            let desc = document.getElementById('productDescription').innerText
            let url=document.URL
            let main_img = document.getElementById('landingImage').src
            let imgs = document.getElementsByClassName('imageThumbnail')
            let img1=imgs[0].children[0].children[0].children[0].children[1].children[0].src
            let img2=imgs[1].children[0].children[0].children[0].children[1].children[0].src
            let img3=imgs[3].children[0].children[0].children[0].children[1].children[0].src
            let img4=imgs[4].children[0].children[0].children[0].children[1].children[0].src
            return {
                title,
                rating,
                mrp,
                price,
                savings,
                url,
                desc,
                main_img,
                img1,
                img2,
                img3,
                img4
            }
        })
    
    
        console.log(data);
    
        fs.writeFileSync('amazon-file.json', JSON.stringify(data));

        await browser.close();
    })();


