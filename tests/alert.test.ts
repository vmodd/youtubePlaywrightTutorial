import{expect, test} from "@playwright/test"
import { link } from "fs";
import { setTimeout } from "timers";

test("alertManage", async ({page}) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");
    
    expect(page).toHaveURL("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");

    page.on("dialog", async (alert) => {
        const text = await alert.message();
        console.log(text);
        await alert.accept();
    })
    page.getByRole('button', {name : 'Click me'}).nth(0).click();
    

    
})
test("alertManage2", async ({page}) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");
    
    expect(page).toHaveURL("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");

    page.on("dialog", async (alert) => {
        const text2 = await alert.message();
        console.log(text2);
        await alert.dismiss();
    })
    await page.getByRole('button', {name : 'Click me'}).nth(1).click();
    const confirmation = page.locator("#confirm-demo");
    console.log(confirmation);
    expect(confirmation).toContainText('Cancel')
  
})
test("alertManage3", async ({page}) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");
    
    expect(page).toHaveURL("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");
    const textIntroduced = 'ana are mere';
    page.on("dialog", async (alert) => {
        const text = await alert.defaultValue();
        await alert.accept(textIntroduced);
    })
    await page.getByRole('button', {name : 'Click me'}).nth(2).click();
    const confirmation = page.locator("#prompt-demo");
    expect(confirmation).toContainText(textIntroduced);
})
test("alertModal", async ({page}) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo");
    await page.getByRole('button', {name : 'Launch Modal'}).nth(0).click();
    await page.getByRole('button',{name:'Save Changes'}).click();
  

})