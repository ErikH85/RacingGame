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
    .add("road.png")
    .add("audi.png")
    .add("taxi.png")
    .add("truck.png")
    .add("semi.png")
    .add("van.png")
    .add("muscle.png")
    .add("viper.png")
    .add("moderncop.png")
    .add("classiccop.png")
    .add("jeep.png")
    .add("army.png")
    .add("mp.png")
    .add("money.png")
    .add("wrench.png")
    .add("spikestrip.png")
    .add("engine.mp3")
    .add("black.png")
    .load(setup);

var audi;
var police;
var sheriff;
var vehicle;
var state;
var item;
var road;
var tires;
var accelerate;
var hpgui;
var lifegui;
var scoregui;
var crash;
var brake;
var music;
var engine;
var siren;
var honk;
var honkfade;
var backgroundTrafficRightLane = 1010;
var backgroundTrafficLeftLane = 1130;
var backgroundTrafficRandomLane;
var oncomingLeftLane = 300;
var oncomingRightLane = 175;
var leftLane = 430;
var rightLane = 560;
var bump = new Bump(PIXI);
//var c = new Bump(PIXI);
var hp = 100;
var life = 3;
var score = 0;
var topBoundary;
var bottomBoundary;

function setup() {


    var style = new PIXI.TextStyle({
        fontFamily: 'Arial',
        fontSize: 30,
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
    hpgui.y = 30;

    lifegui = new PIXI.Text('life x ' + life, style);
    lifegui.x = 30;
    lifegui.y = 70;

    scoregui = new PIXI.Text('score ' + '\n' + score, style);
    scoregui.x = 700;
    scoregui.y = 30;

    music = new Audio('music.mp3');
    music.volume = 0.3;
    music.play();
    music.addEventListener("ended", music.play);
    engine = new Audio('engine.mp3');
    engine.volume = 0.5;
    engine.play();
    engine.addEventListener("ended", engine.play);
    crash = new Audio('crash.mp3');



    //ANIMATIONS
    //Start sheriff
    var sheriffAnimation = [];
    var maxFrames = 3;

    for (var i = 1; i <= maxFrames; i++) {

        var sheriffAnimationFrames = {
            texture: PIXI.Texture.from("sheriff" + i + ".png"),
            time: 125
        };

        sheriffAnimation.push(sheriffAnimationFrames);
    }

    sheriff = new PIXI.AnimatedSprite(sheriffAnimation);
    sheriff.play();

    sheriff.x = 700;
    sheriff.y = rightLane;
    sheriff.vx = 0;
    sheriff.vy = 0;
    //End Sheriff

    //Start police
    var policeAnimation = [];

    for (var i = 1; i <= maxFrames; i++) {

        var policeAnimationFrames = {
            texture: PIXI.Texture.from("police" + i + ".png"),
            time: 125
        };
        policeAnimation.push(policeAnimationFrames);
    }
    //End police

    //Start ambulance
    var ambulanceAnimation = [];

    for (var i = 1; i <= maxFrames; i++) {

        var ambulanceAnimationFrames = {
            texture: PIXI.Texture.from("ambulance" + i + ".png"),
            time: 125
        };
        ambulanceAnimation.push(ambulanceAnimationFrames);
    }
    //End ambulance

    //Start SWAT
    var swatAnimation = [];

    for (var i = 1; i <= maxFrames; i++) {

        var swatAnimationFrames = {
            texture: PIXI.Texture.from("swat" + i + ".png"),
            time: 125
        };
        swatAnimation.push(swatAnimationFrames);
    }
    //End SWAT

    //END ANIMATIONS

    road = new PIXI.Sprite(PIXI.Loader.shared.resources["road.png"].texture);
    audi = new PIXI.Sprite(PIXI.Loader.shared.resources["audi.png"].texture);


    topBoundary = new PIXI.Graphics();
    //topBoundary.beginFill(0xFF0000);
    topBoundary.drawRect(-100, 0, 3000, 150);
    topBoundary.y = -20;

    bottomBoundary = new PIXI.Graphics();
    //bottomBoundary.beginFill(0xFF0000);
    bottomBoundary.drawRect(-100, 0, 3000, 150);
    bottomBoundary.y = 715;


    var texture = PIXI.Texture.from('road.png');

    //väljer en bakgrundsbild för att användas som texture till TilingSprite
    var texture = PIXI.Texture.from('road.png');

    //sätter bilens utgångsposition samt ursprungshastighet
    audi.x = 1000;
    audi.y = rightLane;
    audi.vx = 0;
    audi.vy = 0;

    var tilingRoad = new PIXI.TilingSprite(
        texture,
        app.screen.width,
        app.screen.height
    );


    //lägger till ("stage'ar") den repeterande bakgrunden och spelar-bilen
    app.stage.addChild(tilingRoad);
    app.stage.addChild(audi);
    app.stage.addChild(sheriff);
    app.stage.addChild(hpgui);
    app.stage.addChild(lifegui);
    app.stage.addChild(scoregui);
    //app.stage.addChild(topBoundary);
    //app.stage.addChild(bottomBoundary);

    //sätter enums för piltangenterna keycodes
    var left = keyboard(37),
        up = keyboard(38),
        right = keyboard(39),
        down = keyboard(40),
        space = keyboard(32);

    //definerar vad som skall hända vid dessa events

    space.press = () => {
        honk = new Audio('honk.mp3')
        honk.play();
    };

    space.release = () => {
            honkfade = new Audio('honkfade.mp3');
            honk.pause();
    };

    //vänster

    left.press = () => {
        audi.vx = -8;
        audi.vy = 0;
        brake = new Audio('brake.mp3');
        brake.play();
    };

    left.release = () => {
        if (!right.isDown && audi.vy === 0) {
            audi.vx = 0;
            brake.pause();
        }
    };

    //Uppåt
    up.press = () => {
        audi.vy = -5;
        audi.vx = 0;
        tires = new Audio('tires.mp3')
        tires.play();
    };
    up.release = () => {
        if (!down.isDown && audi.vx === 0) {
            audi.vy = 0;
            tires.pause();

        }
    };

    //Höger
    right.press = () => {
        audi.vx = 8;
        audi.vy = 0;
        accelerate = new Audio('acceleration.mp3');
        accelerate.play();
    };
    right.release = () => {
        if (!left.isDown && audi.vy === 0) {
            audi.vx = 0;
            accelerate.pause();
        }
    };

    //Nedåt
    down.press = () => {
        audi.vy = 5;
        audi.vx = 0;
        tires = new Audio('tires.mp3');
        tires.play();
    };
    down.release = () => {
        if (!up.isDown && audi.vx === 0) {
            audi.vy = 0;
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
        sheriff.vx = -5;
        sheriff.vy = 0;
    };

    //Left arrow key `release` method
    p2left.release = () => {
        //If the left arrow has been released, and the right arrow isn't down,
        //and the cat isn't moving vertically:
        //Stop the cat
        if (!p2right.isDown && sheriff.vy === 0) {
            sheriff.vx = 0;
        }
    };

    //Up
    p2up.press = () => {
        sheriff.vy = -5;
        sheriff.vx = 0;
    };
    p2up.release = () => {
        if (!p2down.isDown && sheriff.vx === 0) {
            sheriff.vy = 0;
        }
    };

    //Right
    p2right.press = () => {
        sheriff.vx = 5;
        sheriff.vy = 0;
    };
    p2right.release = () => {
        if (!p2left.isDown && sheriff.vy === 0) {
            sheriff.vx = 0;
        }
    };

    //Down
    p2down.press = () => {
        sheriff.vy = 5;
        sheriff.vx = 0;
    };
    p2down.release = () => {
        if (!p2up.isDown && sheriff.vx === 0) {
            sheriff.vy = 0;
        }
    };

    //Set the game state
    state = play;

    //Start the game loop
    app.ticker.add(delta => gameLoop(delta));

    var count = 0;
    var vehicles = [];
    var policeVehicles = [];
    var items = [];
    var lastSpawnedItem = Date.now();
    var lastSpawnedOncomingVehicle = Date.now();
    var lastSpawnedVehicle = Date.now();
    var lastSpawnedTraffic = Date.now();
    var lastSpawnedPoliceVehicle = Date.now();

    app.ticker.add(function () {
        count += 1;
        tilingRoad.tilePosition.x -= 15;
        score += 1;
        scoregui.text = 'score' + '\n' + score;

        if(hp <= 1){
            life -= 1;
            lifegui.text = 'life x ' + life;
            hp = 100;
            hpgui.text = 'hp: ' + hp;
        }

        if (life < 0){
            app.stage.removeChild(tilingRoad);
            var gameOver = new PIXI.Sprite(PIXI.Loader.shared.resources["black.png"].texture);
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
            var gameOvermsg = new PIXI.Text("GAME OVER", style2);
            gameOvermsg.x = 850;
            gameOvermsg.y = 100;
            var pScore = new PIXI.Text("YOUR SCORE: " + score, style3);
            pScore.x = 1000;
            pScore.y =300;
            var hScore = new PIXI.Text("HIGHSCORE", style3);
            hScore.x = 1100;
            hScore.y = 400;
            music.pause();
            engine.pause();
            siren.pause();
            app.stage.addChild(gameOver);
            app.stage.addChild(gameOvermsg);
            app.stage.addChild(pScore);
            app.stage.addChild(hScore);
            app.ticker.stop();

        }
        //Collision
        if(bump.hit(audi, sheriff, true, true)){
            crash.play();
            hp -= 2;
            hpgui.text = 'hp: ' + hp;
        }
        if(bump.hit(audi, topBoundary, true, true)){
            crash.play();
        }
        if(bump.hit(audi, bottomBoundary, true, true)){
            crash.play();
        }

        if(bump.hit(sheriff, topBoundary, true, true)){
            crash.play();
        }
        if(bump.hit(sheriff, bottomBoundary, true, true)){
            crash.play();
        }

        for (var i = 0; i < vehicles.length; i++) {
            if(bump.hit(audi,vehicles[i],true, true)){
                crash.play();
                hp -= 2;
                hpgui.text = 'hp: ' + hp;
            }
            if(bump.hit(vehicles[i], sheriff, true, true)){
                crash.play();
            }
            bump.hit(vehicles[i], topBoundary, true, true);
            bump.hit(vehicles[i], bottomBoundary, true, true);
        }
        for (var i = 0; i < policeVehicles.length; i++) {
            if(bump.hit(audi, policeVehicles[i], true, true)){
                crash.play();
                hp -= 2;
                hpgui.text = 'hp: ' + hp;
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
            if(bump.hit(sheriff,policeVehicles[i], true)){
                crash.play();
            }
        }

        for (var i = 0; i < vehicles.length; i++) {
            for (var j = 0; j < vehicles.length; j++) {
                if(!(vehicles[i] === vehicles[j])){
                    bump.hit(vehicles[i], vehicles[j],true);
                }


                //if(i == j ! bump)
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
            var typeOfVehicle = Math.floor(Math.random() * (12 - 1) + 1);
            var vehicleSpeed = Math.floor(Math.random() * (3 - 1) + 1);

            switch (typeOfVehicle) {
                case 1:
                    vehicle = new PIXI.Sprite(PIXI.Loader.shared.resources["truck.png"].texture);
                    break;
                case 2:
                    vehicle = new PIXI.Sprite(PIXI.Loader.shared.resources["semi.png"].texture);
                    break;
                case 3:
                    vehicle = new PIXI.Sprite(PIXI.Loader.shared.resources["van.png"].texture);
                    break;
                case 4:
                    vehicle = new PIXI.Sprite(PIXI.Loader.shared.resources["muscle.png"].texture);
                    break;
                case 5:
                    vehicle = new PIXI.Sprite(PIXI.Loader.shared.resources["taxi.png"].texture);
                    break;
                case 6:
                    vehicle = new PIXI.Sprite(PIXI.Loader.shared.resources["viper.png"].texture);
                    break;
                case 7:
                    vehicle = new PIXI.Sprite(PIXI.Loader.shared.resources["moderncop.png"].texture);
                    break;
                case 8:
                    vehicle = new PIXI.Sprite(PIXI.Loader.shared.resources["classiccop.png"].texture);
                    break;
                case 9:
                    vehicle = new PIXI.Sprite(PIXI.Loader.shared.resources["jeep.png"].texture);
                    break;
                case 10:
                    vehicle = new PIXI.Sprite(PIXI.Loader.shared.resources["army.png"].texture);
                    break;
                case 11:
                    vehicle = new PIXI.AnimatedSprite(ambulanceAnimation);
                    vehicle.play();
                    break;
            }

            if (Date.now() > lastSpawnedVehicle + 8000) {
                lastSpawnedVehicle = Date.now();
                vehicleSpeed = 3;
            }

            if(Date.now() > lastSpawnedTraffic + 10000) {
                lastSpawnedTraffic = Date.now();
                backgroundTrafficRandomLane = Math.floor(Math.random() * (3 - 1) + 1);
                if (backgroundTrafficRandomLane === 1) {
                    vehicleSpeed = 4;
                    vehicleYPos = backgroundTrafficRightLane;
                    vehicleVelocity = -20;
                } else if (backgroundTrafficRandomLane === 2) {
                    vehicleSpeed = 5;
                    vehicleYPos = backgroundTrafficLeftLane;
                    vehicleVelocity = -25;
                }
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

            vehicles.push(vehicle);

            app.stage.addChild(vehicle);
        }


        //Cops
        var policeXPos;
        var policeYPos;
        var policeVelocity;

        if (Date.now() > lastSpawnedPoliceVehicle + 7000) {
            lastSpawnedPoliceVehicle = Date.now();
            var typeOfPoliceVehicle = Math.floor(Math.random() * (4 - 1) + 1);


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
                case 3:
                    policeVelocity = 2;
                    police = new PIXI.Sprite(PIXI.Loader.shared.resources["mp.png"].texture);
                    break;
            }

            policeXPos = -100;
            policeYPos = leftLane;

            police.x = policeXPos;
            police.y = policeYPos;

            police.vx = policeVelocity;

            policeVehicles.push(police);
            siren = new Audio('siren.mp3');
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
                    item = new PIXI.Sprite(PIXI.Loader.shared.resources["money.png"].texture);
                    break;
                case 2:
                    item = new PIXI.Sprite(PIXI.Loader.shared.resources["wrench.png"].texture);
                    break;
                case 3:
                    item = new PIXI.Sprite(PIXI.Loader.shared.resources["spikestrip.png"].texture);
                    itemXPos = 2700;
                    itemyYPos = audi.y;
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

        audi.x += audi.vx;
        audi.y += audi.vy;
        road.x += road.vx;
        road.y += road.vy;
        sheriff.x += sheriff.vx;
        sheriff.y += sheriff.vy;

        //Vehicles move left and are then removed
        for (var i = vehicles.length - 1; i >= 0; i--) {
            vehicles[i].x += vehicles[i].vx;
            if (vehicles[i].x < - 300) {
                app.stage.removeChild(vehicles[i]);
                vehicles.splice(i, 1);
            }
        }
        //PoliceCPU move right and are then removed
        for (var i = policeVehicles.length - 1; i >= 0; i--) {
            policeVehicles[i].x += policeVehicles[i].vx;
            if (policeVehicles[i].x > app.screen.length + 300) {
                app.stage.removeChild(policeVehicles[i]);
                policeVehicles.splice(i, 1);
            }
        }
        //Items move left and are then removed
        for (var i = items.length - 1; i >= 0; i--) {
                items[i].x += items[i].vx;
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
            //The `downHandler`
            key.downHandler = event => {
                if (event.keyCode === key.code) {
                    if (key.isUp && key.press) key.press();
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