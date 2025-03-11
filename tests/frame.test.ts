import {test, expect} from "@playwright/test"

test("frame", async ({page}) => {
    
    await page.goto("https://letcode.in/frame");
    const myFrame = page.frame("firstFr")

    await myFrame?.fill("//input[@placeholder='Enter name']","Andrew")
    await myFrame?.fill("input[name='lname']","Last Name")
    expect(await myFrame?.locator("p.title.has-text-info").textContent()).toContain("You have entered")

})