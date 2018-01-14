// UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW.

function keyTyped(){

	//LEWO
	if (key === 'a'||key ==='A'){
		user.left();
	}

	//PRAWO
	if (key ==='d'||key ==='D'){
		user.right();
	}

	//GORA
	if (key ==='w'||key ==='W'||key ==='p'){
		user.up();
	}

	//DOL
	if (key ==='s'||key ==='S'){
		user.down();
	}
	//LEWO
	if (keyCode === LEFT_ARROW){
		user.left();
	}

	//PRAWO
	if (keyCode === RIGHT_ARROW){
		user.right();
	}

	//GORA
	if (keyCode === UP_ARROW){
		user.up();
	}

	//DOL
	if (keyCode === DOWN_ARROW){
		user.down();
	}
}
function keyIsPressed(){

	//LEWO
	if (key === 'a'||key ==='A'){
		avatar.left();
	}

	//PRAWO
	if (key ==='d'||key ==='D'){
		avatar.right();
	}

	//GORA
	if (key ==='w'||key ==='W'){
		avatar.up();
	}

	//DOL
	if (key ==='s'||key ==='S'){
		avatar.down();
	}
}
function keyIsDown(){
		//LEWO
	if (key === 'a'||key ==='A'){
		avatar.left();
	}

	//PRAWO
	if (key ==='d'||key ==='D'){
		avatar.right();
	}

	//GORA
	if (key ==='w'||key ==='W'){
		avatar.up();
	}

	//DOL
	if (key ==='s'||key ==='S'){
		avatar.down();
	}
}
}
function devicemoved(){
	if(accelerationX - pAccelerationX < 0 ){
		avatar.left();
	}

	if(accelerationX - pAccelerationX > 0 ){
		avatar.right();
	}

	if(accelerationY - pAccelerationY < 0 ){
		avatar.down();
	}

	if(accelerationY - pAccelerationY > 0 ){
		avatar.up();
	}

}
