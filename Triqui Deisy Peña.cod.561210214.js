//Programa js TRIQUI para consola (unicamente) by Deisy Pena codigo 561210214

/*Las "fichas " del tablero seran:
0 = Vacio
1 = X
2 = O 
*/

// en el siguiente tablero se podran ubicar las fichas necesarias (manualmente)
var tablero = 
[
	[0,0,0],
	[1,1,1], // ejemplo 3 X ganando
	[0,0,0]
]


//Condiciones para que gane "X"

if(tablero[0][0] == 1 && tablero[0][1] == 1 && tablero[0][2] == 1)
{
	console.log("TRIQUI!!... Gana X");
}else if(tablero[1][0] == 1 && tablero[1][1] == 1 && tablero[1][2] == 1)
	{
		console.log("TRIQUI!!... Gana X");
	}else if(tablero[2][0] == 1 && tablero[2][1] == 1 && tablero[2][2] == 1)
	{
		console.log("TRIQUI!!... Gana X");
	}else if(tablero[0][0] == 1 && tablero[1][1] == 1 && tablero[2][2] == 1)
	{
		console.log("TRIQUI!!... Gana X");
	}else if(tablero[0][2] == 1 && tablero[1][1] == 1 && tablero[2][0] == 1)
	{
		console.log("TRIQUI!!... Gana X!");
	}else 
	//Condiciones para que gane el circulo "O"

	if(tablero[0][0] == 2 && tablero[0][1] == 2 && tablero[0][2] == 2)
	{
		console.log("TRIQUI!!... Gana O!");
	}else if(tablero[1][0] == 2 && tablero[1][1] == 2 && tablero[1][2] == 2)
	{
		console.log("TRIQUI!!... Gana O!");
	}else if(tablero[2][0] == 2 && tablero[2][1] == 2 && tablero[2][2] == 2)
	{
		console.log("TRIQUI!!... Gana O!");
	}else if(tablero[0][0] == 2 && tablero[1][1] == 2 && tablero[2][2] == 2)
	{
		console.log("TRIQUI!!... Gana O!");
	}else if(tablero[0][2] == 2 && tablero[1][1] == 2 && tablero[2][0] == 2)
	{
		console.log("TRIQUI!!... Gana O!");
	}else
	{
		alert("Empate"); // Si no se cummplen ninguna de las condiciones.. habra un empate.
	}

