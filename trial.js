const puppeteer = require('puppeteer');

(async () => {
    const siteUrl = 'https://www.amazon.in/';
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.addScriptTag({url: 'https://code.jquery.com/jquery-3.2.1.min.js'})
    await page.goto(siteUrl, { waitUntil: 'networkidle2' });
    // const search="sony WH-1000XM4".toUpperCase();
    let search="samsung galaxy a71".toUpperCase();
    await page.type("input[name='field-keywords']", search);

    await Promise.all([
        page.waitForNavigation({ waitUntil: "networkidle2" }),
        page.click("input[id='nav-search-submit-button']"),
    ]);
    
    // data = await page.evaluate(() => {
    //     arr=[]
    //     for (i = 0; i < 4; i++) {
    //         let title = document.querySelectorAll('.a-size-mini')[i].innerText.toUpperCase()
    //         // if (title.includes(search)){
    //         //     arr.push(title)
    //         // }
    //         arr.push(title)
    //     }
    //     return arr
    // })
    // console.log(data)

    // for (i = 0; i < 4; i++) {
    //     const x = await page.$$('.a-size-mini');
    //     if (data[i].includes(search)){
    //         await x[i].click();
    //     }
    // }

    const x = await page.$$('.a-size-mini')
    for (i=0; i<4; i++){
        console.log(x[i]._remoteObject.description);
        if (x[i].includes(search)){
            continue
        }
        else{
            await x[i].click();
        }
    }
    

    debugger;

    await browser.close();
})();


// document.querySelector("div[class='title_wrapper'] > h1").innerText

// console.log(data.includes(search));


    // const winner = await Promise.race([
    //     page.waitForSelector('[data-cel-widget="search_result_1"]'),
    //     page.waitForSelector('[data-cel-widget="search_result_2"]')
    //   ])
      
    // await page.click(winner._remoteObject.description)

    // await Promise.all([
    //     page.waitForNavigation({ waitUntil: "networkidle2" }),
    //     page.click("input[id='nav-search-submit-button']"),
    // ]);
    // await Promise.all([
    //     page.waitForNavigation({ waitUntil: "networkidle2" }),
    //     page.click(".s-result-item"),
    // ]);
  


    // data = await page.evaluate(() => {
    //     let title = document.querySelector('div[data-cel-widget="search_result_1"]').innerText;
    //     return {
    //         title
    //     }
    // })


    // console.log(data);