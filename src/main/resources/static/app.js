var app = new PIXI.Application({
        width: 840,
        height: 1000,
        antialias: true,
        transparent: false,
        resolution: 1
    }
);
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);

    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}

document.body.appendChild(app.view);

PIXI.Loader.shared
    .add("road1.png")
    .add("audi.png")
    .add("taxi.png")
    .add("truck.png")
    .add("semi.png")
    .add("van.png")
    .add("muscle.png")
    .add("viper.png")
    .load(setup);


var audi, police, policeP2, taxi, ambulance, state, road, mySound, accelerate;
var oncommingLeftLane = 215;
var oncommingRightLane = 100;
var leftLane = 360;
var rightLane = 560;
var b = new Bump(PIXI);

function setup() {

    accelerate = new sound("engine.mp3");
    accelerate.play();

    //Start police
    var policeAnimation = [];
    var maxFrames = 3;

    for (var i = 1; i <= maxFrames; i++){

        var policeAnimationFrames = {
            texture: PIXI.Texture.from("police" + i + ".png"),
            time: 125
        };

        policeAnimation.push(policeAnimationFrames);
    }

    policeP2 = new PIXI.AnimatedSprite(policeAnimation);
    policeP2.play();

    policeP2.x = rightLane;
    policeP2.y = 700;
    policeP2.vx = 0;
    policeP2.vy = 0;
    //End police

    //Start ambulance
    var ambulanceAnimation = [];
    var maxFrames = 3;

    for (var i = 1; i <= maxFrames; i++){

        var ambulanceAnimationFrames = {
            texture: PIXI.Texture.from("ambulance" + i + ".png"),
            time: 125
        };

        ambulanceAnimation.push(ambulanceAnimationFrames);
    }
    //End ambulance

    road = new PIXI.Sprite(PIXI.Loader.shared.resources["road1.png"].texture);
    audi = new PIXI.Sprite(PIXI.Loader.shared.resources["audi.png"].texture);

    var texture = PIXI.Texture.from('road1.png');

    //väljer en bakgrundsbild för att användas som texture till TilingSprite
    var texture = PIXI.Texture.from('road1.png');

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

    //sätter enums för piltangenterna keycodes
    var left = keyboard(37),
    up = keyboard(38),
    right = keyboard(39),
    down = keyboard(40);

    //definerar vad som skall hända vid dessa events

    //vänster

    left.press = () => {
        audi.vx = -8;
        audi.vy = 0;
        mySound = new sound("tires.mp3");
        mySound.play();
    };
    
    left.release = () => {
        if (!right.isDown && audi.vy === 0) {
            audi.vx = 0;
            mySound.stop();
        }
    };

    //Uppåt
    up.press = () => {
        audi.vy = -5;
        audi.vx = 0;
    };
    up.release = () => {
        if (!down.isDown && audi.vx === 0) {
            audi.vy = 0;
        }
    };

    //Höger
    right.press = () => {
        audi.vx = 8;
        audi.vy = 0;
        mySound = new sound("tires.mp3");
        mySound.play();
    };
    right.release = () => {
        if (!left.isDown && audi.vy === 0) {
            audi.vx = 0;
            mySound.stop();
        }
    };

    //Nedåt
    down.press = () => {
        audi.vy = 5;
        audi.vx = 0;
        mySound = new sound("brake.mp3");
        mySound.play();
    };
    down.release = () => {
        if (!up.isDown && audi.vx === 0) {
            audi.vy = 0;
            mySound.stop();
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

    //Traffic
    var numberOfVehicles = 50;
    var vehicle;
    var vehicleXPos;
    var vehicleYPos;
    var vehicleVelocity;
    var vehicles = [];

    for (var i = 0; i < numberOfVehicles; i++) {
        var typeOfVehicle = Math.floor(Math.random() * (7 - 1) + 1);
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
                vehicle = ambulance = new PIXI.AnimatedSprite(ambulanceAnimation);
                ambulance.play();
                break;
        }

        if (vehicleSpeed == 1) {
            vehicleXPos = oncommingRightLane;
            vehicleVelocity = 15;

        } else if (vehicleSpeed == 2) {
            vehicleXPos = oncommingLeftLane;
            vehicleVelocity = 20;
        }

        vehicleYPos = Math.floor(Math.random() * (0 - (-90000)) + (-90000));

        vehicle.x = vehicleXPos;
        vehicle.y = vehicleYPos;

        vehicle.vy = vehicleVelocity;

        vehicles.push(vehicle);

        app.stage.addChild(vehicle);
    }
    //End Traffic

    //Set the game state
    state = play;

    //Start the game loop
    app.ticker.add(delta => gameLoop(delta));

    var count = 0;

    app.ticker.add(function() {
        count += 0.005;
        tilingRoad.tilePosition.y += 10;

        //lägga in collision här

        //testar collision samt lägger på bounce-effekt
        b.hit(policeP2, audi, true, true);

    });


    /*
    function boxesIntersect(a, b)
    {
        var ab = a.getBounds();
        var bb = b.getBounds();
        return ab.x + ab.width > bb.x && ab.x < bb.x + bb.width && ab.y + ab.height > bb.y && ab.y < bb.y + bb.height;
    }
    */

function gameLoop(delta){

    state(delta);
}

function play(delta) {

    audi.x += audi.vx;
    audi.y += audi.vy;
    road.x += road.vx;
    road.y += road.vy;
    policeP2.x += policeP2.vx;
    policeP2.y += policeP2.vy;

    for (i = 0; i < vehicles.length; i++) {
        vehicles[i].y += vehicles[i].vy;
    }
}

function update(){

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