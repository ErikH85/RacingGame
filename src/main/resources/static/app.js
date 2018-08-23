var app = new PIXI.Application({
        width: 840,
        height: 1000,
        antialias: true,
        transparent: false,
        resolution: 1
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
    .add("swat.png")
    .add("mp.png")
    .add("money.png")
    .add("wrench.png")
    .add("spikestrip.png")
    .add("engine.mp3")
    .load(setup);

var audi, policeCPU, policeP2, vehicle, state, item, spikestrip, road, tires, accelerate, hpgui, lifegui, scoregui, crash, brake, music,engine,siren,honk,honkfade;
var oncomingLeftLane = 300;
var oncomingRightLane = 175;
var leftLane = 430;
var rightLane = 560;
var bump = new Bump(PIXI);
//var c = new Bump(PIXI);
var hp = 100;
var life = 3;
var score = 0;
var leftBoundary;
var rightBoundary;

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

    policeP2 = new PIXI.AnimatedSprite(sheriffAnimation);
    policeP2.play();

    policeP2.x = rightLane;
    policeP2.y = 700;
    policeP2.vx = 0;
    policeP2.vy = 0;
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
    //END ANIMATIONS

    road = new PIXI.Sprite(PIXI.Loader.shared.resources["road.png"].texture);
    audi = new PIXI.Sprite(PIXI.Loader.shared.resources["audi.png"].texture);






    leftBoundary = new PIXI.Graphics();
    //leftBoundary.beginFill(0xFF0000);
    leftBoundary.drawRect(0, 0, 104, 1000);
    leftBoundary.x = 32;

    rightBoundary = new PIXI.Graphics();
    //rightBoundary.beginFill(0xFF0000);
    rightBoundary.drawRect(0, 0, 104, 1000);
    rightBoundary.x = 710;


    var texture = PIXI.Texture.from('road.png');

    //väljer en bakgrundsbild för att användas som texture till TilingSprite
    var texture = PIXI.Texture.from('road.png');

    //sätter bilens utgångsposition samt ursprungshastighet
    audi.x = rightLane;
    audi.y = 300;
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
    app.stage.addChild(policeP2);
    app.stage.addChild(hpgui);
    app.stage.addChild(lifegui);
    app.stage.addChild(scoregui);
    //app.stage.addChild(leftBoundary);
    //app.stage.addChild(rightBoundary);

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
        tires = new Audio('tires.mp3')
        tires.play();
    };

    left.release = () => {
        if (!right.isDown && audi.vy === 0) {
            audi.vx = 0;
            tires.pause();
        }
    };

    //Uppåt
    up.press = () => {
        audi.vy = -5;
        audi.vx = 0;
        accelerate = new Audio('acceleration.mp3');
        accelerate.volume = 0.9;
        accelerate.play();
    };
    up.release = () => {
        if (!down.isDown && audi.vx === 0) {
            audi.vy = 0;
            accelerate.pause();

        }
    };

    //Höger
    right.press = () => {
        audi.vx = 8;
        audi.vy = 0;
        tires = new Audio('tires.mp3');
        tires.play();
    };
    right.release = () => {
        if (!left.isDown && audi.vy === 0) {
            audi.vx = 0;
            tires.pause();
        }
    };

    //Nedåt
    down.press = () => {
        audi.vy = 5;
        audi.vx = 0;
        brake = new Audio('brake.mp3');
        brake.play();
    };
    down.release = () => {
        if (!up.isDown && audi.vx === 0) {
            audi.vy = 0;
            brake.pause();
        }
    };

    var p2left = keyboard(65),
        p2up = keyboard(87),
        p2right = keyboard(68),
        p2down = keyboard(83);

    //Left arrow key `press` method
    p2left.press = () => {
        //Change the cat's velocity when the key is pressed
        policeP2.vx = -5;
        policeP2.vy = 0;
    };

    //Left arrow key `release` method
    p2left.release = () => {
        //If the left arrow has been released, and the right arrow isn't down,
        //and the cat isn't moving vertically:
        //Stop the cat
        if (!p2right.isDown && policeP2.vy === 0) {
            policeP2.vx = 0;
        }
    };

    //Up
    p2up.press = () => {
        policeP2.vy = -5;
        policeP2.vx = 0;
    };
    p2up.release = () => {
        if (!p2down.isDown && policeP2.vx === 0) {
            policeP2.vy = 0;
        }
    };

    //Right
    p2right.press = () => {
        policeP2.vx = 5;
        policeP2.vy = 0;
    };
    p2right.release = () => {
        if (!p2left.isDown && policeP2.vy === 0) {
            policeP2.vx = 0;
        }
    };

    //Down
    p2down.press = () => {
        policeP2.vy = 5;
        policeP2.vx = 0;
    };
    p2down.release = () => {
        if (!p2up.isDown && policeP2.vx === 0) {
            policeP2.vy = 0;
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
    var lastSpawnedPoliceVehicle = Date.now();

    app.ticker.add(function () {
        count += 1;
        tilingRoad.tilePosition.y += 10;
        score += 1;
        scoregui.text = 'score' + '\n' + score;

        hp = 1;

        var audiState = whichState(hp);
        audi.texture = PIXI.Texture.from(`Audi${audiState.sprite}.png`);


        //Collision
        bump.hit(audi, policeP2, true, true);
        bump.hit(audi, leftBoundary, true, true);
        bump.hit(audi, rightBoundary, true, true);

        bump.hit(policeP2, leftBoundary, true, true);
        bump.hit(policeP2, rightBoundary, true, true);

        for (var i = 0; i < vehicles.length; i++) {
            bump.hit(audi,vehicles[i],true, true);
            bump.hit(vehicles[i], policeP2, true, true);
            bump.hit(vehicles[i], leftBoundary, true, true);
            bump.hit(vehicles[i], rightBoundary, true, true);
        }
        for (var i = 0; i < policeVehicles.length; i++) {
            bump.hit(audi, policeVehicles[i], true, true);
            bump.hit(policeVehicles[i], leftBoundary, true, true);
            bump.hit(policeVehicles[i], rightBoundary, true, true);
        }
        for (var i = 0; i < vehicles.length; i++) {
            for (var j = 0; j < policeVehicles.length; j++) {
                bump.hit(vehicles[i],policeVehicles[j], true, true);
            }
        }
        for (var i = 0; i < policeVehicles.length; i++) {
            bump.hit(policeP2,policeVehicles[i], true);
        }

        for (var i = 0; i < vehicles.length; i++) {
            for (var j = 0; j < vehicles.length; j++) {
                if(!(vehicles[i] === vehicles[j])){
                    bump.hit(vehicles[i], vehicles[j],true);
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
            var typeOfVehicle = Math.floor(Math.random() * (8 - 1) + 1);
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
                    vehicle = new PIXI.AnimatedSprite(ambulanceAnimation);
                    vehicle.play();
                    break;
            }

            if (Date.now() > lastSpawnedVehicle + 8000) {
                lastSpawnedVehicle = Date.now();
                vehicleSpeed = 3;
            }

            if (vehicleSpeed === 1) {
                vehicleXPos = oncomingRightLane;
                vehicleVelocity = 15;
            } else if (vehicleSpeed === 2) {
                vehicleXPos = oncomingLeftLane;
                vehicleVelocity = 20;
            } else if (vehicleSpeed === 3) {
                vehicle.anchor.set(0.5);
                vehicle.rotation = Math.PI;

                vehicleXPos = rightLane + 50;
                vehicleVelocity = 1;
            }

            vehicleYPos = -300;

            vehicle.x = vehicleXPos;
            vehicle.y = vehicleYPos;

            vehicle.vy = vehicleVelocity;

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
                    policeVelocity = -4;
                    policeCPU = new PIXI.AnimatedSprite(policeAnimation);
                    policeCPU.play();
                    break;
                case 2:
                    policeVelocity = -7;
                    policeCPU = new PIXI.Sprite(PIXI.Loader.shared.resources["swat.png"].texture);
                    break;
                case 3:
                    policeVelocity = -10;
                    policeCPU = new PIXI.Sprite(PIXI.Loader.shared.resources["mp.png"].texture);
                    break;
            }

            policeXPos = leftLane;
            policeYPos = 1100;

            policeCPU.x = policeXPos;
            policeCPU.y = policeYPos;

            policeCPU.vy = policeVelocity;

            policeVehicles.push(policeCPU);
            siren = new Audio('siren.mp3');
            siren.play();

            app.stage.addChild(policeCPU);
        }
        //END TRAFFIC

        //ITEMS
        var itemXPos;
        var itemYPos;
        var itemVelocity = 10;

        if (Date.now() > lastSpawnedItem + 6000) {
            lastSpawnedItem = Date.now();
            var typeOfItem = Math.floor(Math.random() * (4 - 1) + 1);
            itemXPos = Math.floor(Math.random() * (550 - 250) + 200);
            itemYPos = -100;

            switch (typeOfItem) {
                case 1:
                    item = new PIXI.Sprite(PIXI.Loader.shared.resources["money.png"].texture);
                    item.vy = itemVelocity;
                    break;
                case 2:
                    item = new PIXI.Sprite(PIXI.Loader.shared.resources["wrench.png"].texture);
                    item.vy = itemVelocity;
                    break;
                case 3:
                    item = new PIXI.Sprite(PIXI.Loader.shared.resources["spikestrip.png"].texture);
                    itemXPos = 900;
                    itemYPos = audi.y - 50;
                    item.vx = -7;
                    item.vy = 2;
                    spikestrip = true;
                    break;
            }

            item.x = itemXPos;
            item.y = itemYPos;

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
        policeP2.x += policeP2.vx;
        policeP2.y += policeP2.vy;

        //Vehicles move down and are then removed
        for (var i = vehicles.length - 1; i >= 0; i--) {
            vehicles[i].y += vehicles[i].vy;
            if (vehicles[i].y > app.screen.height + 100) {
                app.stage.removeChild(vehicles[i]);
                vehicles.splice(i, 1);
            }
        }
        //PoliceCPU move up and are then removed
        for (var i = policeVehicles.length - 1; i >= 0; i--) {
            policeVehicles[i].y += policeVehicles[i].vy;
            if (policeVehicles[i].y < -300) {
                app.stage.removeChild(policeVehicles[i]);
                policeVehicles.splice(i, 1);
            }
        }
        //Items move down (left or right if spikestrip) and are then removed
        for (var i = items.length - 1; i >= 0; i--) {
            if (!spikestrip) {
                items[i].y += items[i].vy;
                if (items[i].y < -300) {
                    app.stage.removeChild(items[i]);
                    items.splice(i, 1);
                }
            } else {
                items[i].x += items[i].vx;
                items[i].y += items[i].vy;
                if (items[i].x < -300) {
                    app.stage.removeChild(items[i]);
                    items.splice(i, 1);
                    spikestrip = false;
                }
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


function whichState(carHP){

    var STATE = {
        ONE: {sprite: 1, name: "One"},
        TWO: {sprite: 2, name: "Two"},
        THREE: {sprite: 3, name: "Three"},
        FOUR: {sprite: 4, name: "Four"},
        FIVE: {sprite: 5, name: "Five"}
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
