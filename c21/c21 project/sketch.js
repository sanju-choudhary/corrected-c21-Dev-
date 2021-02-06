var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    edges=createEdgeSprites(); //CREATE EDGES HERE INSTEAD OF LINES


    box1=createSprite(100,550,200,50);
    box1.shapeColor ="red";
    box2=createSprite(300,550,200,50);
    box2.shapeColor="blue";
    box3=createSprite(500,550,200,50);
    box3.shapeColor="yellow";
    box4=createSprite(700,550,200,50);
    box4.shapeColor="green";

  
    //create 4 different surfaces
   /* line1=createSprite(400,30,800,10);
    line2=createSprite(30,300,10,800);
    line3=createSprite(400,580,800,10);
    line4=createSprite(790,300,10,800); */

    //create box sprite and give velocity
    playerBox=createSprite(100,100,20,20);
    playerBox.shapeColor="black";
    playerBox.velocityY=7;
    playerBox.velocityX=-5;
   
  
   
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    bounceOff(playerBox,box1);
    bounceOff(playerBox,box2);
    bounceOff(playerBox,box3);
    bounceOff(playerBox,box4);
  /*  bounceOff(playerBox,line1);
    bounceOff(playerBox,line2);
    bounceOff(playerBox,line3);
    bounceOff(playerBox,line4); */

    playerBox.bounceOff(edges); // BOUNCEOFF PLAYERBOX AND EDGES




    //add condition to check if box touching surface and make it box
    drawSprites();
}
function bounceOff(object1,object2){
    if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2
      && object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object1.y < object2.height/2 + object1.height/2) {
      object1.velocityY= object1.velocityY*(-1);
      object2.velocityY=object2.velocityY*(-1);
  }
  
  }
