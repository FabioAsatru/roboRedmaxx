

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
        
        console.log('Inserindo 1º app');    
        //arquivo 1
        robot.setKeyboardDelay(80);
        robot.typeString("C:\\Users\\fabio\\Documents\\Qlik\\Sense\\Apps\\flex_saude.qvf");
        robot.keyTap("enter");
        robot.keyTap("enter");
      
        //arquivo 2
        setTimeout(function(){
            console.log('Inserindo 2º app');
            driver.findElement(By.id("uploadTrigger")).click();
            console.log('press uploadTrigger 2');
            setTimeout(function(){
                robot.setKeyboardDelay(80);
                robot.typeString("C:\\Users\\fabio\\Documents\\Qlik\\Sense\\Apps\\flex_saude(2).qvf");
                robot.keyTap("enter");
                robot.keyTap("enter");
            }, 2000);
            

        }, 2000);    
        

    },
    10000);



    setTimeout(function () {
             driver.findElement(By.id("done-upload")).click();

             
             //deletar publicações antigas
             setTimeout(function () {

                 driver.get('https://us.qlikcloud.com/hub/shared');
                 
                 //agrupar por data de publicação                    
                     setTimeout(function () {
                         robot.setMouseDelay(6);
                         robot.moveMouse(1280, 150);
                         robot.mouseClick('left');
                         robot.setMouseDelay(10);
                         robot.moveMouse(1280, 200);
                         robot.keyTap('down');
                         robot.keyTap('enter');
                         robot.moveMouse(1182, 150);
                         robot.mouseClick('left');

                    
                         //delete 1
                         setTimeout(function () {
                            console.log('Deletando 1º app');
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

                             //delete 2
                             setTimeout(function () {
                                 console.log('Deletando 2º app');
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

                                //publicar app atualizadas
                                setTimeout(function(){
                                    driver.get('https://us.qlikcloud.com/hub/personal');

                                    //agrupar por data de publicação                    
                                    setTimeout(function () {
                                        console.log('Agrupando por data');
                                        robot.setMouseDelay(6);
                                        robot.moveMouse(1280, 150);
                                        robot.mouseClick('left');
                                        robot.setMouseDelay(10);
                                        robot.moveMouse(1280, 200);
                                        robot.keyTap('down');
                                        robot.keyTap('enter');
                                        robot.moveMouse(1182, 150);
                                        robot.mouseClick('left');
                                        
                                        //insert1
                                        setTimeout(function () {
                                            console.log('Publicando 1º app');
                                            robot.setMouseDelay(6);
                                            robot.moveMouse(400, 300);
                                            robot.mouseClick('right');
                                            //publicar
                                            robot.moveMouse(480, 300);
                                            // remover   
                                            //robot.moveMouse(480, 400);
                                            robot.moveMouse(480, 420);
                                            robot.mouseClick();
                                            robot.keyTap('enter');
                                            robot.keyTap('enter');
                                       
                                            //insert2
                                            setTimeout(function () {
                                                console.log('Publicando 2º app');
                                                robot.setMouseDelay(6);
                                                robot.moveMouse(400, 300);
                                                robot.mouseClick('right');
                                                //publicar
                                                robot.moveMouse(480, 300);
                                                // remover   
                                                //robot.moveMouse(480, 400);
                                                robot.moveMouse(480, 420);
                                                robot.mouseClick();
                                                robot.keyTap('enter');
                                                robot.keyTap('enter');
                                            }, 2000);
        
                                        }, 2000);
                                    
                                    },2000);

                                }, 2000)

                             }, 2000);
                    
                    }, 3000)

                 }, 10000);
                 
             }, 20000);





    },
    60000);

    
}, 70000);






/*
var robot = require("robotjs");


    setTimeout(function () {
        robot.setMouseDelay(6);
        robot.moveMouse(1280, 150);
        robot.mouseClick('left');
        robot.setMouseDelay(10);
        robot.moveMouse(1280, 200);
        robot.keyTap('down');
        robot.keyTap('enter');
        robot.moveMouse(1182, 150);
        robot.mouseClick('left');
        
    }, 2000);
*/