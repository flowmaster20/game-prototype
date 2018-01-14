function square(a,b,rozmiar){
	rect(a,b,rozmiar);
	restrict(a,b);
}
function restrict(a,b,rozmiar){
	view(x,y);
	if (x > a && x < (a + rozmiar)&&y > b && y < (b + rozmiar)){
		x = a - size;
		y = b - size;
	}
}