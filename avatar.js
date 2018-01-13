var x = 0;
var y= 0;

function addphysics(var a){
    a -= 5; //grawitacja
    return a;
}
/*
function level(){
    this.map = function(){

    }

}
*/
function view(){
var n = 0;
x = 0;
if (n != 0){
    if (x < 0){
        n--;        
    }
    if (x > width){
        n++;        
    }
    if (y < 0){
        y = 0;
    }
    if (y > height){
        y = height;
    }
avatar.x = 0;
return n;
}


function avatar() {
var offset = 10;
var size = 10;
this.right = function(){
    x += offset;
    if (x >= width){
        view();
    }
}
this.left = function(){
    x -= offset;
    if (x < 0){
        view();
    }
}
this.up = function(){
    y += offset;
        if(y <0 -size){
        y = size;
    }
}
this.down = function(){
    y -= offset;
    if(y >= height -size){
        y = size;
    }
}
this.show = function(){
    view();
    restrict();
    //level[view()].map()
   y = addphysics(this.y);
    noStroke();
    fill(255,0,0);
    rect(x,y,size);
}
}