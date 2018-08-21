
let app = new PIXI.Application({
        width: 840,
        height: 1000,
        antialias: true,
        transparent: false,
        resolution: 1
    }
);


document.body.appendChild(app.view);

PIXI.loader
    .add("road1.png")
    .add("Audi.png")
    .add("Police.png")
    .add("Taxi.png")
    .load(setup);

let audi, police, taxi, state, road;

function setup() {

    road = new PIXI.Sprite(PIXI.loader.resources["road1.png"].texture);
    audi = new PIXI.Sprite(PIXI.loader.resources["Audi.png"].texture);
    police = new PIXI.Sprite(PIXI.loader.resources["Police.png"].texture);
    taxi = new PIXI.Sprite(PIXI.loader.resources["Taxi.png"].texture);

    var texture = PIXI.Texture.fromImage('road1.png');

    audi.x = 350;
    audi.y = 250;
    audi.vx = 0;
    audi.vy = 0;

    police.x = 350;
    police.y = 125;
    police.vx = 0;
    police.vy = 0;

    taxi.x = 350;
    taxi.y = 350;
    taxi.vx = 0;
    taxi.vy = 0;

    var tilingRoad = new PIXI.extras.TilingSprite(
        texture,
        app.screen.width,
        app.screen.height
    );


    app.stage.addChild(tilingRoad);
    app.stage.addChild(audi);
    app.stage.addChild(police);
    app.stage.addChild(taxi);

    let left = keyboard(37),
        up = keyboard(38),
        right = keyboard(39),
        down = keyboard(40);

    //Left arrow key `press` method
    left.press = () => {
        //Change the cat's velocity when the key is pressed
        audi.vx = -5;
        audi.vy = 0;
    };

    //Left arrow key `release` method
    left.release = () => {
        //If the left arrow has been released, and the right arrow isn't down,
        //and the cat isn't moving vertically:
        //Stop the cat
        if (!right.isDown && audi.vy === 0) {
            audi.vx = 0;
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
        }
    };

    //Right
    right.press = () => {
        audi.vx = 5;
        audi.vy = 0;
    };
    right.release = () => {
        if (!left.isDown && audi.vy === 0) {
            audi.vx = 0;
        }
    };

    //Down
    down.press = () => {
        audi.vy = 5;
        audi.vx = 0;
    };
    down.release = () => {
        if (!up.isDown && audi.vx === 0) {
            audi.vy = 0;
        }
    };

    let p2left = keyboard(65),
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

    let p3left = keyboard(74),
        p3up = keyboard(73),
        p3right = keyboard(76),
        p3down = keyboard(75);

    //Left arrow key `press` method
    p3left.press = () => {
        //Change the cat's velocity when the key is pressed
        taxi.vx = -5;
        taxi.vy = 0;
    };

    //Left arrow key `release` method
    p3left.release = () => {
        //If the left arrow has been released, and the right arrow isn't down,
        //and the cat isn't moving vertically:
        //Stop the cat
        if (!p3right.isDown && taxi.vy === 0) {
            taxi.vx = 0;
        }
    };

    //Up
    p3up.press = () => {
        taxi.vy = -5;
        taxi.vx = 0;
    };
    p3up.release = () => {
        if (!p3down.isDown && taxi.vx === 0) {
            taxi.vy = 0;
        }
    };

    //Right
    p3right.press = () => {
        taxi.vx = 5;
        taxi.vy = 0;
    };
    p3right.release = () => {
        if (!p3left.isDown && taxi.vy === 0) {
            taxi.vx = 0;
        }
    };

    //Down
    p3down.press = () => {
        taxi.vy = 5;
        taxi.vx = 0;
    };
    p3down.release = () => {
        if (!p3up.isDown && taxi.vx === 0) {
            taxi.vy = 0;
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

    police.x += police.vx;
    police.y += police.vy;

    taxi.x += taxi.vx;
    taxi.y += taxi.vy;

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