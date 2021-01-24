var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1=createSprite(110,585,180,20);
    surface2=createSprite(310,585,180,20);
    surface3=createSprite(510,585,180,20);
    surface4=createSprite(710,585,180,20);



    //create box sprite and give velocity
     box=createSprite(random(20,750),580,30,30);
     box.velocityX=4;
     box.velocityY=-4;
}

function draw() {
    background("pink");
    //create edgeSprite
    edges=createEdgeSprites();
    box.bounceOff(edges);

     surface1.display();
     surface1.shapeColor="blue";
     surface2.display();
     surface2.shapeColor="orange";
     surface3.display();
     surface3.shapeColor="red";
     surface4.display();
     surface4.shapeColor="yellow";

     box.display();
    //add condition to check if box touching surface and make it box

    if(surface1.isTouching(box) && box.bounceOff(surface1)){ 
        box.shapeColor = ("blue");
    }
    if(surface2.isTouching(box) && box.bounceOff(surface2)){ 
        box.shapeColor = ("orange");
        box.velocityX=0;
        box.velocityY=0;
        music.stop();
    }
    if(surface3.isTouching(box) && box.bounceOff(surface3)){ 
        box.shapeColor = ("red");
        music.play();
    }
    if(surface4.isTouching(box) && box.bounceOff(surface4)){ 
        box.shapeColor = ("yellow");
    }
}
