// IIFE - Immediately Invoked Function Expression
(function () {
    var canvas = document.getElementById("canvas");
    var stage;
    var RollButton;
    var loader;
    var appStarted;
    var dice1;
    var dice2;
    var Dice1Pic;
    var Dice2Pic;
    // let randomnumber1 = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
    // let randomnumber2 = Math.floor(Math.random() * (5 - 1 + 2)) + 1;
    function Start() {
        appStarted = false;
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);
        stage.enableMouseOver(15);
        Main(); // call the main function
    }
    function Update(event) {
        stage.update();
    }
    function Main() {
        appStarted = true;
        dice1 = new objects.Label("0", "20px", "Arial", "#000000", 250, 250, true);
        stage.addChild(dice1);
        // add a goodbyeLabel to the stage
        dice2 = new objects.Label("0", "20px", "Arial", "#000000", 550, 250, true);
        stage.addChild(dice2);
        RollButton = new objects.Button("Assets/images/rollButton.png", 300, 400, true, 50, 150);
        stage.addChild(RollButton);
        RollButton.addEventListener("click", function (event) {
            function randomnumber1(min, max) {
                return Math.floor(Math.random() * (6 - 1) + 1);
            }
            function randomnumber2(min, max) {
                return Math.floor(Math.random() * (6 - 1) + 1);
            }
            // event handler
            dice1.text = randomnumber1();
            dice2.text = randomnumber2();
            // Display the pictures using switch case
            switch (randomnumber1()) {
                case 1:
                    Dice1Pic = new createjs.Bitmap("Assets/images/1.png");
                    Dice1Pic.x = 150;
                    Dice1Pic.y = 20;
                    stage.addChild(Dice1Pic);
                    break;
                case 2:
                    Dice1Pic = new createjs.Bitmap("Assets/images/2.png");
                    Dice1Pic.x = 150;
                    Dice1Pic.y = 20;
                    stage.addChild(Dice1Pic);
                    break;
                case 3:
                    Dice1Pic = new createjs.Bitmap("Assets/images/3.png");
                    Dice1Pic.x = 150;
                    Dice1Pic.y = 20;
                    stage.addChild(Dice1Pic);
                    break;
                case 4:
                    Dice1Pic = new createjs.Bitmap("Assets/images/4.png");
                    Dice1Pic.x = 150;
                    Dice1Pic.y = 20;
                    stage.addChild(Dice1Pic);
                    break;
                case 5:
                    Dice1Pic = new createjs.Bitmap("Assets/images/5.png");
                    Dice1Pic.x = 150;
                    Dice1Pic.y = 20;
                    stage.addChild(Dice1Pic);
                    break;
                case 6:
                    Dice1Pic = new createjs.Bitmap("Assets/images/6.png");
                    Dice1Pic.x = 150;
                    Dice1Pic.y = 20;
                    stage.addChild(Dice1Pic);
                    break;
                default:
                    Dice1Pic = new createjs.Bitmap("Assets/images/blank.png");
                    Dice1Pic.x = 150;
                    Dice1Pic.y = 20;
                    stage.addChild(Dice1Pic);
                    break;
            }
            switch (randomnumber2()) {
                case 1:
                    Dice2Pic = new createjs.Bitmap("Assets/images/1.png");
                    Dice2Pic.x = 450;
                    Dice2Pic.y = 20;
                    stage.addChild(Dice2Pic);
                    break;
                case 2:
                    Dice2Pic = new createjs.Bitmap("Assets/images/2.png");
                    Dice2Pic.x = 450;
                    Dice2Pic.y = 20;
                    stage.addChild(Dice2Pic);
                    break;
                case 3:
                    Dice2Pic = new createjs.Bitmap("Assets/images/3.png");
                    Dice2Pic.x = 450;
                    Dice2Pic.y = 20;
                    stage.addChild(Dice2Pic);
                    break;
                case 4:
                    Dice2Pic = new createjs.Bitmap("Assets/images/4.png");
                    Dice2Pic.x = 450;
                    Dice2Pic.y = 20;
                    stage.addChild(Dice2Pic);
                    break;
                case 5:
                    Dice2Pic = new createjs.Bitmap("Assets/images/5.png");
                    Dice2Pic.x = 450;
                    Dice2Pic.y = 20;
                    stage.addChild(Dice2Pic);
                    break;
                case 6:
                    Dice2Pic = new createjs.Bitmap("Assets/images/6.png");
                    Dice2Pic.x = 450;
                    Dice2Pic.y = 20;
                    stage.addChild(Dice2Pic);
                    break;
                default:
                    Dice2Pic = new createjs.Bitmap("Assets/images/blank.png");
                    Dice2Pic.x = 450;
                    Dice2Pic.y = 20;
                    stage.addChild(Dice2Pic);
                    break;
            }
        });
    }
    // window binding events
    window.onload = Start;
})();
//# sourceMappingURL=app.js.map