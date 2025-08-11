class CatalogPage {
    get logoMyDemoApp(){
        return $('**/XCUIElementTypeOther[`name == "longpress reset app"`]')
    }
    async verifyLogoMyDemoApp(){
        await this.logoMyDemoApp.waitForExist();
    }

    get tabBarOptionMenu(){
        return $('**/XCUIElementTypeButton[`name == "tab bar option menu"`]')
    }
    async clickOptionMenu(){
        await this.tabBarOptionMenu.click();
    }
}

module.exports = CatalogPage