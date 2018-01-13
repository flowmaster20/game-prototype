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
	if (key ==='w'||key ==='W'){
		user.up();
	}

	//DOL
	if (key ==='s'||key ==='S'){
		user.down();
	}
}
function devicemoved(){
	if(accelerationX - pAccelerationX < 0 ){
		user.left();
	}

	if(accelerationX - pAccelerationX > 0 ){
		user.right();
	}

	if(accelerationY - pAccelerationY < 0 ){
		user.down();
	}

	if(accelerationY - pAccelerationY > 0 ){
		user.up();
	}

}