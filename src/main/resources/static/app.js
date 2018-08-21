
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
    .add("audi2.png")
    .add("police2.png")
  .load(setup);

let audi, police, state,road;

let b = new Bump(PIXI);

function setup() {

    road = new PIXI.Sprite(PIXI.loader.resources["road1.png"].texture);
    audi = new PIXI.Sprite(PIXI.loader.resources["audi2.png"].texture);
    police = new PIXI.Sprite(PIXI.loader.resources["police2.png"].texture);

    //väljer en bakgrundsbild för att användas som texture till TilingSprite
    var texture = PIXI.Texture.fromImage('road1.png');

    console.log(audi.width);

    //sätter bilens utgångsposition samt ursprungshastighet
    audi.x = 350;
    audi.y = 300;
    audi.vx = 0;
    audi.vy = 0;

    police.x = 500;
    police.y = 500;
    police.vx = 0;
    police.vy = 0;


    // skapar en tilingSprite för repeterande bakgrund
    var tilingRoad = new PIXI.extras.TilingSprite(
    texture,
    app.screen.width,
    app.screen.height
    );


    //lägger till ("stage'ar") den repeterande bakgrunden och spelar-bilen
    app.stage.addChild(tilingRoad);
    app.stage.addChild(audi);
    app.stage.addChild(police);




    //sätter enums för piltangenterna keycodes
    let left = keyboard(37),
        up = keyboard(38),
        right = keyboard(39),
        down = keyboard(40);

    //definerar vad som skall hända vid dessa events

    //vänster

    left.press = () => {
        audi.vx = -5;
        audi.vy = 0;
    };

    left.release = () => {
        if (!right.isDown && audi.vy === 0) {
            audi.vx = 0;
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
    };
    right.release = () => {
        if (!left.isDown && audi.vy === 0) {
            audi.vx = 0;
        }
    };

    //Nedåt
    down.press = () => {
        audi.vy = 5;
        audi.vx = 0;
    };
    down.release = () => {
        if (!up.isDown && audi.vx === 0) {
            audi.vy = 0;
        }
    };

    //Set the game state
    state = play;

    //Start the game loop
    app.ticker.add(delta => gameLoop(delta));


    let count = 0;
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

}

function update(){

}

//sätter eventhandlers för olika keyCodes
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



