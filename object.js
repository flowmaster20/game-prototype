//var rozmiar = 5;
function square(a,b,rozmiar){
	rect(a,b,rozmiar,rozmiar);

var sposition = createVector(a,b);
	console.log(sposition.toString());
	user.restrict(sposition,rozmiar);
}
