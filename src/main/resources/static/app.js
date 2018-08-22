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
    .load(setup);


var audi, police, taxi, ambulance, state, road, mySound, accelerate;
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
            time: 100
        };

        policeAnimation.push(policeAnimationFrames);
    }

    police = new PIXI.AnimatedSprite(policeAnimation);
    police.play();

    police.x = 350;
    police.y = 125;
    police.vx = 0;
    police.vy = 0;
    //End police

    //Start ambulance
    var ambulanceAnimation = [];
    var maxFrames = 3;

    for (var i = 1; i <= maxFrames; i++){

        var ambulanceAnimationFrames = {
            texture: PIXI.Texture.from("ambulance" + i + ".png"),
            time: 100
        };

        ambulanceAnimation.push(ambulanceAnimationFrames);
    }

    ambulance = new PIXI.AnimatedSprite(ambulanceAnimation);
    ambulance.play();

    ambulance.x = 495;
    ambulance.y = 10;
    ambulance.vx = 0;
    ambulance.vy = 0;
    //End ambulance

    road = new PIXI.Sprite(PIXI.Loader.shared.resources["road1.png"].texture);
    audi = new PIXI.Sprite(PIXI.Loader.shared.resources["audi.png"].texture);;
    taxi = new PIXI.Sprite(PIXI.Loader.shared.resources["taxi.png"].texture);

    var texture = PIXI.Texture.from('road1.png');

    //väljer en bakgrundsbild för att användas som texture till TilingSprite
    var texture = PIXI.Texture.fromImage('road1.png');

    //sätter bilens utgångsposition samt ursprungshastighet
    audi.x = 350;
    audi.y = 300;
    audi.vx = 0;
    audi.vy = 0;

    taxi.x = 495;
    taxi.y = 300;
    taxi.vx = 0;
    taxi.vy = 0;

    var tilingRoad = new PIXI.TilingSprite(
        texture,
        app.screen.width,
        app.screen.height
    );

    //lägger till ("stage'ar") den repeterande bakgrunden och spelar-bilen
    app.stage.addChild(tilingRoad);
    app.stage.addChild(audi);
    app.stage.addChild(police);
    app.stage.addChild(ambulance);
    app.stage.addChild(taxi);

    //sätter enums för piltangenterna keycodes
    var left = keyboard(37),
    up = keyboard(38),
    right = keyboard(39),
    down = keyboard(40);

    //definerar vad som skall hända vid dessa events

    //vänster

    left.press = () => {
        audi.vx = -5;
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
        audi.vx = 5;
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
        police.vx = -5;
        police.vy = 0;
    };

    //Left arrow key `release` method
    p2left.release = () => {
        //If the left arrow has been released, and the right arrow isn't down,
        //and the cat isn't moving vertically:
        //Stop the cat
        if (!p2right.isDown && police.vy === 0) {
            police.vx = 0;
        }
    };

    //Up
    p2up.press = () => {
        police.vy = -5;
        police.vx = 0;
    };
    p2up.release = () => {
        if (!p2down.isDown && police.vx === 0) {
            police.vy = 0;
        }
    };

    //Right
    p2right.press = () => {
        police.vx = 5;
        police.vy = 0;
    };
    p2right.release = () => {
        if (!p2left.isDown && police.vy === 0) {
            police.vx = 0;
        }
    };

    //Down
    p2down.press = () => {
        police.vy = 5;
        police.vx = 0;
    };
    p2down.release = () => {
        if (!p2up.isDown && police.vx === 0) {
            police.vy = 0;
        }
    };

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
        b.hit(police, audi, true, true);

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

    police.x += police.vx;
    police.y += police.vy;

    taxi.x += taxi.vx;
    taxi.y += taxi.vy;
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