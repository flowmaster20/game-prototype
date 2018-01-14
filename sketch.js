 var user;
 var img;
function preload() {
  img = loadImage('hero.jpg');
}
function setup(){

createCanvas(400,400);
frameRate(30);
translate(width/2,height/2);
    fill(0);
    ellipse(0,0,10);
 image(img, 0, 0);
   user = new avatar(0,0);
   user.setup();
}

function draw(){
background(255);
square(50,height-20,20);

user.update();
user.show();


}
