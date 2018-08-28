var app = new PIXI.Application({
        width: 2550,
        height: 1230,
        antialias: true,
        transparent: false,
        resolution: 0.75
    }
);

document.body.appendChild(app.view);

PIXI.Loader.shared
    .add("Sprites/PlayerCars/Car1/Car_1_01.png")
    .add("Sprites/PlayerCars/Car1/Car_1_02.png")
    .add("Sprites/PlayerCars/Car1/Car_1_03.png")
    .add("Sprites/PlayerCars/Car1/Car_1_04.png")
    .add("Sprites/PlayerCars/Car1/Car_1_05.png")
    .add("Sprites/PlayerCars/Car2/Car_2_01.png")
    .add("Sprites/PlayerCars/Car2/Car_2_02.png")
    .add("Sprites/PlayerCars/Car2/Car_2_03.png")
    .add("Sprites/PlayerCars/Car2/Car_2_04.png")
    .add("Sprites/PlayerCars/Car2/Car_2_05.png")
    .add("Sprites/PlayerCars/Car3/Car_3_01.png")
    .add("Sprites/PlayerCars/Car3/Car_3_02.png")
    .add("Sprites/PlayerCars/Car3/Car_3_03.png")
    .add("Sprites/PlayerCars/Car3/Car_3_04.png")
    .add("Sprites/PlayerCars/Car3/Car_3_05.png")
    .add("Sprites/PlayerCars/Car4/Car_4_01.png")
    .add("Sprites/PlayerCars/Car4/Car_4_02.png")
    .add("Sprites/PlayerCars/Car4/Car_4_03.png")
    .add("Sprites/PlayerCars/Car4/Car_4_04.png")
    .add("Sprites/PlayerCars/Car4/Car_4_05.png")
    .add("Sprites/PlayerCars/Car5/Car_5_01.png")
    .add("Sprites/PlayerCars/Car5/Car_5_02.png")
    .add("Sprites/PlayerCars/Car5/Car_5_03.png")
    .add("Sprites/PlayerCars/Car5/Car_5_04.png")
    .add("Sprites/PlayerCars/Car5/Car_5_05.png")
    .add("Sprites/PlayerCars/Car6/Car_6_01.png")
    .add("Sprites/PlayerCars/Car6/Car_6_02.png")
    .add("Sprites/PlayerCars/Car6/Car_6_03.png")
    .add("Sprites/PlayerCars/Car6/Car_6_04.png")
    .add("Sprites/PlayerCars/Car6/Car_6_05.png")
    .add("Sprites/PlayerCars/Muscle/muscle.png")

    .add("Sprites/Player2/Car_3_01.png")
    .add("Sprites/Player2/Car_3_02.png")
    .add("Sprites/Player2/Car_3_03.png")
    .add("Sprites/Player2/Car_3_04.png")
    .add("Sprites/Player2/Car_3_05.png")



    .add("Sprites/Traffic/Car1/Car_1_01.png")
    .add("Sprites/Traffic/Car1/Car_1_02.png")
    .add("Sprites/Traffic/Car1/Car_1_03.png")
    .add("Sprites/Traffic/Car1/Car_1_04.png")
    .add("Sprites/Traffic/Car1/Car_1_05.png")
    .add("Sprites/Traffic/Car2/Car_2_01.png")
    .add("Sprites/Traffic/Car2/Car_2_02.png")
    .add("Sprites/Traffic/Car2/Car_2_03.png")
    .add("Sprites/Traffic/Car2/Car_2_04.png")
    .add("Sprites/Traffic/Car2/Car_2_05.png")
    .add("Sprites/Traffic/Car3/Car_3_01.png")
    .add("Sprites/Traffic/Car3/Car_3_02.png")
    .add("Sprites/Traffic/Car3/Car_3_03.png")
    .add("Sprites/Traffic/Car3/Car_3_04.png")
    .add("Sprites/Traffic/Car3/Car_3_05.png")
    .add("Sprites/Traffic/Car4/Car_4_01.png")
    .add("Sprites/Traffic/Car4/Car_4_02.png")
    .add("Sprites/Traffic/Car4/Car_4_03.png")
    .add("Sprites/Traffic/Car4/Car_4_04.png")
    .add("Sprites/Traffic/Car4/Car_4_05.png")
    .add("Sprites/Traffic/Car5/Car_5_01.png")
    .add("Sprites/Traffic/Car5/Car_5_02.png")
    .add("Sprites/Traffic/Car5/Car_5_03.png")
    .add("Sprites/Traffic/Car5/Car_5_04.png")
    .add("Sprites/Traffic/Car5/Car_5_05.png")
    .add("Sprites/Traffic/Car6/Car_6_01.png")
    .add("Sprites/Traffic/Car6/Car_6_02.png")
    .add("Sprites/Traffic/Car6/Car_6_03.png")
    .add("Sprites/Traffic/Car6/Car_6_04.png")
    .add("Sprites/Traffic/Car6/Car_6_05.png")



    .add("Sprites/road.png")
    .add("Sprites/audi.png")
    .add("Sprites/oldaudi.png")
    .add("Sprites/taxi.png")
    .add("Sprites/truck.png")
    .add("Sprites/semi.png")
    .add("Sprites/van.png")
    .add("Sprites/muscle.png")
    .add("Sprites/viper.png")

    .add("Sprites/RacingCar/Car4/Car_4_01.png")
    .add("Sprites/RacingCar/Car4/Car_4_02.png")
    .add("Sprites/RacingCar/Car4/Car_4_03.png")
    .add("Sprites/RacingCar/Car4/Car_4_04.png")
    .add("Sprites/RacingCar/Car4/Car_4_05.png")
    .add("Sprites/RacingCar/Car6/Car_6_01.png")
    .add("Sprites/RacingCar/Car6/Car_6_02.png")
    .add("Sprites/RacingCar/Car6/Car_6_03.png")
    .add("Sprites/RacingCar/Car6/Car_6_04.png")
    .add("Sprites/RacingCar/Car6/Car_6_05.png")
    .add("Sprites/PoliceCar/Car1/Car_1_01.png")
    .add("Sprites/PoliceCar/Car1/Car_1_02.png")
    .add("Sprites/PoliceCar/Car1/Car_1_03.png")
    .add("Sprites/PoliceCar/Car1/Car_1_04.png")
    .add("Sprites/PoliceCar/Car1/Car_1_05.png")
    .add("Sprites/PoliceCar/Car3/Car_3_01.png")
    .add("Sprites/PoliceCar/Car3/Car_3_02.png")
    .add("Sprites/PoliceCar/Car3/Car_3_03.png")
    .add("Sprites/PoliceCar/Car3/Car_3_04.png")
    .add("Sprites/PoliceCar/Car3/Car_3_05.png")
    .add("Sprites/PoliceCar/Car4/Car_4_01.png")
    .add("Sprites/PoliceCar/Car4/Car_4_02.png")
    .add("Sprites/PoliceCar/Car4/Car_4_03.png")
    .add("Sprites/PoliceCar/Car4/Car_4_04.png")
    .add("Sprites/PoliceCar/Car4/Car_4_05.png")
    .add("Sprites/PoliceCar/Car5/Car_5_01.png")
    .add("Sprites/PoliceCar/Car5/Car_5_02.png")
    .add("Sprites/PoliceCar/Car5/Car_5_03.png")
    .add("Sprites/PoliceCar/Car5/Car_5_04.png")
    .add("Sprites/PoliceCar/Car5/Car_5_05.png")
    .add("Sprites/classiccop.png")
    .add("Sprites/jeep.png")
    .add("Sprites/army.png")
    .add("Sprites/mp.png")
    .add("Sprites/money.png")
    .add("Sprites/wrench.png")
    .add("Sprites/spikestrip.png")
    .add("Sprites/black.png")
    .load(setup);

var playerOne;
var police;
var playerTwo;
var vehicle;
var state;
var item;
var road;
var tires;
var accelerate;
var hpgui;
var lifegui;
var scoregui;
var boostGui;
var boostQuantityGui;
var wantedGui;
var boost;
var crash;
var brake;
var music;
var gun;
var explosion;
var engine;
var siren;
var honk;
var money;
var repair;
var spikes;
var wantedLevel = 0;
var backgroundTrafficRightLane = 1010;
var backgroundTrafficLeftLane = 1130;
var oncomingLeftLane = 300;
var oncomingRightLane = 175;
var leftLane = 430;
var rightLane = 560;
var bump = new Bump(PIXI);
var hp = 100;
var life = 3;
var score = 0;
var topBoundary;
var bottomBoundary;

function setup() {

    var style = new PIXI.TextStyle({
        fontFamily: 'Arial',
        fontSize: 50,
        fontStyle: 'italic',
        fontWeight: 'bold',
        fill: ['red', 'cyan'], // gradient
        stroke: 'black',
        strokeThickness: 5,
        dropShadow: true,
        dropShadowColor: '#000000',
        dropShadowBlur: 4,
        dropShadowAngle: Math.PI / 6,
        dropShadowDistance: 6,
    });

    hpgui = new PIXI.Text('hp: ' + hp, style);
    hpgui.x = 30;
    hpgui.y = 10;

    lifegui = new PIXI.Text('life x ' + life, style);
    lifegui.x = 30;
    lifegui.y = 70;

    scoregui = new PIXI.Text('score ' + '\n' + score, style);
    scoregui.x = 2350;
    scoregui.y = 10;

    boostGui = new PIXI.Text('\u26A0' + ' NOS', style);
    boostGui.x = 30;
    boostGui.y = 1090;

    var nos = ["I","I","I","I","I","I","I","I","I","I","I","I","I","I","I","I","I","I","I","I"];

    boostQuantityGui = new PIXI.Text(nos.join(""), style)
    boostQuantityGui.x = 30;
    boostQuantityGui.y = 1150;

    wantedGui = new PIXI.Text('\u2606 \u2606 \u2606 \u2606 \u2606', style);
    wantedGui.x = 1100;
    wantedGui.y = 10;

    music = new Audio('Audio/music.mp3');
    music.volume = 0.3;
    music.play();
    music.addEventListener("ended", music.play);
    engine = new Audio('Audio/engine.mp3');
    engine.volume = 0.5;
    engine.play();
    engine.addEventListener("ended", engine.play);
    crash = new Audio('Audio/crash.mp3');



    //ANIMATIONS
    //Start playerTwo

    var sheriffAnimation = [];
    var maxFrames = 3;

    /*
    for (var i = 1; i <= maxFrames; i++) {
        var sheriffAnimationFrames = {
            //texture: PIXI.Texture.from("Sprites/playerTwo" + i + ".png"),
            texture: PIXI.Texture.from("Sprites/Player2/Car_3_01.png"),
            time: 125
        };

        sheriffAnimation.push(sheriffAnimationFrames);
    }

    playerTwo = new PIXI.AnimatedSprite(sheriffAnimation);
    playerTwo.play();
    */
    playerTwo = new PIXI.Sprite(PIXI.Loader.shared.resources["Sprites/Player2/Car_3_01.png"].texture);
    playerTwo.x = 700;
    playerTwo.y = rightLane;
    playerTwo.vx = 0;
    playerTwo.vy = 0;
    playerTwo.hp = 100;
    //End Sheriff

    //Start police
    var policeAnimation = [];

    for (var i = 1; i <= maxFrames; i++) {

        var policeAnimationFrames = {
            texture: PIXI.Texture.from("Sprites/police" + i + ".png"),
            time: 125
        };
        policeAnimation.push(policeAnimationFrames);
    }
    //End police

    //Start ambulance
    var ambulanceAnimation = [];

    for (var i = 1; i <= maxFrames; i++) {

        var ambulanceAnimationFrames = {
            texture: PIXI.Texture.from("Sprites/ambulance" + i + ".png"),
            time: 125
        };
        ambulanceAnimation.push(ambulanceAnimationFrames);
    }
    //End ambulance

    //Start SWAT
    var swatAnimation = [];

    for (var i = 1; i <= maxFrames; i++) {

        var swatAnimationFrames = {
            texture: PIXI.Texture.from("Sprites/swat" + i + ".png"),
            time: 125
        };
        swatAnimation.push(swatAnimationFrames);
    }
    //End SWAT

    //Start explosion
    var explosionAnimation = [];

    for (var i = 1; i <= 9; i++) {

        var explosionAnimationFrames = {
            texture: PIXI.Texture.from("Sprites/Explosions/e" + i + ".png"),
            time: 125
        };
        explosionAnimation.push(explosionAnimationFrames);
    }
    explosion = new PIXI.AnimatedSprite(explosionAnimation);
    //End explosion

    //Start boost
    var boostAnimation = [];

    for (var i = 1; i <= maxFrames; i++) {

        var boostAnimationFrames = {
            texture: PIXI.Texture.from("Sprites/CarEffects/nos" + i + ".png"),
            time: 75
        };
        boostAnimation.push(boostAnimationFrames);
    }
    boost = new PIXI.AnimatedSprite(boostAnimation);
    //End boost
    //END ANIMATIONS

    road = new PIXI.Sprite(PIXI.Loader.shared.resources["Sprites/road.png"].texture);

    topBoundary = new PIXI.Graphics();
    //topBoundary.beginFill(0xFF0000);
    topBoundary.drawRect(-100, 0, 3000, 150);
    topBoundary.y = -20;


    bottomBoundary = new PIXI.Graphics();
    //bottomBoundary.beginFill(0xFF0000);
    bottomBoundary.drawRect(-100, 0, 3000, 150);
    bottomBoundary.y = 715;

    //väljer en bakgrundsbild för att användas som texture till TilingSprite
    var texture = PIXI.Texture.from('Sprites/road.png');

    //sätter bilens utgångsposition samt ursprungshastighet
    playerOne = new PIXI.Sprite(PIXI.Loader.shared.resources["Sprites/PlayerCars/Muscle/muscle.png"].texture);
    playerOne.x = 1000;
    playerOne.y = rightLane;
    playerOne.vx = 0;
    playerOne.vy = 0;

    var tilingRoad = new PIXI.TilingSprite(
        texture,
        app.screen.width,
        app.screen.height
    );


    //lägger till ("stage'ar") den repeterande bakgrunden och spelar-bilen
    app.stage.addChild(tilingRoad);
    app.stage.addChild(playerOne);
    app.stage.addChild(playerTwo);
    app.stage.addChild(hpgui);
    app.stage.addChild(lifegui);
    app.stage.addChild(scoregui);
    app.stage.addChild(boostGui);
    app.stage.addChild(boostQuantityGui);
    app.stage.addChild(wantedGui);
    //app.stage.addChild(topBoundary);
    //app.stage.addChild(bottomBoundary);

    //sätter enums för piltangenterna keycodes
    var left = keyboard(37),
        up = keyboard(38),
        right = keyboard(39),
        down = keyboard(40),
        ctrl = keyboard(17),
        shift = keyboard(16),
        space = keyboard(32);

    //definerar vad som skall hända vid dessa events

    shift.hold = () => {
        if (nos.length > 0) {
        boost.play();
        app.stage.addChild(boost);
        nos.splice(-1, 1);
        boostQuantityGui.text = nos.join("");
        if (nos.length < 5) {
            playerOne.vx += 4;
        } else {
        playerOne.vx += 1.5;
        }
        }
    };

    shift.release = () => {
        app.stage.removeChild(boost);
        playerOne.vx = 0;
    }

    space.press = () => {
        gun = new Audio('Audio/gun.mp3');
        gun.play();
    };

    ctrl.press = () => {
        honk = new Audio('Audio/honk.mp3')
        honk.play();
        life = 0;
        lifegui.text = 'lifex '+ life;
    };

    ctrl.release = () => {
        honk.pause();
    };

    //vänster

    left.press = () => {
        playerOne.vx = -8;
        playerOne.vy = 0;
        brake = new Audio('Audio/brake.mp3');
        brake.play();
    };

    left.release = () => {
        if (!right.isDown && playerOne.vy === 0) {
            playerOne.vx = 0;
            brake.pause();
        }
    };

    //Uppåt
    up.press = () => {
        playerOne.vy = -5;
        playerOne.vx = 0;
        tires = new Audio('Audio/tires.mp3')
        tires.play();
    };
    up.release = () => {
        if (!down.isDown && playerOne.vx === 0) {
            playerOne.vy = 0;
            tires.pause();

        }
    };

    //Höger
    right.press = () => {
        playerOne.vx = 8;
        playerOne.vy = 0;
        accelerate = new Audio('Audio/acceleration.mp3');
        accelerate.play();
    };
    right.release = () => {
        if (!left.isDown && playerOne.vy === 0) {
            playerOne.vx = 0;
            accelerate.pause();
        }
    };

    //Nedåt
    down.press = () => {
        playerOne.vy = 5;
        playerOne.vx = 0;
        tires = new Audio('Audio/tires.mp3');
        tires.play();
    };
    down.release = () => {
        if (!up.isDown && playerOne.vx === 0) {
            playerOne.vy = 0;
            tires.pause();
        }
    };

    var p2left = keyboard(65),
        p2up = keyboard(87),
        p2right = keyboard(68),
        p2down = keyboard(83);

    //Left arrow key `press` method
    p2left.press = () => {
        //Change the cat's velocity when the key is pressed
        playerTwo.vx = -5;
        playerTwo.vy = 0;
    };

    //Left arrow key `release` method
    p2left.release = () => {
        //If the left arrow has been released, and the right arrow isn't down,
        //and the cat isn't moving vertically:
        //Stop the cat
        if (!p2right.isDown && playerTwo.vy === 0) {
            playerTwo.vx = 0;
        }
    };

    //Up
    p2up.press = () => {
        playerTwo.vy = -5;
        playerTwo.vx = 0;
    };
    p2up.release = () => {
        if (!p2down.isDown && playerTwo.vx === 0) {
            playerTwo.vy = 0;
        }
    };

    //Right
    p2right.press = () => {
        playerTwo.vx = 5;
        playerTwo.vy = 0;
    };
    p2right.release = () => {
        if (!p2left.isDown && playerTwo.vy === 0) {
            playerTwo.vx = 0;
        }
    };

    //Down
    p2down.press = () => {
        playerTwo.vy = 5;
        playerTwo.vx = 0;
    };
    p2down.release = () => {
        if (!p2up.isDown && playerTwo.vx === 0) {
            playerTwo.vy = 0;
        }
    };

    //Set the game state
    state = play;

    //Start the game loop
    app.ticker.add(delta => gameLoop(delta));

    var count = 0;
    var vehicles = [];
    var backgroundVehicles = [];
    var policeVehicles = [];
    var items = [];
    var boostRefill = Date.now();
    var lastSpawnedItem = Date.now();
    var lastSpawnedOncomingVehicle = Date.now();
    var lastSpawnedVehicle = Date.now();
    var lastSpawnedTraffic = Date.now();
    var lastSpawnedPoliceVehicle = Date.now();
    var lastCollision = Date.now();
    var lastItem = Date.now();
    var isGameOver = false;
    var getDone = false;
    var result = [];

    app.ticker.add(function () {
        //Start Boost
        if (Date.now() > boostRefill + 1000 && nos.length < 20) {
            boostRefill = Date.now();
            nos.push("I");
            boostQuantityGui.text = nos.join("");
        }

        if (nos.length === 0) {
            app.stage.removeChild(boost);
            if (playerOne.vx > 0) {
                playerOne.vx -= 0.5;
            }
        }
        //End Boost

        //Start Wanted Level
        if (score === 500) {
            wantedLevel = 1;
            wantedGui.text = '\u2605 \u2606 \u2606 \u2606 \u2606';
        } else if (score === 2000) {
            wantedLevel = 2;
            wantedGui.text = '\u2605 \u2605 \u2606 \u2606 \u2606';
        } else if (score === 4000) {
            wantedLevel = 3;
            wantedGui.text = '\u2605 \u2605 \u2605 \u2606 \u2606';
        } else if (score === 6000) {
            wantedLevel = 4;
            wantedGui.text = '\u2605 \u2605 \u2605 \u2605 \u2606';
        } else if (score === 8000) {
            wantedLevel = 5;
            wantedGui.text = '\u2605 \u2605 \u2605 \u2605 \u2605';
        }
        //End Wanted Level
        count += 1;
        tilingRoad.tilePosition.x -= 15;
        score += 1;
        scoregui.text = 'score' + '\n' + score;

        var carState = whichState(hp);
        var sheriffState = whichState(playerTwo.hp);

        if (player1 == 1) {
            playerOne.texture = PIXI.Texture.from("Sprites/PlayerCars/Muscle/muscle.png");
        } else if (player1 == 2) {
            playerOne.texture = PIXI.Texture.from(`Sprites/PlayerCars/Car1/Car_1_0${carState.sprite}.png`);
        } else if (player1 == 3) {
            playerOne.texture = PIXI.Texture.from(`Sprites/PlayerCars/Car3/Car_3_0${carState.sprite}.png`);
        } else if (player1 == 4) {
            playerOne.texture = PIXI.Texture.from(`Sprites/PlayerCars/Car2/Car_2_0${carState.sprite}.png`);
        } else if (player1 == 5) {
            playerOne.texture = PIXI.Texture.from(`Sprites/PlayerCars/Car5/Car_5_0${carState.sprite}.png`);
        } else if (player1 == 6) {
            playerOne.texture = PIXI.Texture.from(`Sprites/PlayerCars/Car4/Car_4_0${carState.sprite}.png`);
        }

        if (player2 == 7) {
            playerTwo.texture = PIXI.Texture.from(`Sprites/PoliceCar/Car1/Car_1_0${carState.sprite}.png`);
        } else if (player2 == 8) {
            playerTwo.texture = PIXI.Texture.from(`Sprites/PoliceCar/Car3/Car_3_0${carState.sprite}.png`);
        } else if (player2 == 9) {
            playerTwo.texture = PIXI.Texture.from(`Sprites/PoliceCar/Car2/Car_2_0${carState.sprite}.png`);
        } else if (player2 == 10) {
            playerTwo.texture = PIXI.Texture.from(`Sprites/PoliceCar/Car6/Car_6_0${carState.sprite}.png`);
        }

        if(hp <= 1){
            life -= 1;
            lifegui.text = 'life x ' + life;
            hp = 100;
            hpgui.text = 'hp: ' + hp;
            app.stage.removeChild(playerOne);
            app.stage.addChild(playerOne);
            playerOne.x = 500;
            playerOne.y = rightLane;
            playerOne.vx = 0;
            playerOne.vy = 0;
        }

        if (life < 0){
            var gameOver = new PIXI.Sprite(PIXI.Loader.shared.resources["Sprites/black.png"].texture);
            var style2 = new PIXI.TextStyle({
                fontFamily: 'Arial',
                fontSize: 150,
                fontStyle: 'italic',
                fontWeight: 'bold',
                fill: ['red', 'cyan'], // gradient
                stroke: 'black',
                strokeThickness: 5,
                dropShadow: true,
                dropShadowColor: '#000000',
                dropShadowBlur: 4,
                dropShadowAngle: Math.PI / 6,
                dropShadowDistance: 6,
            });

            var style3 = new PIXI.TextStyle({
                fontFamily: 'Arial',
                fontSize: 60,
                fontStyle: 'italic',
                fontWeight: 'bold',
                fill: ['red', 'cyan'], // gradient
                stroke: 'black',
                strokeThickness: 5,
                dropShadow: true,
                dropShadowColor: '#000000',
                dropShadowBlur: 4,
                dropShadowAngle: Math.PI / 6,
                dropShadowDistance: 6,
            });
            var style4 = new PIXI.TextStyle({
                fontFamily: 'Arial',
                fontSize: 50,
                fontStyle: 'italic',
                fontWeight: 'bold',
                fill: ['red', 'cyan'], // gradient
                stroke: 'black',
                strokeThickness: 5,
                dropShadow: true,
                dropShadowColor: '#000000',
                dropShadowBlur: 4,
                dropShadowAngle: Math.PI / 6,
                dropShadowDistance: 6,
            });

            if(!isGameOver) {
                $.ajax({
                    method: "POST",
                    url: "/addHighscore",
                    data: { score: score}
                });
                $.ajax({
                    method: "GET",
                    url: "/getHighscore"
                }).done(function( data ) {
                    for (var i = 0; i < data.length; i++) {
                        result.push(data[i]);
                    }
                    getDone = true;
                    console.log("ajaxDone");
                    //app.ticker.stop();

                });
            }
            console.log(result);
            if(getDone) {
                console.log(result[0]);
                var gameOvermsg = new PIXI.Text("GAME OVER", style2);
                gameOvermsg.x = 850;
                gameOvermsg.y = 100;
                var pScore = new PIXI.Text("YOUR SCORE: " + score, style3);
                pScore.x = 1000;
                pScore.y = 300;
                var hScore = new PIXI.Text("HIGHSCORE", style3);
                hScore.x = 1100;
                hScore.y = 400;
                var score1 = new PIXI.Text("1: " + result[0] + " - "+ result[1], style4);
                score1.x = 1100;
                score1.y = 500;
                var score2 = new PIXI.Text("2: " + result[2] + " - "+ result[3], style4);
                score2.x = 1100;
                score2.y = 600;
                var score3 = new PIXI.Text("3: " + result[4] + " - "+ result[5], style4);
                score3.x = 1100;
                score3.y = 700;
                music.pause();
                engine.pause();
                siren.pause();
                app.stage.addChild(gameOver);
                app.stage.addChild(gameOvermsg);
                app.stage.addChild(pScore);
                app.stage.addChild(hScore);
                app.stage.addChild(score1);
                app.stage.addChild(score2);
                app.stage.addChild(score3);
                app.ticker.stop();
            }
            isGameOver = true;
        }

        //Collision
        if(bump.hit(playerOne, playerTwo, true, true)){
            crash.play();
            if(Date.now()> lastCollision + 150) {
                hp -= 4;
                hpgui.text = 'hp: ' + hp;
                lastCollision = Date.now()
            }
        }
        if(bump.hit(playerOne, topBoundary, true, true)){
            crash.play();
        }
        if(bump.hit(playerOne, bottomBoundary, true, true)){
            crash.play();
        }

        if(bump.hit(playerTwo, topBoundary, true, true)){
            playerTwo.hp -= 4;
            crash.play();
        }
        if(bump.hit(playerTwo, bottomBoundary, true, true)){
            playerTwo.hp -= 4;
            crash.play();
        }

        for (var i = 0; i < vehicles.length; i++) {
            if(vehicles[i].hasState == true) {
                //var vehState = whichState(vehicles[i].hp);
                var vehState = whichState(5);
                vehicles[i].texture = PIXI.Texture.from(`${vehicles[i].spriteName}${vehState.sprite}.png`);

            }
            if(bump.hit(playerOne,vehicles[i],true, true)){
                crash.play();
                if(Date.now()> lastCollision + 150) {
                    hp -= 4;
                    vehicles[i].hp -= 4;
                    hpgui.text = 'hp: ' + hp;
                    lastCollision = Date.now()
                }
            }
            if(bump.hit(vehicles[i], playerTwo, true)){
                playerTwo.hp -= 4;
                crash.play();
            }
            bump.hit(vehicles[i], topBoundary, true, true);
            bump.hit(vehicles[i], bottomBoundary, true, true);
        }
        for (var i = 0; i < policeVehicles.length; i++) {
            if(bump.hit(playerOne, policeVehicles[i], true, true)){
                crash.play();
                if(Date.now()> lastCollision + 150) {
                    hp -= 4;
                    hpgui.text = 'hp: ' + hp;
                    lastCollision = Date.now()
                }
            }
            bump.hit(policeVehicles[i], topBoundary, true, true);
            bump.hit(policeVehicles[i], bottomBoundary, true, true);

        }
        for (var i = 0; i < vehicles.length; i++) {
            for (var j = 0; j < policeVehicles.length; j++) {
                bump.hit(vehicles[i],policeVehicles[j], true, true);
            }
        }
        for (var i = 0; i < policeVehicles.length; i++) {
            if(bump.hit(playerTwo,policeVehicles[i], true)){
                playerTwo.hp -= 4;
                crash.play();
            }
        }
        for (var i = 0; i < vehicles.length; i++) {
            for (var j = 0; j < vehicles.length; j++) {
                if(!(vehicles[i] === vehicles[j])){
                    bump.hit(vehicles[i], vehicles[j],true);
                }
            }
        }
        for (var i = 0; i < policeVehicles.length; i++) {
            for (var j = 0; j < policeVehicles.length; j++) {
                if(!(policeVehicles[i] === policeVehicles[j])){
                    bump.hit(policeVehicles[i], policeVehicles[j],true);
                }
            }
        }
        for (var i = 0; i < policeVehicles.length; i++) {
            for (var j = 0; j < policeVehicles.length; j++) {
                if(!(policeVehicles[i] === policeVehicles[j])){
                    bump.hit(policeVehicles[i], policeVehicles[j],true);
                }
            }
        }
        //End Collision

        //TRAFFIC
        //Vehicles
        var vehicleXPos;
        var vehicleYPos;
        var vehicleVelocity;

        if (Date.now() > lastSpawnedOncomingVehicle + 1500) {
            lastSpawnedOncomingVehicle = Date.now();
            var typeOfVehicle = Math.floor(Math.random() * (19 - 1) + 1);
            var vehicleSpeed = Math.floor(Math.random() * (3 - 1) + 1);

            switch (typeOfVehicle) {
                case 1:
                    vehicle = new PIXI.Sprite(PIXI.Loader.shared.resources["Sprites/truck.png"].texture);
                    vehicle.hasState = false;
                    break;
                case 2:
                    vehicle = new PIXI.Sprite(PIXI.Loader.shared.resources["Sprites/semi.png"].texture);
                    vehicle.hasState = false;
                    break;
                case 3:
                    vehicle = new PIXI.Sprite(PIXI.Loader.shared.resources["Sprites/van.png"].texture);
                    vehicle.hasState = false;
                    break;
                case 4:
                    vehicle = new PIXI.Sprite(PIXI.Loader.shared.resources["Sprites/muscle.png"].texture);
                    vehicle.hasState = false;
                    break;
                case 5:
                    vehicle = new PIXI.Sprite(PIXI.Loader.shared.resources["Sprites/taxi.png"].texture);
                    vehicle.hasState = false;
                    break;
                case 6:
                    vehicle = new PIXI.Sprite(PIXI.Loader.shared.resources["Sprites/viper.png"].texture);
                    vehicle.hasState = false;
                    break;
                case 7:
                    vehicle = new PIXI.Sprite(PIXI.Loader.shared.resources["Sprites/PoliceCar/Car3/Car_3_01.png"].texture);
                    vehicle.hasState = true;
                    vehicle.spriteName = "Sprites/PoliceCar/Car3/Car_3_0";
                    break;
                case 8:
                    vehicle = new PIXI.Sprite(PIXI.Loader.shared.resources["Sprites/PoliceCar/Car1/Car_1_01.png"].texture);
                    vehicle.hasState = true;
                    vehicle.spriteName = "Sprites/PoliceCar/Car1/Car_1_0";
                    break;
                case 9:
                    vehicle = new PIXI.Sprite(PIXI.Loader.shared.resources["Sprites/PoliceCar/Car5/Car_5_01.png"].texture);
                    vehicle.hasState = true;
                    vehicle.spriteName = "Sprites/PoliceCar/Car5/Car_5_0";
                    break;
                case 10:
                    vehicle = new PIXI.Sprite(PIXI.Loader.shared.resources["Sprites/PoliceCar/Car4/Car_4_01.png"].texture);
                    vehicle.hasState = true;
                    vehicle.spriteName = "Sprites/PoliceCar/Car4/Car_4_0";
                    break;
                case 11:
                    vehicle = new PIXI.AnimatedSprite(ambulanceAnimation);
                    vehicle.play();
                    break;
                case 12:
                    vehicle = new PIXI.Sprite(PIXI.Loader.shared.resources["Sprites/PoliceCar/Car4/Car_4_01.png"].texture);
                    vehicle.hasState = true;
                    vehicle.spriteName = "Sprites/PoliceCar/Car4/Car_4_0";
                    break;
                case 13:
                    vehicle = new PIXI.Sprite(PIXI.Loader.shared.resources["Sprites/Traffic/Car1/Car_1_01.png"].texture);
                    vehicle.hasState = true;
                    vehicle.spriteName = "Sprites/Traffic/Car1/Car_1_0";
                    break;
                case 14:
                    vehicle = new PIXI.Sprite(PIXI.Loader.shared.resources["Sprites/Traffic/Car2/Car_2_01.png"].texture);
                    vehicle.hasState = true;
                    vehicle.spriteName = "Sprites/Traffic/Car2/Car_2_0";
                    break;
                case 15:
                    vehicle = new PIXI.Sprite(PIXI.Loader.shared.resources["Sprites/Traffic/Car3/Car_3_01.png"].texture);
                    vehicle.hasState = true;
                    vehicle.spriteName = "Sprites/Traffic/Car3/Car_3_0";
                    break;
                case 16:
                    vehicle = new PIXI.Sprite(PIXI.Loader.shared.resources["Sprites/Traffic/Car4/Car_4_01.png"].texture);
                    vehicle.hasState = true;
                    vehicle.spriteName = "Sprites/Traffic/Car4/Car_4_0";
                    break;
                case 17:
                    vehicle = new PIXI.Sprite(PIXI.Loader.shared.resources["Sprites/Traffic/Car5/Car_5_01.png"].texture);
                    vehicle.hasState = true;
                    vehicle.spriteName = "Sprites/Traffic/Car5/Car_5_0";
                    break;
                case 18:
                    vehicle = new PIXI.Sprite(PIXI.Loader.shared.resources["Sprites/Traffic/Car6/Car_6_01.png"].texture);
                    vehicle.hasState = true;
                    vehicle.spriteName = "Sprites/Traffic/Car6/Car_6_0";
                    break;
            }

            if (Date.now() > lastSpawnedVehicle + 8000) {
                lastSpawnedVehicle = Date.now();
                vehicleSpeed = 3;
            }

            if (vehicleSpeed === 1) {
                vehicleYPos = oncomingRightLane;
                vehicleVelocity = -20;
            } else if (vehicleSpeed === 2) {
                vehicleYPos = oncomingLeftLane;
                vehicleVelocity = -25;
            } else if (vehicleSpeed === 3) {
                vehicle.anchor.set(0.5);
                vehicle.rotation = Math.PI;
                vehicleYPos = rightLane + 50;
                vehicleVelocity = -1;
            }

            vehicleXPos = 2700;

            vehicle.x = vehicleXPos;
            vehicle.y = vehicleYPos;

            vehicle.vx = vehicleVelocity;

            vehicle.hp = 100;


            vehicles.push(vehicle);

            app.stage.addChild(vehicle);
        }

        //Background Vehicles
        var bVehicle;
        var bVehicleXPos;
        var bVehicleYPos;
        var bVehicleVelocity;

        if (Date.now() > lastSpawnedTraffic + 1500) {
            lastSpawnedTraffic = Date.now();
            var bTypeOfVehicle = Math.floor(Math.random() * (12 - 1) + 1);
            var backgroundTrafficRandomLane = Math.floor(Math.random() * (3 - 1) + 1);

            switch (bTypeOfVehicle) {
                case 1:
                    bVehicle = new PIXI.Sprite(PIXI.Loader.shared.resources["Sprites/truck.png"].texture);
                    break;
                case 2:
                    bVehicle = new PIXI.Sprite(PIXI.Loader.shared.resources["Sprites/semi.png"].texture);
                    break;
                case 3:
                    bVehicle = new PIXI.Sprite(PIXI.Loader.shared.resources["Sprites/van.png"].texture);
                    break;
                case 4:
                    bVehicle = new PIXI.Sprite(PIXI.Loader.shared.resources["Sprites/muscle.png"].texture);
                    break;
                case 5:
                    bVehicle = new PIXI.Sprite(PIXI.Loader.shared.resources["Sprites/taxi.png"].texture);
                    break;
                case 6:
                    bVehicle = new PIXI.Sprite(PIXI.Loader.shared.resources["Sprites/viper.png"].texture);
                    break;
                case 7:
                    bVehicle = new PIXI.Sprite(PIXI.Loader.shared.resources["Sprites/PoliceCar/Car3/Car_3_01.png"].texture);
                    break;
                case 8:
                    bVehicle = new PIXI.Sprite(PIXI.Loader.shared.resources["Sprites/PoliceCar/Car1/Car_1_01.png"].texture);
                    break;
                case 9:
                    bVehicle = new PIXI.Sprite(PIXI.Loader.shared.resources["Sprites/PoliceCar/Car5/Car_5_01.png"].texture);
                    break;
                case 10:
                    bVehicle = new PIXI.Sprite(PIXI.Loader.shared.resources["Sprites/PoliceCar/Car4/Car_4_01.png"].texture);
                    break;
                case 11:
                    bVehicle = new PIXI.AnimatedSprite(ambulanceAnimation);
                    bVehicle.play();
                    break;
            }

                if (backgroundTrafficRandomLane === 1) {
                    bVehicleYPos = backgroundTrafficRightLane;
                    bVehicleVelocity = -20;
                } else if (backgroundTrafficRandomLane === 2) {
                    bVehicleYPos = backgroundTrafficLeftLane;
                    bVehicleVelocity = -25;
                }

            bVehicleXPos = 2700;

            bVehicle.x = bVehicleXPos;
            bVehicle.y = bVehicleYPos;

            bVehicle.vx = bVehicleVelocity;

            backgroundVehicles.push(bVehicle);

            app.stage.addChild(bVehicle);
        }

        //Cops
        var policeXPos;
        var policeYPos;
        var policeVelocity;
        var typeOfPoliceVehicle;

        if (Date.now() > lastSpawnedPoliceVehicle + 7000) {
            lastSpawnedPoliceVehicle = Date.now();

            if (wantedLevel === 1) {
                typeOfPoliceVehicle = 1;
            } else if (wantedLevel === 2) {
                typeOfPoliceVehicle = 2;
            } else if (wantedLevel === 3) {
                typeOfPoliceVehicle = 3;
            } else if (wantedLevel === 4) {
                typeOfPoliceVehicle = 4;
            } else if (wantedLevel === 5) {
                typeOfPoliceVehicle = 5;
            } else {
                typeOfPoliceVehicle = 1;
            }

            switch (typeOfPoliceVehicle) {
                case 1:
                    policeVelocity = 4;
                    police = new PIXI.AnimatedSprite(policeAnimation);
                    police.play();
                    break;
                case 2:
                    policeVelocity = 7;
                    police = new PIXI.AnimatedSprite(swatAnimation);
                    police.play();
                    break;
                case 3:
                    policeVelocity = 2;
                    police = new PIXI.Sprite(PIXI.Loader.shared.resources["Sprites/mp.png"].texture);
                    break;
            }

            policeXPos = -100;
            policeYPos = leftLane;

            police.x = policeXPos;
            police.y = policeYPos;

            police.vx = policeVelocity;

            policeVehicles.push(police);
            siren = new Audio('Audio/siren.mp3');
            siren.volume = 0.3;
            siren.play();

            app.stage.addChild(police);
        }
        //END TRAFFIC

        //ITEMS
        var itemXPos;
        var itemYPos;
        var itemVelocity = -15;

        if (Date.now() > lastSpawnedItem + 5000) {
            lastSpawnedItem = Date.now();
            var typeOfItem = Math.floor(Math.random() * (4 - 1) + 1);
            itemXPos = 2700;
            itemYPos = Math.floor(Math.random() * (650 - 150) + 150);

            switch (typeOfItem) {
                case 1:
                    item = new PIXI.Sprite(PIXI.Loader.shared.resources["Sprites/money.png"].texture);
                    item.itemID = 1;
                    break;
                case 2:
                    item = new PIXI.Sprite(PIXI.Loader.shared.resources["Sprites/wrench.png"].texture);
                    item.itemID = 2;
                    break;
                case 3:
                    item = new PIXI.Sprite(PIXI.Loader.shared.resources["Sprites/spikestrip.png"].texture);
                    item.itemID = 3;
                    itemXPos = 2700;
                    itemyYPos = playerOne.y;
                    break;
            }

            item.x = itemXPos;
            item.y = itemYPos;
            item.vx = itemVelocity;
            items.push(item);

            app.stage.addChild(item);
        }
    });


    /*
    function boxesIntersect(a, bump)
    {
        var ab = a.getBounds();
        var bb = bump.getBounds();
        return ab.x + ab.width > bb.x && ab.x < bb.x + bb.width && ab.y + ab.height > bb.y && ab.y < bb.y + bb.height;
    }
    */

    function gameLoop(delta) {

        state(delta);
    }

    function play(delta) {

        boost.x = playerOne.x - 277;
        boost.y = playerOne.y + 7;

        playerOne.x += playerOne.vx;
        playerOne.y += playerOne.vy;
        road.x += road.vx;
        road.y += road.vy;
        playerTwo.x += playerTwo.vx;
        playerTwo.y += playerTwo.vy;

        //Vehicles move left and are then removed
        for (var i = vehicles.length - 1; i >= 0; i--) {
            vehicles[i].x += vehicles[i].vx;
            if (vehicles[i].x < - 300) {
                app.stage.removeChild(vehicles[i]);
                vehicles.splice(i, 1);
            }
        }
        //Background vehicles move left and are then removed
        for (var i = backgroundVehicles.length - 1; i >= 0; i--) {
            backgroundVehicles[i].x += backgroundVehicles[i].vx;
            if (backgroundVehicles[i].x < - 300) {
                app.stage.removeChild(backgroundVehicles[i]);
                backgroundVehicles.splice(i, 1);
            }
        }
        //Police move right and are then removed
        for (var i = policeVehicles.length - 1; i >= 0; i--) {
            policeVehicles[i].x += policeVehicles[i].vx;
            if (policeVehicles[i].x > app.screen.length + 100) {
                app.stage.removeChild(policeVehicles[i]);
                policeVehicles.splice(i, 1);
            }
        }
        //Items move left and are then removed
        for (var i = items.length - 1; i >= 0; i--) {
                items[i].x += items[i].vx;
                if(bump.hit(playerOne, item)){
                    if(item.itemID == 1) {
                        if (Date.now()> lastItem +1000) {
                            score += 1000;
                            app.stage.removeChild(items[i]);
                            money = new Audio('Audio/money.mp3');
                            money.play();
                            lastItem= Date.now();
                        }
                    }
                    if(item.itemID == 2) {
                        if (Date.now()> lastItem +1000) {
                            hp += 25;
                            hpgui.text = 'hp: ' + hp;
                            if (hp> 100){
                                hp=100;
                                hpgui.text = 'hp: ' + hp;
                            }
                            app.stage.removeChild(items[i]);
                            repair = new Audio('Audio/repair.mp3');
                            repair.play();
                            lastItem= Date.now();
                        }
                    }
                    if(item.itemID == 3) {
                        if (Date.now()> lastItem +1000) {
                            hp-=10;
                            hpgui.text = 'hp: ' + hp;
                            app.stage.removeChild(items[i]);
                            spikes = new Audio('Audio/spike.mp3');
                            spikes.play();
                            lastItem= Date.now();
                        }
                    }
                }
                if (items[i].x < -300) {
                    app.stage.removeChild(items[i]);
                    items.splice(i, 1);
                }
            }
        }

        function update() {

        }

//sätter eventhandlers för olika keyCodes
        function keyboard(keyCode) {
            var key = {};
            key.code = keyCode;
            key.isDown = false;
            key.isUp = true;
            key.press = undefined;
            key.release = undefined;
            key.hold = undefined;
            //The `downHandler`
            key.downHandler = event => {
                if (event.keyCode === key.code) {
                    if (key.isUp && key.press) key.press();
                    if (key.hold) key.hold();
                    key.isDown = true;
                    key.isUp = false;
                }
                event.preventDefault();
            };
            key.pressHandler = event => {
                if (event.keyCode === key.code) {
                    if (key.hold) key.hold();
                    key.isDown = true;
                    key.isUp = false;
                }
                event.preventDefault();
            };
            key.upHandler = event => {
                if (event.keyCode === key.code) {
                    if (key.isDown && key.release) key.release();
                    key.isDown = false;
                    key.isUp = true;
                }
                event.preventDefault();
            };

            window.addEventListener(
                "keydown", key.downHandler.bind(key), false
            );
            window.addEventListener(
                "keyup", key.upHandler.bind(key), false
            );
            return key;
        }
}


function whichState(carHP){

    var STATE = {
        ONE: {sprite: 1, name: "One"},
        TWO: {sprite: 2, name: "Two"},
        THREE: {sprite: 3, name: "Three"},
        FOUR: {sprite: 4, name: "Four"},
        FIVE: {sprite: 5, name: "Five"},
        SIX: {name: "Six"}
    };

    var currentState = STATE.ONE;

    if(carHP >= 90) {
        currentState = STATE.ONE;
    } else if (carHP >= 70) {
        currentState = STATE.TWO;
    } else if (carHP >= 50) {
        currentState = STATE.THREE;
    } else if (carHP >= 30) {
        currentState = STATE.FOUR;
    } else if (carHP >= 10) {
        currentState = STATE.FIVE;
    } else {
        currentState = STATE.SIX;
    }

    /*switch (carHP) {
        case 90:
            currentState = STATE.ONE;
            break;
        case 70:
            currentState = STATE.TWO;
            break;
        case 50:
            currentState = STATE.THREE;
            break;
        case 30:
            currentState = STATE.FOUR;
            break;
        case 10:
            currentState = STATE.FIVE;
            break;
    }*/

    return currentState;   // return Sprite 1, 2, 3, 4, eller 5....

}
