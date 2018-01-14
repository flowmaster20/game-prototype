
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
    if (a < 0){
        n--;
    }
    if (a > width){
        n++;
    }
    if(b>height){
        y=height;
    }
    if(b<0){
        avatar.y=0;

a = 0;
return n;
}
}

function avatar(a,b) {
 this.x;
 this.y;
var offsetY = 80;
var offsetX = 10;
var size = 20;
this.setup = function(){
  x= this.a;
  y= this.b;
}
this.right = function(){
    this.x += offsetX;
    if (x >= width){
        view(this.x,this.y);
    }
}
this.left = function(){
    this.x -= offsetX;
    if (this.x < 0){
        view(this.x,this.y);
    }
}
this.down = function(){
    this.y += offsetY;
        if(this.y >= height){
        this.y = height;
    }
}
this.up = function(){
    this.y -= offsetY;
    if(this.y <= 0){
        this.y = size;
    }
}
this.show = function(){
    //level[view()].map()
   this.y = addphysics(this.y);
   //translate(width/2,height/2);
view(this.x,this.y);
    fill(0);
    translate(0,-32)
  //  ellipse(x,y,size);

  image(img, this.x, this.y);
   //d console.log(x);
    console.log(this.y);
    if (this.y > height){
      this.y = height-32;
    }
}
}
