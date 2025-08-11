console.log('---!!! MEMBACA FILE login.js !!!---'); // <--- TAMBAHKAN INI

const { Given, When, Then } = require('@wdio/cucumber-framework');
const CatalogPage = require('../pageobjects/catalogPage');

// ... sisa kodemu ...

Given ('My Demo App opened and directed to Catalog page', async function () {
    const catalogPage = new CatalogPage();
    await catalogPage.verifyLogoMyDemoApp();
})

When ('i click tab menu', async function () {
    const catalogPage = new CatalogPage();
    await catalogPage.clickOptionMenu();
})