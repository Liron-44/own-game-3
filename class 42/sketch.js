var peopleWithMask, peopleWithoutMask, player, ground, peopleWithMaskGroup, peopleWithoutMaskGroup, peopleWithoutMaskimg, peopleWithMaskimg;
var score = 0;
var playerimg, backgroungimg

function preload(){
 //peopleWithoutMaskimg = loadImage()
 //peopleWithMask = loadImage()
 playerimg = loadAnimation("boy1.jpg", "boy2.jpg", "boy3.jpg", "boy4.jpg")
 //backgroungimg = loadImage()
}

function setup(){
    createCanvas(1200, 600);
 
    player = createSprite(400, 400, 30, 30)
    player.addAnimation("Boy", playerimg)
    player.scale = 0.3
    ground = createSprite(400, 500, 1600, 10)
    peopleWithMaskGroup = new Group();
    peopleWithoutMaskGroup = new Group();



    //peopleWithoutMask.shapeColor("red")
    //ground.shapeColor = ("black")
}
function draw(){
    background("white")
    score = score+Math.round(frameCount/60);
    textSize(40)
    stroke(random(0, 225), random(0, 225), random(0, 225));
    text("SCORE :"+ score, 900, 100);
if(keyDown("space")||keyDown("UP_ARROW")&&player.y>=150){
    player.velocityY = -7;
}
if(keyDown("RIGHT_ARROW")){
 player.velocityX = +7;
 player.velocityY = 0;   
}
player.velocityY += 0.6;
player.collide(ground);
spawnPeopleWithMask();
spawnPeopleWithoutMask();
cVirus()
    drawSprites();
}
function spawnPeopleWithMask(){
    if(frameCount % 100 === 0){
    peopleWithMask = createSprite(1100, 450, 30, 30);
    //peopleWithMask.shapeColor("green");
    peopleWithMask.velocityX = -9
    peopleWithMask.lifetime = 150;
    peopleWithMaskGroup.add(peopleWithMask);
    }
}
function spawnPeopleWithoutMask(){
    if(frameCount % 60 === 0){
        peopleWithoutMask = createSprite(1100, 450, 30, 30);
        peopleWithoutMask.velocityX = -9
        peopleWithoutMask.lifetime = 150;
        peopleWithoutMaskGroup.add(peopleWithoutMask);
    }
}
function cVirus(){

}