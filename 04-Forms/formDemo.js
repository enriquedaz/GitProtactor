describe('Forms angular demo', function () {
    it('Should works whith forms', function () {

        browser.get('https://qaclickacademy.github.io/protocommerce/');

        element(by.name("name")).sendKeys("Damian");
        element(by.css("input[name='email']")).sendKeys("kidt007@hotmail.com");

        element(by.id("exampleInputPassword1")).sendKeys("enrique");
        element(by.css("input[type='checkbox']")).click();

        element(by.cssContainingText("[id='exampleFormControlSelect1'] option", "Female")).click();
        element.all(by.name("inlineRadioOptions")).first().click();

        element(by.name("bday")).sendKeys("20100512");

        element(by.buttonText("Submit")).click().then(function () {
            element(by.css("div[class*='success']")).getText().then((text)=>{
                expect(text).toContain("Success");
            });
        });
    });
});