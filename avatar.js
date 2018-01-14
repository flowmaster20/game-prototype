
function avatar(a,b) {
this.position = createVector(width/2,height/2);
this.velocity = createVector(0,0);
var offsetX = createVector(10,0);
var offsetY = createVector(0,10);
var size = 20;

this.setup = function(){
  this.position.set(a,b);
}

this.restrict = function(x_,y_,rozmiar){
//
// if((this.x > x_ - size && this.x < (x_ + rozmiar)+size)&&(this.y > y_ -size &&this.y < (y_ +rozmiar)+size)){
//     if(this.x > x_-size && this.x < (x_ + rozmiar)+size){
//         this.x = x_ - size;
//         }
//     if(this.y > y_ - size &&this.y < (y_ +rozmiar)+size){
//         this.y = y_ - size;
//         }
//}
}

this.right = function(){
    this.velocity.add(offsetX);
}
this.left = function(){
    this.velocity.sub(offsetX);
}
this.down = function(){
    this.velocity.add(offsetY);
}
this.up = function(){
    this.velocity.sub(offsetY);
}

this.checkEdge = function(){
  if (this.position.x<0 || this.position.x>width){
    this.velocity.x *= -1;
  }
  if (this.position.y<0 || this.position.y>height){
    this.velocity.y *= -1;
    if(this.position.y > height+1){
      this.position.y = height;

    }
  }
}
this.update = function(){
  var dir =new p5.Vector(this.position.x,height)
  this.gravity = p5.Vector.sub(this.position,dir);
  this.gravity.normalize();
  this.gravity.mult(map(this.position.y,height,0,0,10));
  this.velocity.sub(this.gravity);
  this.velocity.limit(20);
  this.checkEdge();
  this.position.add(this.velocity);
}
this.show = function(){

  ellipse(this.position.x,this.position.y,size);
//image(img, this.x, this.y);
   //console.log(x);
  //console.log(this.y);

}
}
