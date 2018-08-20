
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


  app.stage.addChild(road);
  app.stage.addChild(audi);
}