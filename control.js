function keyTyped(){
	
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