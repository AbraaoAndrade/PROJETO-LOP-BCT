//VARIAVEIS TELAS
var tela = 0

//VARIAVEIS CANVAS
var xc = 600, yc = 250;

//VARIAVEIS PERSONAGENS
var xp = 60, yp = yc - 70, lxp = 20,lyp = 40;

//VARIAVEIS INIMIGOS
var qt = 5; 
var xi = [],yi = [] ,lxi = [] ,lyi = [];
var ivel = 4
  //colisao inimigo/personagem
var hit = false;

//VARIAVEIS PONTOS
var pontosparamostrar = 0
var pontos = 0
var highscore = 0

//VARIAVEIS NIVEL
var nivel = 0

//VARIAVEIS BONUS
var tbonus = 0
var xb = xc +20, yb = 120;
var bvel = 0
var bonus = false
var altb = false
var bprob = false

//VARIAVEIS MOVIMENTO PULO
var pulo = false
var puloy = 0
var contFrames = 0
var o = 0
var u = 0


function setup() {
  frameRate(30);
  createCanvas(xc ,yc);
  for ( i = 0; i < qt; i++) { //criando as primeiras coordenadas dos inimigos
    xi[i] = xc + (i*200);
    yi[i] = 185
  	lyi[i] = 35
  	lxi[i] = 35

  }

}

function draw() {
  //TELA DE INICIO
  if(tela == 0){
    background(0)
    //HIGH SCORE
    if(pontosparamostrar>highscore){
      highscore = pontosparamostrar
    }
    //TEXTOS DA TELA DE INICIO
    textSize(30);
    fill("white");
    textAlign(CENTER);
    text("PARA JOGAR APERTE W", xc/2, yc/2);
    textSize(15)
    text("HIGH SCORE : "+highscore, xc/2, (yc/2)+20)

    //BOTAO PARA INICIAR O JOGO
    if(keyIsDown(87)){
      tela = 1
    }
  }

  //TELA DE REINICIAR VARIAVEIS (para casos de recomeçar)
  if(tela == 1){
  //VARIAVEIS PERSONAGENS
  xp = 60, yp = yc - 70, lxp = 20,lyp = 40;

  //VARIAVEIS INIMIGOS
  qt = 5; 
  xi = [],yi = [] ,lxi = [] ,lyi = [];
  ivel = 4
    //colisao inimigo/personagem
  hit = false;

  //VARIAVEIS PONTOS
  pontosparamostrar = 0
  pontos = 0

  //VARIAVEIS NIVEL
  nivel = 0

  //VARIAVEIS BONUS
  tbonus = 0
  xb = xc +20, yb = 120;
  bvel = 0
  bonus = false
  altb = false
  bprob = false

  //VARIAVEIS MOVIMENTO PULO
  pulo = false
  puloy = 0
  contFrames = 0
  o = 0
  u = 0


  for ( i = 0; i < qt; i++) { 
		xi[i] = xc + (i*200);
		yi[i] = 185
  		lyi[i] = 35
  		lxi[i] = 35

	}
  //IR PARA TELA DE JOGO
  tela = 2
  }

  //TELA DE JOGO
  if(tela == 2){
    background(0); 


    //CONSTROI OS PRIMEIROS INIMIGOS
    for ( i = 0; i < qt; i++) {
      fill("red");
      xi[i] = xi[i] - ivel;
      
      rect(xi[i],yi[i],lxi[i],lyi[i]); 
    }
      //CONSTROI OS PROXIMOS INIMIGOS(c/ caracteristicas diferentes/QND ELES ATRAVESSAM O LIMITE ESQUERDO DO CANVAS)
    if(xi[u]<-30){
      //SELECIONANDO QUAL INIMIGO ATRAVESSOU O LIMITE DO CANVAS
      if(u == 0){
        xi[u] = random(lxi[u]+lxp+35,xc) + xi[4]
        if(random(0,10)>5){
        	yi[u] = 195
        	lyi[u] = 25
        	lxi[u] = 25
        }else{
        	yi[u] = 185
        	lyi[u] = 35
        	lxi[u] = 35
        }
      }
      if(u == 1){
        xi[u] = random(lxi[u]+lxp+35,xc) + xi[0]
        if(random(0,10)>5){
        	yi[u] = 195
        	lyi[u] = 25
        	lxi[u] = 25
        }else{
        	yi[u] = 185
        	lyi[u] = 35
        	lxi[u] = 35
        }
      }
      if(u == 2){
        xi[u] = random(lxi[u]+lxp+35,xc) + xi[1]
        if(random(0,10)>5){
        	yi[u] = 195
        	lyi[u] = 25
        	lxi[u] = 25
        }else{
        	yi[u] = 185
        	lyi[u] = 35
        	lxi[u] = 35
        }
      }
      if(u == 3){
        xi[u] = random(lxi[u]+lxp+35,xc) + xi[2]
        if(random(0,10)>5){
        	yi[u] = 195
        	lyi[u] = 25
        	lxi[u] = 25
        }else{
        	yi[u] = 185
        	lyi[u] = 35
        	lxi[u] = 35
        }
      }
      if(u == 4){
        xi[u] = random(lxi[u]+lxp+35,xc) + xi[3]
        if(random(0,10)>5){
        	yi[u] = 195
        	lyi[u] = 25
        	lxi[u] = 25
        }else{
        	yi[u] = 185
        	lyi[u] = 35
        	lxi[u] = 35
        }
      }

      u++ 
      if(u==qt){
        u = 0
      }
    }


    //PONTOS
    textSize(25);
    fill("white");
    textAlign(CENTER);
    text("score: "+pontosparamostrar, xc/2, 26);
    pontosparamostrar++
    pontos++
    if(pontos>500){ //para aumentar a dificuldade e mudar o nivel
      ivel+=1
      pontos = 0
      nivel+=1
    }
    //NIVEL
    fill("blue");
    rect(10,10,30,30)
    textSize(25);
    fill("white");
    textAlign(LEFT);
    text(nivel, 19, 34);
    if(nivel == 6){ //se atingir o nivel 6 ganho o jogo
      tela = 4
    }

    //MOVIMENTO PULO
    if(keyIsDown(87) && pulo === false && !altb){ //tecla "W"(funciona apenas fora do bonus)
      console.log("pulou")
      pulo = true
      contFrames = 0
    }
    if (pulo && !altb) {  //dependendo da velocidade a parabola é diferente
      contFrames++; 
      if(ivel == 4){
        puloy = 1*(contFrames)*(contFrames - 19.49358869);
      }
      if(ivel == 5){
        puloy = 1.2*(contFrames)*(contFrames - 17.79513042);
      }
      
      if(ivel == 6){
        puloy = 2*(contFrames)*(contFrames - 13.78404875);
      }
      if(ivel == 7){
        puloy = 2.4*(contFrames)*(contFrames - 12.58305739211792);
      }
      if(ivel == 8){
        puloy = 3.3*(contFrames)*(contFrames - 10.7308673997732);
      }
      if(ivel == 9){
        puloy = 4*(contFrames)*(contFrames - 9.746794344808964);
      }
      
      if (puloy > 0) { //para que o objeto não caia e possibilite um novo pulo
        pulo = false;
        puloy = 0;    
      }
    }


    //COLISAO INIMIGO/PERSONAGEM
    hit = collideRectRect(xi[o], yi[o], lxi[o], lyi[o], xp, yp+puloy, lxp, lyp);
    if(hit){
      tela = 3  //se colidir vai para tela de game over
    }
    if(xi[o]+lxi[o]<xp && o<qt){  //para checar o inimigo que ainda nao passou pelo personagem
      o++
    }
    if(o == qt){
      o = 0
    }
     

    //BONUS
    fill("green")
      //DESENHA O BONUS
    ellipse(xb - bvel, yb, 10, 10)
    if(random(0,1000)>999 && !altb){ //probabilidade de gerar um bonus
    	bprob = true
    }
    if(bprob){  //movimenta o bonus
    	bvel = bvel + 7
    }
    if(xb - bvel < -10){ //se bonus n for utilizado ele volta para o ponto inicial 
    	bvel = 0
    	bprob = false
    }
      //COLISAO BONUS/PERSONAGEM
    bonus = collideRectRect(xb - bvel, yb, 10, 10, xp, yp+puloy, lxp, lyp);
    if(bonus){
      fill("green")
      yp = yb
      puloy = 0
      altb = true
    }
    if(altb){ //tempo de uso do bonus
    	tbonus++
    	textSize(15);
    	if(tbonus<30){
    		fill("white");
    	}else{ //alerta para tempo acambando
    		fill("red")
    	}
    	textAlign(CENTER);
    	text("time : "+tbonus, xc/2, yc/2); //mostra o tempo de uso do bonus

    }
    if(keyIsDown(65) && altb ){ //tecla A(para parar a utilização do bonus por botao)
      	yp = 180
      	tbonus = 0
      	bprob = false
      	bvel = 0
    	pulo = false
      	altb = false
      	
    }
    if(tbonus > 60 && altb ){//para parar a utilização do bonus por tempo
      	yp = 180
      	tbonus = 0
      	bprob = false
      	bvel = 0
    	pulo = false
      	altb = false
      	
    }

    //DESENHA PERSONAGEM
    fill("white")
    rect(xp, yp+puloy, lxp, lyp)

  }

  //TELA DE GAME OVER
  if(tela == 3){
    //TEXTOS DA TELA DE INICIO
    textSize(50);
    fill("white");
    textAlign(CENTER);
    text("GAME OVER", xc/2, yc/2);
    textSize(15);
    text("aperte A para jogar novamente", xc/2, (yc/2)+20)

    //BOTAO PARA VOLTAR PARA TELA DE INICIO
    if(keyIsDown(65)){
      tela = 0
    }
  }
  //TELA DE JOGO ZERADO
  if(tela == 4){
    //TEXTOS DA TELA DE INICIO
    textSize(50);
    fill("white");
    textAlign(CENTER);
    text("JOGO ZERADO", xc/2, yc/2);
    textSize(15);
    text("aperte A para jogar novamente", xc/2, (yc/2)+20)

    //BOTAO PARA VOLTAR PARA TELA DE INICIO
    if(keyIsDown(65)){
      tela = 0
    }
  }
}