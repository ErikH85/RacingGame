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
    .add("Sprites/PlayerCars/Car1/Car_1_lights_on.png")
    .add("Sprites/PlayerCars/Car1/Car_1_brake_light.png")
    .add("Sprites/PlayerCars/Car2/Car_2_01.png")
    .add("Sprites/PlayerCars/Car2/Car_2_02.png")
    .add("Sprites/PlayerCars/Car2/Car_2_03.png")
    .add("Sprites/PlayerCars/Car2/Car_2_04.png")
    .add("Sprites/PlayerCars/Car2/Car_2_05.png")
    .add("Sprites/PlayerCars/Car2/Car_2_lights_on.png")
    .add("Sprites/PlayerCars/Car2/Car_2_brake_light.png")
    .add("Sprites/PlayerCars/Car3/Car_3_01.png")
    .add("Sprites/PlayerCars/Car3/Car_3_02.png")
    .add("Sprites/PlayerCars/Car3/Car_3_03.png")
    .add("Sprites/PlayerCars/Car3/Car_3_04.png")
    .add("Sprites/PlayerCars/Car3/Car_3_05.png")
    .add("Sprites/PlayerCars/Car3/Car_3_lights_on.png")
    .add("Sprites/PlayerCars/Car3/Car_3_brake_light.png")
    .add("Sprites/PlayerCars/Car4/Car_4_01.png")
    .add("Sprites/PlayerCars/Car4/Car_4_02.png")
    .add("Sprites/PlayerCars/Car4/Car_4_03.png")
    .add("Sprites/PlayerCars/Car4/Car_4_04.png")
    .add("Sprites/PlayerCars/Car4/Car_4_05.png")
    .add("Sprites/PlayerCars/Car4/Car_4_lights_on.png")
    .add("Sprites/PlayerCars/Car4/Car_4_brake_light.png")
    .add("Sprites/PlayerCars/Car5/Car_5_01.png")
    .add("Sprites/PlayerCars/Car5/Car_5_02.png")
    .add("Sprites/PlayerCars/Car5/Car_5_03.png")
    .add("Sprites/PlayerCars/Car5/Car_5_04.png")
    .add("Sprites/PlayerCars/Car5/Car_5_05.png")
    .add("Sprites/PlayerCars/Car5/Car_5_lights_on.png")
    .add("Sprites/PlayerCars/Car5/Car_5_brake_light.png")
    .add("Sprites/PlayerCars/Car6/Car_6_01.png")
    .add("Sprites/PlayerCars/Car6/Car_6_02.png")
    .add("Sprites/PlayerCars/Car6/Car_6_03.png")
    .add("Sprites/PlayerCars/Car6/Car_6_04.png")
    .add("Sprites/PlayerCars/Car6/Car_6_05.png")
    .add("Sprites/PlayerCars/Muscle/muscle.png")
    .add("Sprites/PlayerCars/Muscle/muscle_lights_on.png")
    .add("Sprites/PlayerCars/Muscle/muscle_brake_light.png")

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

    .add("Sprites/Traffic/Police/Car1/Car_1_01.png")
    .add("Sprites/Traffic/Police/Car1/Car_1_02.png")
    .add("Sprites/Traffic/Police/Car1/Car_1_03.png")
    .add("Sprites/Traffic/Police/Car1/Car_1_04.png")
    .add("Sprites/Traffic/Police/Car1/Car_1_05.png")

    .add("Sprites/Traffic/Police/Car3/Car_3_01.png")
    .add("Sprites/Traffic/Police/Car3/Car_3_02.png")
    .add("Sprites/Traffic/Police/Car3/Car_3_03.png")
    .add("Sprites/Traffic/Police/Car3/Car_3_04.png")
    .add("Sprites/Traffic/Police/Car3/Car_3_05.png")

    .add("Sprites/Traffic/Police/Car4/Car_4_01.png")
    .add("Sprites/Traffic/Police/Car4/Car_4_02.png")
    .add("Sprites/Traffic/Police/Car4/Car_4_03.png")
    .add("Sprites/Traffic/Police/Car4/Car_4_04.png")
    .add("Sprites/Traffic/Police/Car4/Car_4_05.png")

    .add("Sprites/Traffic/Police/Car5/Car_5_01.png")
    .add("Sprites/Traffic/Police/Car5/Car_5_02.png")
    .add("Sprites/Traffic/Police/Car5/Car_5_03.png")
    .add("Sprites/Traffic/Police/Car5/Car_5_04.png")
    .add("Sprites/Traffic/Police/Car5/Car_5_05.png")

    .add("Sprites/Traffic/Police/Car6/Car_6_01.png")
    .add("Sprites/Traffic/Police/Car6/Car_6_02.png")
    .add("Sprites/Traffic/Police/Car6/Car_6_03.png")
    .add("Sprites/Traffic/Police/Car6/Car_6_04.png")
    .add("Sprites/Traffic/Police/Car6/Car_6_05.png")

    .add("Sprites/Background/road.png")
    .add("Sprites/Background/nightroad.png")
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
var texture;
var tires;
var accelerate;
var hpgui;
var lifegui;
var scoregui;
var boostGui;
var boostQuantityGui;
var wantedGui;
var boost;
var brakelights;
var lights;
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
var explosions;
var click;
var lightsOn = false;
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
var sound;
var score = 0;
var topBoundary;
var bottomBoundary;
var leftShotsFired = false;
var rightShotsFired = false;
var lastShot = Date.now();
var ammo = 0;
var ammogui;
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

    //Start Classic Cop
    var classicCopAnimation = [];

    for (var i = 1; i <= maxFrames; i++) {

        var classicCopAnimationFrames = {
            texture: PIXI.Texture.from("Sprites/PoliceCar/Car1/" + i + ".png"),
            time: 125
        };
        classicCopAnimation.push(classicCopAnimationFrames);
    }
    //End Classic Cop

    //Start SWAT
    var swatAnimation = [];

    for (var i = 1; i <= maxFrames; i++) {

        var swatAnimationFrames = {
            texture: PIXI.Texture.from("Sprites/PoliceCar/Car2/" + i + ".png"),
            time: 125
        };
        swatAnimation.push(swatAnimationFrames);
    }
    //End SWAT

    //Start Modern Cop
    var modernCopAnimation = [];

    for (var i = 1; i <= maxFrames; i++) {

        var modernCopAnimationFrames = {
            texture: PIXI.Texture.from("Sprites/PoliceCar/Car3/" + i + ".png"),
            time: 125
        };
        modernCopAnimation.push(modernCopAnimationFrames);
    }
    //End Modern Cop

    //Start Military Police
    var mpAnimation = [];

    for (var i = 1; i <= 6; i++) {

        var mpAnimationFrames = {
            texture: PIXI.Texture.from("Sprites/PoliceCar/Car6/" + i + ".png"),
            time: 125
        };
        mpAnimation.push(mpAnimationFrames);
    }
    //End Military Police

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
    explosion.visible = false;

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

    //Start light selection
    if (player1 == 1) {
        lights = new PIXI.Sprite(PIXI.Loader.shared.resources["Sprites/PlayerCars/Muscle/muscle_lights_on.png"].texture);
        brakelights = new PIXI.Sprite(PIXI.Loader.shared.resources["Sprites/PlayerCars/Muscle/muscle_brake_light.png"].texture);
    } else if (player1 == 2) {
        lights = new PIXI.Sprite(PIXI.Loader.shared.resources["Sprites/PlayerCars/Car1/Car_1_lights_on.png"].texture);
        brakelights = new PIXI.Sprite(PIXI.Loader.shared.resources["Sprites/PlayerCars/Car1/Car_1_brake_light.png"].texture);
    } else if (player1 == 3) {
        lights = new PIXI.Sprite(PIXI.Loader.shared.resources["Sprites/PlayerCars/Car3/Car_3_lights_on.png"].texture);
        brakelights = new PIXI.Sprite(PIXI.Loader.shared.resources["Sprites/PlayerCars/Car3/Car_3_brake_light.png"].texture);
    } else if (player1 == 4) {
        lights = new PIXI.Sprite(PIXI.Loader.shared.resources["Sprites/PlayerCars/Car2/Car_2_lights_on.png"].texture);
        brakelights = new PIXI.Sprite(PIXI.Loader.shared.resources["Sprites/PlayerCars/Car2/Car_2_brake_light.png"].texture);
    } else if (player1 == 5) {
        lights = new PIXI.Sprite(PIXI.Loader.shared.resources["Sprites/PlayerCars/Car5/Car_5_lights_on.png"].texture);
        brakelights = new PIXI.Sprite(PIXI.Loader.shared.resources["Sprites/PlayerCars/Car5/Car_5_brake_light.png"].texture);
    } else if (player1 == 6) {
        lights = new PIXI.Sprite(PIXI.Loader.shared.resources["Sprites/PlayerCars/Car4/Car_4_lights_on.png"].texture);
        brakelights = new PIXI.Sprite(PIXI.Loader.shared.resources["Sprites/PlayerCars/Car4/Car_4_brake_light.png"].texture);
    }
    //End light selection

    //Start map selection
    if (map == "day") {
        road = new PIXI.Sprite(PIXI.Loader.shared.resources["Sprites/Background/road.png"].texture);
        texture = PIXI.Texture.from('Sprites/Background/road.png');
    } else if (map == "night") {
        road = new PIXI.Sprite(PIXI.Loader.shared.resources["Sprites/Background/nightroad.png"].texture);
        texture = PIXI.Texture.from('Sprites/Background/nightroad.png');
    } else {
        road = new PIXI.Sprite(PIXI.Loader.shared.resources["Sprites/Background/road.png"].texture);
        texture = PIXI.Texture.from('Sprites/Background/road.png');
    }
    //End map selection

    topBoundary = new PIXI.Graphics();
    //topBoundary.beginFill(0xFF0000);
    topBoundary.drawRect(-100, 0, 3000, 150);
    topBoundary.y = -20;


    bottomBoundary = new PIXI.Graphics();
    //bottomBoundary.beginFill(0xFF0000);
    bottomBoundary.drawRect(-100, 0, 3000, 150);
    bottomBoundary.y = 715;

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
    //app.stage.addChild(playerTwo);
    app.stage.addChild(hpgui);
    app.stage.addChild(lifegui);
    app.stage.addChild(scoregui);
    app.stage.addChild(explosion);
    app.stage.addChild(boostGui);
    app.stage.addChild(boostQuantityGui);
    app.stage.addChild(wantedGui);
    //app.stage.addChild(topBoundary);
    //app.stage.addChild(bottomBoundary);

    if(player2 !== "none"){
        app.stage.addChild(playerTwo);
        scoregui.x =10;
        scoregui.y =100;
    }

    //sätter enums för piltangenterna keycodes
    var left = keyboard(65),
        up = keyboard(87),
        right = keyboard(68),
        down = keyboard(83),
        ctrl = keyboard(17),
        shift = keyboard(16),
        t = keyboard(84),
        q = keyboard(81),
        e = keyboard(69);

    //definerar vad som skall hända vid dessa events

    t.press = () => {
        if (lightsOn === false) {
            if (hp >= 50) {
                app.stage.addChild(lights);
                lightsOn = true;
            }
        } else if (lightsOn === true) {
            app.stage.removeChild(lights);
            lightsOn = false;
        }
    };

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

    q.press = () => {
        if(ammo > 0) {
            ammo -= 1;
            ammogui.text = 'Ammo: ' + ammo;
            gun = new Audio('Audio/gun.mp3');
            gun.play();
            leftShotsFired = true;
        }
        else {
            click = new Audio('Audio/click.mp3');
            click.play();
        }
    };

    q.release = () => {
        leftShotsFired = false;
    };

    e.press = () => {
        if(ammo > 0) {
            ammo -= 1;
            ammogui.text = 'Ammo: ' + ammo;
            gun = new Audio('Audio/gun.mp3');
            gun.play();
            rightShotsFired = true;
        }
        else {
            click = new Audio('Audio/click.mp3');
            click.play();
        }
    };

    e.release = () => {
        rightShotsFired = false;
    };

    ctrl.press = () => {
        honk = new Audio(sound);
        honk.play();
        life = 0;
        lifegui.text = 'life x '+life;
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
        if (hp >= 50) {
            app.stage.addChild(brakelights);
        }
    };

    left.release = () => {
        if (!right.isDown && playerOne.vy === 0) {
            playerOne.vx = 0;
            brake.pause();
            app.stage.removeChild(brakelights);
        }
    };

    //Uppåt
    up.press = () => {
        playerOne.vy = -5;
        playerOne.vx = 0;
        tires = new Audio('Audio/tires.mp3');
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

    var p2left = keyboard(37),
        p2up = keyboard(38),
        p2right = keyboard(39),
        p2down = keyboard(40);

    //Left arrow key `press` method
    p2left.press = () => {

        playerTwo.vx = -5;
        playerTwo.vy = 0;
    };

    //Left arrow key `release` method
    p2left.release = () => {

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
    var postDone = false;
    var oneTime = false;

    var isExploding = false;
    explosion.loop = false;

    explosion.onComplete = function() {
        isExploding = false;
        explosion.visible = false;
        explosion.stop();
        console.log("exploded.");
        life -= 1;
        lifegui.text = 'life x ' + life;
        hp = 100;
        hpgui.text = 'hp: ' + hp;
        app.stage.addChild(hpgui);
        app.stage.removeChild(playerOne);
        app.stage.addChild(playerOne);
        lastCollision = Date.now();
        playerOne.x = 500;
        playerOne.y = rightLane;
        playerOne.vx = 0;
        playerOne.vy = 0;
        playerOne.visible = true;
    };

    app.ticker.add(function () {
        //Start lights
        if (hp < 50) {
            app.stage.removeChild(lights);
            app.stage.removeChild(brakelights)
            lightsOn = false;
        }
        //End lights

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

        var playerOneState = whichState(hp);
        var playerTwoState = whichState(playerTwo.hp);

        if (player1 == 1) {
            playerOne.texture = PIXI.Texture.from("Sprites/PlayerCars/Muscle/muscle.png");
            sound = 'Audio/dixie.mp3';
        } else if (player1 == 2) {
            playerOne.texture = PIXI.Texture.from(`Sprites/PlayerCars/Car1/Car_1_0${playerOneState.sprite}.png`);
            sound ='Audio/honk.mp3';
        } else if (player1 == 3) {
            playerOne.texture = PIXI.Texture.from(`Sprites/PlayerCars/Car3/Car_3_0${playerOneState.sprite}.png`);
            sound = 'Audio/honk.mp3';
        } else if (player1 == 4) {
            playerOne.texture = PIXI.Texture.from(`Sprites/PlayerCars/Car2/Car_2_0${playerOneState.sprite}.png`);
            sound ='Audio/honk.mp3';
        } else if (player1 == 5) {
            playerOne.texture = PIXI.Texture.from(`Sprites/PlayerCars/Car5/Car_5_0${playerOneState.sprite}.png`);
            sound ='Audio/honk.mp3';
        } else if (player1 == 6) {
            playerOne.texture = PIXI.Texture.from(`Sprites/PlayerCars/Car4/Car_4_0${playerOneState.sprite}.png`);
            sound ='Audio/honk.mp3';
        } else if (player1 == "none") {
            playerOne.texture = PIXI.Texture.from("Sprites/PlayerCars/Muscle/muscle.png");
            sound = 'Audio/dixie.mp3';
        }

        if (player2 == 7) {
            playerTwo.texture = PIXI.Texture.from(`Sprites/PoliceCar/Car1/Car_1_0${playerTwoState.sprite}.png`);
        } else if (player2 == 8) {
            playerTwo.texture = PIXI.Texture.from(`Sprites/PoliceCar/Car3/Car_3_0${playerTwoState.sprite}.png`);
        } else if (player2 == 9) {
            playerTwo.texture = PIXI.Texture.from(`Sprites/PoliceCar/Car2/Car_2_0${playerTwoState.sprite}.png`);
        } else if (player2 == 10) {
            playerTwo.texture = PIXI.Texture.from(`Sprites/PoliceCar/Car6/Car_6_0${playerTwoState.sprite}.png`);
        }

        if(hp <= 1 && !isExploding){
            isExploding = true;
            playerOne.visible = false;
            explosion.visible = true;
            explosion.gotoAndPlay(0);
            explosions = new Audio('Audio/explosion.mp3');
            explosions.volume = 0.3;
            explosions.play();
            explosion.x = playerOne.x;
            explosion.y = playerOne.y;
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
                    data: {score: score}
                }).done(function( ) {
                    console.log("HEEJ");
                    postDone = true;
                });
            }
            if(postDone) {
                $.ajax({
                    method: "GET",
                    url: "/getHighscore"
                }).done(function( data ) {
                    if(!oneTime) {
                        for (var i = 0; i < data.length; i++) {
                            result.push(data[i]);
                        }
                        oneTime=true;
                    }
                    getDone = true;
                });
            }
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
                if(siren) {
                    siren.pause();
                }
                app.stage.removeChild(ammogui);
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
        if(player2 !== "none"){
            if(bump.hit(playerOne, playerTwo, true, true)){
                crash.play();
                if(Date.now()> lastCollision + 150) {
                    if(hp<4){
                        hp= 0 ;
                        hpgui.text = 'hp: ' + hp;
                        lastCollision = Date.now()
                    }
                    else {
                        hp -= 4;
                        hpgui.text = 'hp: ' + hp;
                        lastCollision = Date.now()
                    }
                }
            }
        }

        if(bump.hit(playerOne, topBoundary, true, true)){
            crash.play();
            if(Date.now()> lastCollision + 150) {
                if(hp<4){
                    hp= 0 ;
                    hpgui.text = 'hp: ' + hp;
                    lastCollision = Date.now()
                }
                else {
                    hp -= 4;
                    hpgui.text = 'hp: ' + hp;
                    lastCollision = Date.now()
                }
            }
        }
        if(bump.hit(playerOne, bottomBoundary, true, true)){
            crash.play();
            if(Date.now()> lastCollision + 150) {
                if(hp<4){
                    hp= 0 ;
                    hpgui.text = 'hp: ' + hp;
                    lastCollision = Date.now()
                }
                else {
                    hp -= 4;
                    hpgui.text = 'hp: ' + hp;
                    lastCollision = Date.now()
                }
            }
        }

        if(player2 !== "none"){
            if(bump.hit(playerTwo, topBoundary, true, true)){
                playerTwo.hp -= 4;
                crash.play();
            }
            if(bump.hit(playerTwo, bottomBoundary, true, true)){
                playerTwo.hp -= 4;
                crash.play();
            }
        }



        for (var i = 0; i < vehicles.length; i++) {

            if(rightShotsFired && ( vehicles[i].x < playerOne.x +50 && vehicles[i].x > playerOne.x -50) && vehicles[i].y > playerOne.y){
                if(Date.now()> lastShot + 500) {
                    vehicles[i].hp -= 20;
                    lastShot= Date.now();
                }
            }
            if(leftShotsFired && ( vehicles[i].x < playerOne.x +50 && vehicles[i].x > playerOne.x -50) && vehicles[i].y < playerOne.y){
                if(Date.now()> lastShot + 500) {
                    vehicles[i].hp -= 20;
                    lastShot= Date.now();
                }
            }

            if(vehicles[i].hasState == true) {
                //vehicles[i].hp = 5;
                var vehState = whichState(vehicles[i].hp);
                vehicles[i].texture = PIXI.Texture.from(`${vehicles[i].spriteName}${vehState.sprite}.png`);
            }

            if(bump.hit(playerOne,vehicles[i],true, true)){
                crash.play();
                if(Date.now()> lastCollision + 150 && !isExploding) {

                    if(hp<4){
                        hp=0;
                        hpgui.text = 'hp: ' + hp;
                        vehicles[i].hp -= 20;
                        lastCollision = Date.now()
                    }
                    else {
                        hp -= 4;
                        vehicles[i].hp -= 20;
                        hpgui.text = 'hp: ' + hp;
                        lastCollision = Date.now()
                    }
                }
            }

            if(player2 !== "none"){
                if(bump.hit(vehicles[i], playerTwo, true)){
                    vehicles[i].hp -= 20;
                    playerTwo.hp -= 4;
                    crash.play();
                }
            }


            bump.hit(vehicles[i], topBoundary, true, true);
            bump.hit(vehicles[i], bottomBoundary, true, true);

        }
        for (var i = 0; i < policeVehicles.length; i++) {

            if(rightShotsFired && ( policeVehicles[i].x < playerOne.x +50 && policeVehicles[i].x > playerOne.x -50) && policeVehicles[i].y > playerOne.y){
                if(Date.now()> lastShot + 500) {
                    policeVehicles[i].hp -= 20;
                    lastShot= Date.now();
                }
            }
            if(leftShotsFired && ( policeVehicles[i].x < playerOne.x +50 && policeVehicles[i].x > playerOne.x -50) && policeVehicles[i].y < playerOne.y){
                if(Date.now()> lastShot + 500) {
                    policeVehicles[i].hp -= 20;
                    lastShot= Date.now();
                }
            }
            if(bump.hit(playerOne, policeVehicles[i], true, true)){
                crash.play();
                if(Date.now()> lastCollision + 150) {
                    if(hp<4){
                        hp= 0 ;
                        hpgui.text = 'hp: ' + hp;
                        lastCollision = Date.now()
                    }
                    else {
                        hp -= 4;
                        hpgui.text = 'hp: ' + hp;
                        lastCollision = Date.now()
                    }
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
            var typeOfVehicle = Math.floor(Math.random() * (18 - 1) + 1);
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
                    vehicle = new PIXI.Sprite(PIXI.Loader.shared.resources["Sprites/Traffic/Police/Car3/Car_3_01.png"].texture);
                    vehicle.hasState = true;
                    vehicle.spriteName = "Sprites/Traffic/Police/Car3/Car_3_0";
                    break;
                case 8:
                    vehicle = new PIXI.Sprite(PIXI.Loader.shared.resources["Sprites/Traffic/Police/Car1/Car_1_01.png"].texture);
                    vehicle.hasState = true;
                    vehicle.spriteName = "Sprites/Traffic/Police/Car1/Car_1_0";
                    break;
                case 9:
                    vehicle = new PIXI.Sprite(PIXI.Loader.shared.resources["Sprites/Traffic/Police/Car5/Car_5_01.png"].texture);
                    vehicle.hasState = true;
                    vehicle.spriteName = "Sprites/Traffic/Police/Car5/Car_5_0";
                    break;
                case 10:
                    vehicle = new PIXI.Sprite(PIXI.Loader.shared.resources["Sprites/Traffic/Police/Car4/Car_4_01.png"].texture);
                    vehicle.hasState = true;
                    vehicle.spriteName = "Sprites/Traffic/Police/Car4/Car_4_0";
                    break;
                case 11:
                    vehicle = new PIXI.AnimatedSprite(ambulanceAnimation);
                    vehicle.play();
                    break;
                case 12:
                    vehicle = new PIXI.Sprite(PIXI.Loader.shared.resources["Sprites/Traffic/Car1/Car_1_01.png"].texture);
                    vehicle.hasState = true;
                    vehicle.spriteName = "Sprites/Traffic/Car1/Car_1_0";
                    break;
                case 13:
                    vehicle = new PIXI.Sprite(PIXI.Loader.shared.resources["Sprites/Traffic/Car2/Car_2_01.png"].texture);
                    vehicle.hasState = true;
                    vehicle.spriteName = "Sprites/Traffic/Car2/Car_2_0";
                    break;
                case 14:
                    vehicle = new PIXI.Sprite(PIXI.Loader.shared.resources["Sprites/Traffic/Car3/Car_3_01.png"].texture);
                    vehicle.hasState = true;
                    vehicle.spriteName = "Sprites/Traffic/Car3/Car_3_0";
                    break;
                case 15:
                    vehicle = new PIXI.Sprite(PIXI.Loader.shared.resources["Sprites/Traffic/Car4/Car_4_01.png"].texture);
                    vehicle.hasState = true;
                    vehicle.spriteName = "Sprites/Traffic/Car4/Car_4_0";
                    break;
                case 16:
                    vehicle = new PIXI.Sprite(PIXI.Loader.shared.resources["Sprites/Traffic/Car5/Car_5_01.png"].texture);
                    vehicle.hasState = true;
                    vehicle.spriteName = "Sprites/Traffic/Car5/Car_5_0";
                    break;
                case 17:
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
                    bVehicle = new PIXI.Sprite(PIXI.Loader.shared.resources["Sprites/Traffic/Police/Car3/Car_3_01.png"].texture);
                    break;
                case 8:
                    bVehicle = new PIXI.Sprite(PIXI.Loader.shared.resources["Sprites/Traffic/Police/Car1/Car_1_01.png"].texture);
                    break;
                case 9:
                    bVehicle = new PIXI.Sprite(PIXI.Loader.shared.resources["Sprites/Traffic/Police/Car5/Car_5_01.png"].texture);
                    break;
                case 10:
                    bVehicle = new PIXI.Sprite(PIXI.Loader.shared.resources["Sprites/Traffic/Police/Car4/Car_4_01.png"].texture);
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
        if(rightShotsFired && ( playerTwo.x < playerOne.x +50 && playerTwo.x > playerOne.x -50) && playerTwo.y > playerOne.y){
            if(Date.now()> lastShot + 500) {
                playerTwo.hp -= 20;
                lastShot= Date.now();
            }
        }
        if(leftShotsFired && ( playerTwo.x < playerOne.x +50 && playerTwo.x > playerOne.x -50) && playerTwo.y < playerOne.y){
            if(Date.now()> lastShot + 500) {
                playerTwo.hp -= 20;
                lastShot= Date.now();
            }
        }
        ammogui = new PIXI.Text('Ammo: '+ammo,style);
        ammogui.x = 2250;
        ammogui.y = 1150;
        app.stage.addChild(ammogui);
    });


    function gameLoop(delta) {

        state(delta);
    }

    function play(delta) {

        brakelights.x = playerOne.x - 10;
        brakelights.y = playerOne.y;

        lights.x = playerOne.x;
        lights.y = playerOne.y;

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
        SIX: {sprite: 6, name: "Six"}
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
    } else {
        currentState = STATE.FIVE;
    }

    return currentState;

}
