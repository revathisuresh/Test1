


describe('fundtestsuite', function() {
	var obj=  require("./Jsobjectdemo.js");
  var using=  require("jasmine-data-provider");
  var d=  require("./data.js");
  var path = require("path");

  var remote = require("C:/Users/revathip/AppData/Roaming/npm/node_modules/protractor/node_modules/selenium-webdriver/remote");  
  
  beforeEach(function() {
    var EC = protractor.ExpectedConditions;

    obj.getURL();
  
  expect (browser.getTitle()).toBe('PaySchools Central');
   

  
  },500000);

  using(d.Datadriven, function (data, description) {
		

    it('TS-'+description , function() {
    var EC = protractor.ExpectedConditions;

    browser.ignoreSynchronization = true;
    //obj.getURL();

    
    obj.email.sendKeys(data.email2);
    //console.log(data.email[i]);
    obj.password.sendKeys(data.password2);
    obj.login.click().then(function(){
        browser.sleep(8000);
    });
    expect(obj.digital.isEnabled()).toBe(true);

obj.student1.click().then(function(){
  browser.sleep(5000);

  });
  obj.addstudent.click().then(function(){
  browser.sleep(2000);

  });
  obj.state.click().then(function(){
  browser.sleep(2000);

  });
  obj.selectstate.click().then(function(){
  browser.sleep(2000);

  });
  obj.district1.click().then(function(){
    browser.sleep(2000);

  });
  obj.districtselect. click().then(function(){
    browser.sleep(2000);

  });

  obj.studentid.sendKeys(data.studentid).then(function(){
    browser.sleep(2000);

  });
  obj.fname.sendKeys(data.fname).then(function(){
    browser.sleep(2000);

  });
  obj.lname.sendKeys(data.lname).then(function(){
    browser.sleep(2000);

  });
  obj.relation.click().then(function(){
  browser.sleep(2000);
  });
  obj.relationselect.click().then(function(){
  browser.sleep(2000);
  });
  obj.studentbutton.click().then(function(){
  browser.sleep(8000);
  });

  expect(obj.digital.isEnabled()).toBe(true);



        obj.logout.click().then(function(){	   
          browser.sleep(5000);
      });

    },2500000);

  });
  using(d.Datadriven, function (data, description) {
		
    it('TS-'+description , function() {
        var EC = protractor.ExpectedConditions;

        browser.ignoreSynchronization = true;
       // obj.getURL();

        obj.email.sendKeys(data.email1);
        //console.log(data.email[i]);
        obj.password.sendKeys(data.password1);
        obj.login.click().then(function(){
            browser.sleep(25000);

        });
        obj.cancel.click().then(function(){	 
            browser.sleep(5000);  
        });

        obj.digital.click().then(function(){
            browser.sleep(5000);

      }); 


     // obj.Student.click().then(function(){
       // browser.sleep(8000);

 // }); 
 expect((obj.Schoolname).isPresent()).toBe(true);
 expect(obj.Schoolname.getText()).toBe(data.Schoolname);
                           obj.Schoolname.getText().then(function(text){
                               console.log(text);
                               browser.sleep(1000);
                         
                         });
 expect((obj.district).isPresent()).toBe(true);
 expect(obj.district.getText()).toBe(data.District);
                           obj.district.getText().then(function(text){
                               console.log(text);
                               browser.sleep(1000);
                         
                         });
 expect((obj.Name).isPresent()).toBe(true);
 expect(obj.Name.getText()).toBe(data.Studentname);
                           obj.Name.getText().then(function(text){
                               console.log(text);
                               browser.sleep(1000);
                         
                         });
 expect((obj.ID).isPresent()).toBe(true);
 expect(obj.ID.getText()).toBe(data.ID);
                           obj.ID.getText().then(function(text){
                               console.log(text);
                               browser.sleep(1000);
                         
                         });
 expect((obj.Grade).isPresent()).toBe(true);
 expect(obj.Grade.getText()).toBe(data.Grade);
                           obj.Grade.getText().then(function(text){
                               console.log(text);
                               browser.sleep(1000);
                         
                         });
 expect((obj.HR).isPresent()).toBe(true);
 expect(obj.HR.getText()).toBe(data.HR);
                           obj.HR.getText().then(function(text){
                               console.log(text);
                               browser.sleep(1000);
                         
                         });
 expect((obj.Download).isPresent()).toBe(true);
 obj.Download.click().then(function(){
   browser.sleep(5000);
 
 });
 expect((obj.image).isPresent()).toBe(true);
 expect((obj.barcode).isPresent()).toBe(true);
 expect((obj.returntodashboard).isPresent()).toBe(true);
 expect((obj.privacy).isPresent()).toBe(true);
 expect((obj.help).isPresent()).toBe(true);
 expect((obj.terms).isPresent()).toBe(true);
 
   
 expect((obj.john).isPresent()).toBe(false);
 
 obj.forward.click().then(function(){
   browser.sleep(2000);
 
 });
 obj.forward.click().then(function(){
   browser.sleep(5000);
 
 });
 expect((obj.Jackson).isPresent()).toBe(true);
 
 
browser.setFileDetector(new remote.FileDetector());

      obj.getURL1();
      browser.sleep(8000);
      
      var fileToUpload = 'C:/Users/revathip/Desktop/825366821.png';
     absolutePath = path.resolve(__dirname,fileToUpload);
     
obj.upload.sendKeys(absolutePath).then(function(){
  browser.sleep(8000);
                    
  });



browser.driver.sleep(5000);



  obj.submit.click().then(function(){
    browser.driver.sleep(5000);

});

//handlePromise = browser.getAllWindowHandles();

      browser.getAllWindowHandles().then(function(handles){
        //handlePromise.then(function(handles) {

      browser.waitForAngularEnabled(false);

      //WebDriverWait wait=new WebDriverWait(driver,5).until(ExpectedConditions.numberOfWindowsToBe(2)); //induce WebDriverWait
     // var newtab = handles[1];
      var handle = browser.switchTo().window(handles[0]).then(function(){   
      //browser.switchTo().window(handles[1]).then(function(){
    browser.driver.sleep(5000);
      
    });

  });

  expect(obj.format.getText()).toBe(data.format);
  obj.format.getText().then(function(text){
      console.log(text);
      browser.sleep(2000);

});

expect(obj.stuID.getText()).toBe(data.stuID);
obj.stuID.getText().then(function(text){
    console.log(text);
    browser.sleep(1000);

});


      /*obj.upload.sendKeys(absolutePath).then(function(){
        browser.sleep(8000);
                          
        });

        obj.submit.click().then(function(){
          browser.sleep(8000);
      
      }); */



 },25000000);

});

/*using(d.Datadriven, function (data, description) {
		
  it('TS-'+description , function() {

    browser.ignoreSynchronization = true;
    browser.setFileDetector(new remote.FileDetector());

      obj.getURL1();
      browser.sleep(8000);
      
      var fileToUpload = 'C:/Users/Ranjitha/Desktop/825366821.png';
     absolutePath = path.resolve(__dirname,fileToUpload);
     
obj.upload.sendKeys(absolutePath).then(function(){
  browser.sleep(8000);
                    
  });


obj.upload.sendKeys(absolutePath).then(function(){
  browser.sleep(8000);
                    
  });

browser.driver.sleep(5000);

  


  obj.submit.click().then(function(){
    browser.driver.sleep(8000);

});

//handlePromise = browser.getAllWindowHandles();

      browser.getAllWindowHandles().then(function(handles){
        //handlePromise.then(function(handles) {

      browser.waitForAngularEnabled(false);

      //WebDriverWait wait=new WebDriverWait(driver,5).until(ExpectedConditions.numberOfWindowsToBe(2)); //induce WebDriverWait
     // var newtab = handles[1];
      var handle = browser.switchTo().window(handles[0]).then(function(){   
      //browser.switchTo().window(handles[1]).then(function(){
    browser.driver.sleep(8000);
      
    });

  });

  expect(obj.format.getText()).toBe(data.format);
  obj.format.getText().then(function(text){
      console.log(text);
      browser.sleep(2000);

});

expect(obj.stuID.getText()).toBe(data.stuID);
obj.stuID.getText().then(function(text){
    console.log(text);
    browser.sleep(1000);

});


      /*obj.upload.sendKeys(absolutePath).then(function(){
        browser.sleep(8000);
                          
        });

        obj.submit.click().then(function(){
          browser.sleep(8000);
      
      }); 
      
        


  },2500000);
});*/



});