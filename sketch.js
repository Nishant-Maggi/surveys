var gameState = "start";

var form;

var database;

function setup() {
  createCanvas(1000,400);

database = firebase.database();

form = new Form();
  
}

function draw() {
  background("red");  

  form.display();

  drawSprites();

  console.log(firebase);
}