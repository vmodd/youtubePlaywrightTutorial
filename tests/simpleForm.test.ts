import {expect, test} from "@playwright/test"

test ("inputForm", async ({page}) => {
    
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo")
     const input = "ana are mere";
     const messageInput = page.locator("input#user-message");
     expect(messageInput).toHaveAttribute("placeHolder","Please enter your Message")     
     messageInput.fill(input);
     page.locator("#showInput").click();
     const shownValue = page.locator("(//div[@id='user-message']//p)[1]")
    expect(shownValue).toHaveText("" + input);
})

test("sum", async ({page}) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo")
    const sum1 = page.locator("#sum1");
    await sum1.scrollIntoViewIfNeeded();
    const sum2 = page.locator("#sum2");
    expect(sum1).toHaveAttribute("placeholder", "Please enter first value")
    expect(sum2).toHaveAttribute("placeholder", "Please enter second value")
    let num1 = 111;
    let num2 = 112;
    await sum1.fill("" + num1);
    await sum2.fill("" + num2);
    const sumButton = page.locator("//form[@id='gettotal']//button[1]")
    await sumButton.click();
    const resultShown = page.locator("(//div[@id='user-message']//p)[2]")
    let expectedResult = num1 + num2;
    console.log(await resultShown.textContent())
    expect(resultShown).toHaveText("" + expectedResult);

})

