var bullet,wall;
var speed,weight,thickness;

function setup(){
createCanvas(1600,400);
//giving a random value to speed, weight & thickness
speed=random(223,321);
weight=random(30,52);
thickness=random(22,83);
//creating the bullet
bullet=createSprite(200,200,20,10);
bullet.shapeColor=color(255);
bullet.velocityX=speed;
//creating the wall
wall=createSprite(1200,200,thickness,height/2);
wall.shapeColor=color(80,80,80);
}

function draw(){
//giving the background a color
background(0);
//drawing the sprites
drawSprites();
//detecting the collision and giving color to the bullet accordingly
if(hasCollided(bullet,wall)){
bullet.velocityX=0;
var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);

if(damage>10){
wall.shapeColor=color(255,0,0);
}

if(damage<10){
wall.shapeColor=color(0,255,0);
}

}

}