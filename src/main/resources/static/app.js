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
    .add("road1.png")
    .add("audi.png")
    .add("taxi.png")
    .add("truck.png")
    .add("semi.png")
    .add("van.png")
    .add("muscle.png")
    .add("viper.png")
    .add("engine.mp3")
    .load(setup);

var audi, policeCPU, policeP2, vehicle, state, road, tires, accelerate, hpgui, lifegui, scoregui, crash, brake;
var oncomingLeftLane = 300;
var oncomingRightLane = 175;
var leftLane = 430;
var rightLane = 560;
var b = new Bump(PIXI);
var c = new Bump(PIXI);
var hp = 100;
var life = 3;
var score = 0;

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

    hpgui = new PIXI.Text('hp: '+hp , style);
    hpgui.x = 30;
    hpgui.y = 30;

    lifegui = new PIXI.Text('life x ' +life , style);
    lifegui.x=30;
    lifegui.y=70;

    scoregui = new PIXI.Text('score ' +'\n'+ score , style);
    scoregui.x=700;
    scoregui.y=30;

    accelerate = new Audio('engine.mp3');
    crash = new Audio('crash.mp3');
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
    app.stage.addChild(hpgui);
    app.stage.addChild(lifegui);
    app.stage.addChild(scoregui);

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
    var lastSpawnedOncomingVehicle = Date.now();
    var lastSpawnedVehicle = Date.now();
    var lastSpawnedPoliceVehicle = Date.now();

    app.ticker.add(function() {
        count += 1;
        tilingRoad.tilePosition.y += 10;
        score += 1;
        scoregui.text = 'score' + '\n' + score;

        //lägga in collision här

        for (var i = 0; i < policeVehicles.length ; i++) {
            if(c.hit(audi,policeVehicles[i], true,true)){
                if(hp <= 1){
                    life -=1;
                    hp=101;
                    lifegui.text = 'life x ' + life;
                    hpgui.text = 'hp: ' + hp;
                }
                hp -= 1;
                hpgui.text = 'hp: ' + hp;
                crash.play();

            }
        }


        for (var i = 0; i < vehicles.length ; i++) {
            if(c.hit(audi,vehicles[i], true,true)){
                if(hp <= 1){
                    life -=1;
                    hp=101;
                    lifegui.text = 'life x ' + life;
                    hpgui.text = 'hp: ' + hp;
                }
                hp -= 1;
                hpgui.text = 'hp: ' + hp;
                crash.play();
            }
        }
        //c.hit(vehicle, audi, true, true);
      
        //testar collision samt lägger på bounce-effekt
        if(b.hit(audi, policeP2, true, true)){
            if(hp <= 1){
                life -=1;
                hp=101;
                lifegui.text = 'life x ' + life;
                hpgui.text = 'hp: ' + hp;

            }
            hp -= 1;
            hpgui.text = 'hp: ' + hp;
            crash.play();
        }

        //Traffic
        var vehicleXPos;
        var vehicleYPos;
        var vehicleVelocity;

        if(Date.now() > lastSpawnedOncomingVehicle + 5000) {
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

            if (Date.now() > lastSpawnedVehicle + 30000) {
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
                vehicle.rotation = Math.PI;
                vehicleXPos = rightLane + 100;
                vehicleVelocity = 1;
            }

            vehicleYPos = -300;

            vehicle.x = vehicleXPos;
            vehicle.y = vehicleYPos;

            vehicle.vy = vehicleVelocity;

            vehicles.push(vehicle);

            app.stage.addChild(vehicle);
        }

        //Pursuing cop cars
        var policeXPos;
        var policeYPos;
        var policeVelocity;

        if(Date.now() > lastSpawnedPoliceVehicle + 15000) {
            lastSpawnedPoliceVehicle = Date.now();
            var policeSpeed = Math.floor(Math.random() * (3 - 1) + 1);

            policeCPU = new PIXI.AnimatedSprite(policeAnimation);
            policeCPU.play();

            if (policeSpeed === 1) {
                policeXPos = rightLane;
                policeVelocity = -1;

            } else if (policeSpeed === 2) {
                policeXPos = leftLane;
                policeVelocity = -2;
            }

            policeYPos = 1100;

            policeCPU.x = policeXPos;
            policeCPU.y = policeYPos;

            policeCPU.vy = policeVelocity;

            policeVehicles.push(policeCPU);

            app.stage.addChild(policeCPU);
        }
        //End Traffic

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

    //Vehicles move down and are then removed
    for(var i = vehicles.length-1; i >= 0; i--) {
        vehicles[i].y += vehicles[i].vy;
        if(vehicles[i].y > app.screen.height+100) {
            app.stage.removeChild(vehicles[i]);
            vehicles.splice(i, 1);
        }
    }
    //PoliceCPU move up and are then removed
    for(var i = policeVehicles.length-1; i >= 0; i--) {
        policeVehicles[i].y += policeVehicles[i].vy;
        if(policeVehicles[i].y < -300) {
            app.stage.removeChild(policeVehicles[i]);
            policeVehicles.splice(i, 1);
        }
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