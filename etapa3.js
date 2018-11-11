// ETAPA 3

//VARIAVEIS CANVAS
var x = 600, y = 400;

//VARIAVEIS MOVIMENTO SIMPLES(esquerda/direita)
var posx = 50;
var posy = 340;

function setup(){
	createCanvas(x,y);

}
function draw(){
	background(0);

	//MOVIMENTO SIMPLES(esquerda/direita)
	if (keyIsDown(65)){ //tecla "A"
    	posx-=5;

    	if(posx<-25){ //limite esquerdo do canvas
  			posx=x+25;
  		}
	}
	
  	if (keyIsDown(68)){ //tecla "D"
    	posx+=5

    	if(posx>x+25){ //limite direito do canvas
  			posx=-25;
  		}
  	}

  	//CENÁRIO
	fill("gray")
	rect(-1, 350, 601, 80);

	//PERSONAGEM
	fill(700)
  	ellipse(posx,posy,50,50)
}

