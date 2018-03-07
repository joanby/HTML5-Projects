function displayName()
{
	document.write("Juan Gabriel Gomila");
}

function sayHello()
{
	document.write("Hola, qué tal? ^_^");
}

function displayScore()
{
	var playerScore = 2018;
	document.write("<p>La puntuación del jugador es: " + playerScore + "</p>");
}


/*
	FUNCIONES PARAMETRIZADAS
*/


function displayPlayerScore(thePlayerScore)
{
	thePlayerScore += 100; //thePlayerScore = thePlayerScore + 100
	document.write("<b>" + thePlayerScore + "</b><br/>");
}

function addTwoNumbers(x, y){
	var addition = x + y;
	document.write("<b>" + addition + "</b><br/>");
	return(addition);
}
