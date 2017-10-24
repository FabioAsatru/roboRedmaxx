

var webdriver = require('selenium-webdriver'),
By = webdriver.By,
until = webdriver.until;

var driver = new webdriver.Builder()
.forBrowser('firefox')
.build();



console.log('**************************ROBO REDMAXX*************************************');
driver.get('https://us.qlikcloud.com/hub/personal');
driver.findElement(By.id("MemberLoginForm_LoginForm_QUsername")).clear();
//inserir usuario
driver.findElement(By.id("MemberLoginForm_LoginForm_QUsername")).sendKeys("rennan.s.s");
console.log('inserindo nome....');

driver.findElement(By.id("MemberLoginForm_LoginForm_qPassword")).clear();
//inserir senha
driver.findElement(By.id("MemberLoginForm_LoginForm_qPassword")).sendKeys("Avenger7x");
console.log('inserindo senha....');
driver.findElement(By.className("qlik-submit")).click();
var wtg = setInterval(function () {
    console.log('Processando...');
}, 1000)

setTimeout(function(){
    driver.findElement(By.id("new-personal-app")).click();
    clearInterval(wtg);
    console.log('press new-personal-app');
    driver.findElement(By.id("upload-app")).click();
    console.log('press upload-app');
    driver.findElement(By.id("uploadTrigger")).click();
    console.log('press uploadTrigger');
    var robot = require("robotjs");
    robot.setMouseDelay(6);
    robot.moveMouse(400, 400);
    
    setTimeout(function(){
        robot.setKeyboardDelay(80);
        robot.typeString("C:\\Users\\fabio\\Documents\\Qlik\\Sense\\Apps\\flex_saude.qvf");
        robot.keyTap("enter");
        robot.keyTap("enter");
    },
    10000);
    setTimeout(function () {
             driver.findElement(By.id("done-upload")).click();


             setTimeout(function () {

                 driver.get('https://us.qlikcloud.com/hub/shared');
                 
                 setTimeout(function(){
                     robot.setMouseDelay(6);
                     robot.moveMouse(400, 300);
                     robot.mouseClick('right');
                     //publicar
                     //robot.moveMouse(480, 300);
                     // remover   
                     robot.moveMouse(480, 400);
                     robot.moveMouse(480, 420);
                     robot.mouseClick();
                     robot.keyTap('enter');
                     robot.keyTap('enter');
                    
                     setTimeout(function () {
                         robot.setMouseDelay(6);
                         robot.moveMouse(400, 300);
                         robot.mouseClick('right');
                         //publicar
                         //robot.moveMouse(480, 300);
                         // remover   
                         robot.moveMouse(480, 400);
                         robot.moveMouse(480, 420);
                         robot.mouseClick();
                         robot.keyTap('enter');
                         robot.keyTap('enter');


                     }, 1000);
                     

                 }, 10000);
                 
             }, 10000);

    },
    60000);

    
    
    
    
    
    
    
    
    
    
    //remover aplicações publicadadas


    /*
    setTimeout(function(){
        robot.setMouseDelay(6);
        robot.moveMouse(400, 300);
        robot.mouseClick('right');
        //publicar
        robot.moveMouse(480, 300);
        // remover   robot.moveMouse(480, 400);
        robot.moveMouse(480, 420);
        robot.mouseClick();
        robot.keyTap('enter');
        robot.keyTap('enter');

        driver.get('https://us.qlikcloud.com/hub/shared');

    }, 70000 );
    */
    
}, 60000);





/*

var robot = require("robotjs");


    setTimeout(function () {
        robot.setMouseDelay(6);
        robot.moveMouse(400, 300);
        robot.mouseClick('right');
        robot.moveMouse(480, 300);
     // remover   robot.moveMouse(480, 400);
        robot.moveMouse(480, 420);
        robot.mouseClick();
        robot.keyTap('enter');

    }, 2000);

*/