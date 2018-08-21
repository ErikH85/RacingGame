
let app = new PIXI.Application({
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

PIXI.loader
    .add("road1.png")
    .add("Audi.png")
    .load(setup);

let audi, state,road;
let mySound;
let accelerate;

function setup() {

    accelerate = new sound("accelerate.mp3");
    accelerate.play();

    road = new PIXI.Sprite(PIXI.loader.resources["road1.png"].texture);
    audi = new PIXI.Sprite(PIXI.loader.resources["Audi.png"].texture);

    var texture = PIXI.Texture.fromImage('road1.png');

    audi.x = 350;
    audi.y = 250;
    audi.vx = 0;
    audi.vy = 0;

    var tilingRoad = new PIXI.extras.TilingSprite(
        texture,
        app.screen.width,
        app.screen.height
    );


    app.stage.addChild(tilingRoad);
    app.stage.addChild(audi);

    let left = keyboard(37),
        up = keyboard(38),
        right = keyboard(39),
        down = keyboard(40);

    //Left arrow key `press` method
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
            accelerate = new sound("accelerate.mp3");
            accelerate.play();
        }
    };

    //Up
    up.press = () => {
        audi.vy = -5;
        audi.vx = 0;
    };
    up.release = () => {
        if (!down.isDown && audi.vx === 0) {
            audi.vy = 0;
            accelerate = new sound("accelerate.mp3");
            accelerate.play();
        }
    };

    //Right
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
            accelerate = new sound("accelerate.mp3");
            accelerate.play();
        }
    };

    //Down
    down.press = () => {
        audi.vy = 5;
        audi.vx = 0;
        mySound = new sound("tires.mp3");
        mySound.play();
    };
    down.release = () => {
        if (!up.isDown && audi.vx === 0) {
            audi.vy = 0;
            mySound.stop();
            accelerate = new sound("accelerate.mp3");
            accelerate.play();
        }
    };

    //Set the game state
    state = play;

    //Start the game loop
    app.ticker.add(delta => gameLoop(delta));

    let count = 0;
    app.ticker.add(function() {
        count += 0.005;
        tilingRoad.tilePosition.y += 5;
    });
}

function gameLoop(delta){

    //Update the current game state:
    state(delta);
}

function play(delta) {

    //Use the cat's velocity to make it move
    audi.x += audi.vx;
    audi.y += audi.vy;
    road.x += road.vx;
    road.y += road.vy;


}

function update(){


}

function keyboard(keyCode) {
    let key = {};
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

    //The `upHandler`
    key.upHandler = event => {
        if (event.keyCode === key.code) {
            if (key.isDown && key.release) key.release();
            key.isDown = false;
            key.isUp = true;
        }
        event.preventDefault();
    };

    //Attach event listeners
    window.addEventListener(
        "keydown", key.downHandler.bind(key), false
    );
    window.addEventListener(
        "keyup", key.upHandler.bind(key), false
    );
    return key;
}