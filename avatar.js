var x = 0;
var y = 0;
function addphysics(a){
    a += 1; //grawitacja
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
if (n != 0){
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
    }
a = 0;
return n;
}
}

function avatar(a,b) {

var offset = 10;
var size = 10;
this.update = function(){
    x = x;
    y = addphysics(y);
}
this.right = function(){
    x += offset;
    if (x >= width){
        view(x,y);
    }
}
this.left = function(){
    x -= offset;
    if (x < 0){
        view(x,y);
    }
}
this.down = function(){
    y += offset;
        if(y <0 -size){
        y = size;
    }
}
this.up = function(){
    y -= offset;
    if(y >= height -size){
        y = size;
    }
}
this.show = function(){
    //level[view()].map()
   y = addphysics(y);
   //translate(width/2,height/2);
    fill(255);
    ellipse(x,y,size);
   //d console.log(x);
   // console.log(y);
}
}