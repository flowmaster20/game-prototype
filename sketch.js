 var user;
 var img;
function preload() {
  img = loadImage('hero.jpg');
}
function setup(){
createCanvas(256,256);
frameRate(30);
translate(width/2,height/2);
    fill(0);
    ellipse(0,0,10);
 image(img, 0, 0);
   user = new avatar(0,0);
    user.x = 0;
    user.y = 0;
}

function draw(){
background(255);
view();
square(50,height-20,20);
user.show();
//ellipse(0,0,10);

}
