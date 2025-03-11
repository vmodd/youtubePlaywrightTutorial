import {test, expect} from "@playwright/test"

test("dropdown", async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");

    await page.selectOption('#select-demo'
        , {value :'Sunday'})
    const textShown = page.locator("//p[@class='selected-value text-size-14']")
    expect(textShown).toContainText('Sunday')
    

   
})

test("multipleDropdown", async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
    const firstOption = "California";
   
    await page.selectOption("#multi-select", [{value: firstOption},
            {value: "New York"}
    ])    
    
    await page.click("#printMe");
    page.getByRole('button', { name: "Get Last Selected" }).click({force:true});
    await page.waitForTimeout(5000)
    const text = page.locator("//p[@class='text-size-14']//span[1]")
    console.log(text);
    // expect(text).toContainText(firstOption)
})

test("jqueryDropdown", async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo")
    //page.getByRole("combobox", { name: "India" })
    // await page.locator("(//span[@class='selection'])[1]").click();
    // await page.selectOption('#country', {label: 'India'})
    // await page.locator("ul#select2-country-results")
    // .locator('li',{
    //     hasText:"Denmark"
    // }).click()
    // await page.waitForTimeout(2000)
    // await page.locator("(//span[@class='selection'])[1]").click();
    
    await page.locator("(//span[@class='selection'])[1]").click();
    const comboContains = await page.locator('ul#select2-country-results').locator('li').allInnerTexts();
    const comboLength = comboContains.length;
    console.log(comboContains[2]);
    
    for(let i=1; i<comboLength;i++){
       await page.getByRole("treeitem", {name :" " + comboContains[i]}).click();
       await page.locator("(//span[@class='selection'])[1]").click();
    }
})

test("multipleDropdownSelection", async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo")
    await page.locator("//span[@class='select2-selection select2-selection--multiple']").click();
   await page.locator("ul.select2-results__options").getByRole("treeitem",{name: "Idaho"}).click();
    await page.waitForTimeout(2000);
})

test("categoryDropdownSelection", async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo")
//     await page.locator("#files").click();
//    await page.locator("//optgroup[@label='Scripting languages']").getByRole("option", { name: "PHP" }).click();
//    await page.locator("#files").click();
await page.locator("#files").scrollIntoViewIfNeeded();
page.selectOption("#files", {label: "C"})
    
})