 var user;
function setup(){
createCanvas(256,256);
frameRate(30);
translate(width/2,height/2);
    fill(0);
    ellipse(0,0,10);
     
   user = new avatar(0,0);
    user.x = 0;
    user.y = 0;
}

function draw(){
background(200);

view();
user.show();
//ellipse(0,0,10);
}