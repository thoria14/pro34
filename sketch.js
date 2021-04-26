const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine,world;
var man;
var thunder;
var rainS;
var rand;
var thunder1Img,thunder2Img,thunder3Img,thunder4Img;
var maxDrops=100;
var dropArray=[];

function preload(){
    thunder1Img=loadImage("1.png");
    thunder2Img=loadImage("2.png");
    thunder3Img=loadImage("3.png");
    thunder4Img=loadImage("4.png");
    
}

function setup(){
   createCanvas(600,800);
   engine = Engine.create();
   world = engine.world;
   man = new Umbrella(250,460);
   if(frameCount%50===0){
    for(var i=0;i<maxDrops;i++){
        dropArray.push(new Drop(random(0,800),random(0,700),10));
    }
   }

}

function draw(){
    background(0);
    Engine.update(engine);
    man.display();

    for(var k = 0 ; k < maxDrops ; k++){
        dropArray[k].update();
        dropArray[k].display();

       }

    if(frameCount % 200 === 0){
        thunder = createSprite(random(0,700),0);
a
        rand = Math.round(1,4)

        switch(rand){
            case 1 : thunder.addImage(thunder1Img);
                     break;

            case 2 : thunder.addImage(thunder2Img);
                     break;

            case 3 : thunder.addImage(thunder3Img);
                     break;  
                     
            case 4 : thunder.addImage(thunder4Img);
                     break;
        }

        thunder.scale = 1;
        thunder.lifetime = 12;

        

    }
    drawSprites();

}   

