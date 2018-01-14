
function avatar(a,b) {
 this.x;
 this.y;
var offsetY = 10;
var offsetX = 10;
var size = 20;

this.setup = function(){
  this.x= a;
  this.y= b;
}

this.restrict = function(x_,y_,rozmiar){

if((this.x > x_ - size && this.x < (x_ + rozmiar)+size)&&(this.y > y_ -size &&this.y < (y_ +rozmiar)+size)){
    if(this.x > x_-size && this.x < (x_ + rozmiar)+size){
        this.x = x_ - size;
        }
    if(this.y > y_ - size &&this.y < (y_ +rozmiar)+size){
        this.y = y_ - size;
        }
}
}

this.right = function(){
    this.x += offsetX;
}
this.left = function(){
    this.x -= offsetX;
}
this.down = function(){
    this.y += offsetY;
}
this.up = function(){
    this.y -= offsetY;
}


this.show = function(){
  ellipse(this.x,this.y,size);
//image(img, this.x, this.y);
   //console.log(x);
  //console.log(this.y);

}
}
