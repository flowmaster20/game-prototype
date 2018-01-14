//var rozmiar = 5;
function square(a,b,rozmiar){
	rect(a,b,rozmiar,rozmiar);

	restrict(a,b,rozmiar);
}
function restrict(a,b,rozmiar){
	if (avatar.x > a && avatar.x < (a + rozmiar)){
		avatar.x = a - size;
	}
	if (avatar.y > b && avatar.y < (b + rozmiar)){
		avatar.y = b - size;
	}
	console.log(b);
}
