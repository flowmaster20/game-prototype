//var rozmiar = 5;
function square(a,b,rozmiar){
this.show = function(){
	rect(a,b,rozmiar,rozmiar);
}

var sposition = createVector(a,b);
	console.log(sposition.toString());
	user.restrict(sposition,rozmiar);
}
