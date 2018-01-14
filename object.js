//var rozmiar = 5;
function square(a,b,rozmiar){
	rect(a,b,rozmiar,rozmiar);

	restrict(a,b,rozmiar);
}
function restrict(a,b,rozmiar){
	if (x > a && x < (a + rozmiar)){
		x = a - size;
	}
	if (y > b && y < (b + rozmiar)){
		y = b - size;
	}
	console.log(b);
}
