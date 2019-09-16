import { Request, Response } from "express";

const functions = require('firebase-functions');

const puppeteer = require('puppeteer');

//const puppeteer2 = require('puppeteer');


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

const closeConnection = async (page_2: any, browser_2: any) => {
    page_2 && (await page_2.close());
    browser_2 && (await browser_2.close());
};

////

const openConnection = async () => {

    const browser_2 = await puppeteer.launch({

        headless: true,
        args: [
            '--disable-gpu',
            '--disable-dev-shm-usage',
            '--disable-setuid-sandbox',
            '--no-first-run',
            '--no-sandbox',
            '--no-zygote',
            '--single-process',

        ],

    });

    const page_2 = await browser_2.newPage();

    return { browser_2, page_2 };

    // const browser = await puppeteer.launch(PUPPETEER_OPTIONS);
    // const page = await browser.newPage();
    // await page.setUserAgent(
    //   'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36'
    // );
    // await page.setViewport({ width: 1680, height: 1050 });

};

exports.testPuppeteer_2 = functions
    .runWith({ memory: '2GB', timeoutSeconds: 450 }).https
    .onRequest(async (request: Request, response: Response) => {

        let { browser_2, page_2 } = await openConnection();


        //after open page. 

        try {

            //await page_2.goto('https://medium.com/', { waitUntil: 'load' });

            //const firstArticleTitle = await page_2.evaluate(() =>document.querySelector('.extremeHero-titleClamp').innerText);

            //response.status(200).send({'data':'jadi load'});

            //var typedPassed = 'skincarisma cosrx salicylic acid daily gentle cleanser ingredient_list'

            var typedPassed =  request.body.data;

            var return_URL = ''

            console.log('data got, puppeteer_2 => jadi la pulak')

            await page_2.goto('https://www.google.com', { waitUntil: 'load' });


            await page_2.focus('#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div.SDkEP > div.a4bIc > input');

            await page_2.keyboard.type(typedPassed, { delay: 10 });

            await page_2.keyboard.press('Enter', { waitUntil: 'load', timeout: 0 });

            await page_2.waitFor("div.bkWMgd > div.srg >  div:nth-child(1) > div > div > div.r > a");

            const textHere_2 = await page_2.evaluate(() => Array.from(document.querySelectorAll('div.bkWMgd > div.srg >  div:nth-child(1) > div > div > div.r > a'), element => element.getAttribute('href')));


            textHere_2.forEach((ele: any) => {

                var stringasal = ele; //to use later 
                var pattern = 'www.skincarisma.com';
                var pattern_2 = new RegExp(pattern, 'gi');
                var check = ele.match(pattern_2);

                //console.log('\n count 1')

                if (check) {

                    //console.log('\n count 2')
                    var pattern_new = 'ingredient_list';
                    var pattern_new_2 = new RegExp(pattern_new, 'gi');

                    var checkFinal = stringasal.match(pattern_new_2);

                    if (checkFinal) {

                        return_URL = ele;

                        //console.log('\n count 3 ', return_URL)
                    }
                }
            });

            if (return_URL == '') {

                //console.log('\n count 4 ', return_URL)

                const text_Here_3 = await page_2.evaluate(() => Array.from(document.querySelectorAll('div.bkWMgd > div.srg >  div:nth-child(2) > div > div > div.r > a'), element => element.getAttribute('href')));

                text_Here_3.forEach((ele2: any) => {

                    var stringasal = ele2; //to use later 
                    var pattern = 'www.skincarisma.com';
                    var pattern_2 = new RegExp(pattern, 'gi');
                    var check = ele2.match(pattern_2);
                    //console.log('\n count 5 ', el)
                    if (check) {

                        var pattern_new = 'ingredient_list';
                        var pattern_new_2 = new RegExp(pattern_new, 'gi');

                        var checkFinal = stringasal.match(pattern_new_2);

                        //console.log('\n count 6 ', checkFinal)

                        if (checkFinal) {

                            return_URL = ele2;

                            //console.log('\n count 7 ', return_URL)
                        }

                    }

                });
            }

            console.log('return url', return_URL)

            response.status(200).send({'data':return_URL})

        } catch (e) {

            response.status(500).json({ 'error': { 'message': 'Request had invalid credentials.', "status": "UNAUTHENTICATED", "details": { "foo": e.toString() } } })

            console.log('error la pulak', e.toString())
        } finally {

            await closeConnection(page_2, browser_2);
        }



    })



///// 


exports.helloWorld_2 = functions.https.onRequest((request: Request, response: Response) => {

    console.log('im here madafaka')
    // response.send("Hello from Firebase!");
    var here = '';
    try {


        console.log('wait 1=> ', request.body)
        console.log('wait 2=> ', JSON.stringify(request.body))
        //console.log('wait 3=> ', request.data)
        //  console.log('wait 4=> ', JSON.stringify(request.data))
        console.log('wait 5=> ', request.body.data)
        console.log('wait 6=> ', JSON.stringify(request.body.data))

        here = request.body.data + ' , im not surprised madafak'

    } catch (error) {


        console.log('defak 2', error)

    }

    console.log('defak 3')

    //response.writeHead(200,{'Content-Type':'application/json'})

    response.send({ 'data': 'check =>' + here }); //>> semi working

    //   response.end();

});

//////////////// test other website, puppeteer




/////////////////////

exports.testPuppeteer = functions
    .runWith({ memory: '1GB', timeoutSeconds: 350 }).https
    .onRequest(async (request: Request, response: Response) => {




        const browser = await puppeteer.launch({

            headless: true,
            args: [
                '--disable-gpu',
                '--disable-dev-shm-usage',
                '--disable-setuid-sandbox',
                '--no-first-run',
                '--no-sandbox',
                '--no-zygote',
                '--single-process',

            ],

        });

        var typedPassed = 'skincarisma cosrx salicylic acid daily gentle cleanser ingredient_list'

        var return_URL = ''

        try {

            var page = await browser.newPage();

        } catch (e2) {

            response.status(500).json({ 'error': { 'message': 'Request had invalid credentials.', "status": "UNAUTHENTICATED", "details": { "foo": e2.toString() } } })

        }

        try {

            await page.goto('https://www.google.com');



            await page.focus('#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div.SDkEP > div.a4bIc > input');

            await page.keyboard.type(typedPassed, { delay: 10 });

            await page.keyboard.press('Enter', { waitUntil: 'load', timeout: 0 });

            await page.waitFor("div.bkWMgd > div.srg >  div:nth-child(1) > div > div > div.r > a");

            //await page.click('div.bkWMgd > div.srg >  div:nth-child(1) > div > div > div.r > a');



            const text = await page.evaluate(() => Array.from(document.querySelectorAll('div.bkWMgd > div.srg >  div:nth-child(1) > div > div > div.r > a'), element => element.getAttribute('href')));



            text.forEach((ele: any) => {

                var stringasal = ele; //to use later 
                var pattern = 'www.skincarisma.com';
                var pattern_2 = new RegExp(pattern, 'gi');
                var check = ele.match(pattern_2);

                //console.log('\n count 1')

                if (check) {

                    //console.log('\n count 2')
                    var pattern_new = 'ingredient_list';
                    var pattern_new_2 = new RegExp(pattern_new, 'gi');

                    var checkFinal = stringasal.match(pattern_new_2);

                    if (checkFinal) {

                        return_URL = ele;

                        //console.log('\n count 3 ', return_URL)
                    }
                }
            });

            if (return_URL == '') {

                //console.log('\n count 4 ', return_URL)

                const text_2 = await page.evaluate(() => Array.from(document.querySelectorAll('div.bkWMgd > div.srg >  div:nth-child(2) > div > div > div.r > a'), element => element.getAttribute('href')));

                text_2.forEach((ele2: any) => {

                    var stringasal = ele2; //to use later 
                    var pattern = 'www.skincarisma.com';
                    var pattern_2 = new RegExp(pattern, 'gi');
                    var check = ele2.match(pattern_2);
                    //console.log('\n count 5 ', el)
                    if (check) {

                        var pattern_new = 'ingredient_list';
                        var pattern_new_2 = new RegExp(pattern_new, 'gi');

                        var checkFinal = stringasal.match(pattern_new_2);

                        //console.log('\n count 6 ', checkFinal)

                        if (checkFinal) {

                            return_URL = ele2;

                            //console.log('\n count 7 ', return_URL)
                        }

                    }

                });
            }

            console.log('return url', return_URL)

        } catch (e) {

            response.status(500).json({ 'error': { 'message': 'Request had invalid credentials.', "status": "UNAUTHENTICATED", "details": { "foo": e.toString() } } })

        }

        await browser.close();




        await response.send({ 'data': 'check => ' + return_URL });


    })





