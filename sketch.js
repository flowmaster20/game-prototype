 var user;
 var img;
 var SQUARES = [];

 function preload() {
   img = loadImage('hero.jpg');
 }

 function setup() {
   createCanvas(windowWidth, 250);
   frameRate(30);
   translate(width / 2, height / 2);
   stroke(255);
   fill(0);
   ellipse(0, 0, 10);
   background(200);
   image(img, 0, 0);
   user = new avatar(0, 0);

   for (var i = 0; i < 1000; i++) {
     SQUARES[i] = new square(random(0, width), random(0, height), random(0, 100));

   }
   user.setup();
 }

 function draw() {
   var millisecond = millis();
   text('Milliseconds \nrunning: \n' + millisecond, 5, 40);
   background(200);

   strokeWeight(5);
   fill(0);
   line(0, height, width, height);
   for (var i = 0; i < 10; i++) {
     SQUARES[i].show();
     SQUARES[i].cancel();

   }

   user.update();
   user.show();


 }
