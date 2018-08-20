
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
  .load(setup);


function setup() {

  let road = new PIXI.Sprite(PIXI.loader.resources["road1.png"].texture);
  let audi = new PIXI.Sprite(PIXI.loader.resources["Audi.png"].texture);

  audi.x = 350;
  audi.y = 250;


    app.ticker.add(function(delta) {
        // just for fun, let's rotate mr rabbit a little
        // delta is 1 if running at 100% performance
        // creates frame-independent transformation
        audi.y -= 0.5 * delta;
    });


  app.stage.addChild(road);
  app.stage.addChild(audi);
}

function update(){


}





