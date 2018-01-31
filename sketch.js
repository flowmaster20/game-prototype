 var user;
 var img;
    var SQUARES = [];
function preload() {
  img = loadImage('hero.jpg');
}
function setup(){
createCanvas(windowWidth,windowHeight);
frameRate(30);
translate(width/2,height/2);
    fill(0);
    ellipse(0,0,10);
 image(img, 0, 0);
   user = new avatar(0,0);

   for (var i = 0;i< 10;i++){
     SQUARES[i] = new square(random(0,height),random(0,width),random(0,50));

   }
   user.setup();
}

function draw(){
  var millisecond = millis();
  text('Milliseconds \nrunning: \n' + millisecond, 5, 40);
background(255);

for (var i = 0;i< 10;i++){
  SQUARES[i].show();

}

user.update();
user.show();


}
