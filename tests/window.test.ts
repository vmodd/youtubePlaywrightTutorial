import {test, expect} from "@playwright/test"

test("window opening test", async ({page}) => {
    
        await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");

      const [newWindow] = await Promise.all([
        page.waitForEvent("popup"),
            page.getByText("Follow On Twitter").click()
           
          
        ]);
       console.log(newWindow.url());

})