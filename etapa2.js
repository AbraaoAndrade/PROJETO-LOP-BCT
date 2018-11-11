//variaveis movimento
var posx = 100, posy = 200;

function setup(){
	createCanvas(400,400)
}
function draw(){
	background(0)

	//movimento simples
	if(keyIsDown(65)){	//tecla A
		posx-=5
		if(posx<0){		//limite do canvas esquerdo
			posx = 400
		}
	}
	if(keyIsDown(68)){	//tecla D
		posx+=5
		if(posx>400){	//limite do canvas direito
			posx = 0
		}
	}
	if(keyIsDown(83)){	//tecla S
		posy+=5
		if(posy>400){		//limite do canvas inferior
			posy = 0
		}
	}
	if(keyIsDown(87)){	//tecla W
		posy-=5
		if(posy<0){	//limite do canvas superior
			posy = 400
		}
	}

	ellipse(posx,posy,50,50)
	rect(275,175,50,50)
}