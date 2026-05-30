import { test, expect } from "@playwright/test";
import { LoginPage } from "../page/loginpage";
import { SearchHotel } from "../page/searchhotel";
import data from "../test_data/data.json";
import dataDriven from "../test_data/datadriven.json";
import { excelData } from "../utils/excelReader";
import { testFixture } from "../fixture/loginFixture";

let logobj;
testFixture("Adcatin Pom", async ({ loginfixture }) => {
  // logobj = new LoginPage(page);
  // await logobj.navigate(data.url);
  // await logobj.loginfunction(data.userName, data.password);

  await expect(loginfixture).toHaveTitle("Adactin.com - Search Hotel");
  const searchObj = new SearchHotel(loginfixture);
  await searchObj.searchhotelfunction({
    location: { value: data.loc },
    checkIn: data.inDate,
    checkOut: data.checkOut,
    roomType: { label: data.roomType },
    roomNum: { index: data.roomNum },
    adult: { value: data.adult },
    hotelName: { label: data.hotelName },
  });
  await loginfixture.waitForTimeout(2000);
  await expect(loginfixture).toHaveTitle("Adactin.com - Select Hotel");
  await loginfixture.waitForTimeout(3000);
});

test("Forget Password", async ({ page }) => {
  logobj = new LoginPage(page);
  await logobj.navigate(data.url);
  await logobj.forgetPassword();
  await expect(page).toHaveTitle("Adactin.com - Forgot Password");
});

const excelFileData = excelData(); //getting returned data from excelData()

for (const DD of excelFileData) {
  test(`Data driven Testing using ${DD.userName} and ${DD.Password}`, async ({
    page,
  }) => {
    logobj = new LoginPage(page);

    await logobj.navigate(data.url);
    await logobj.loginfunction(DD.userName, DD.Password);
    // if(DD.)
    await expect(page).toHaveTitle("Adactin.com - Search Hotel");
  });
}
