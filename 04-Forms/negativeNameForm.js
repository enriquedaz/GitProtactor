describe('Negative Name Form angular Demo', function() {
    it('should display a validation message negative', function () {

        browser.get('https://qaclickacademy.github.io/protocommerce/');

        element(by.name("name")).sendKeys("e");
        element(by.css("input[name='email']")).click();

        element(by.css("div[class*='alert alert-danger']")).getText().then((text)=>{
            console.log(text);
            expect(text).toEqual("Name should be at least 2 characters");
        });
    });
});