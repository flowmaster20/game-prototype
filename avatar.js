var x = 0;
var y = 0;
function addphysics(a){
    a += 20; //grawitacja
    return a;
}
/*
function level(){
    this.map = function(){

    }

}
*/
function view(a,b){
var n = 0;
a = 0;
    if (x < 0){
        n--;
    }
    if (x > width){
        n++;
    }
    if(y>height){
        y=height;
    }
    if(y<0){
        y=0;

a = 0;
return n;
}
}

function avatar(a,b) {

var offsetY = 80;
var offsetX = 10;
var size = 20;
this.update = function(){
    x = x;
    y = addphysics(y);
}
this.right = function(){
    x += offsetX;
    if (x >= width){
        view(x,y);
    }
}
this.left = function(){
    x -= offsetX;
    if (x < 0){
        view(x,y);
    }
}
this.down = function(){
    y += offsetY;
        if(y <= 0){
        y = 0;
    }
}
this.up = function(){
    y -= offsetY;
    if(y >= height){
        y = size;
    }
}
this.show = function(){
    //level[view()].map()
   y = addphysics(y);
   //translate(width/2,height/2);
   view();

    fill(0);
    translate(0,-32)
  //  ellipse(x,y,size);
  image(img, x, y);
   //d console.log(x);
   // console.log(y);
}
}
