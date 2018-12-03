//VARIAVEIS CANVAS 
var x = 600, y = 400;

//VARIAVEIS MOVIMENTO SIMPLES (esquerda e direita)
var posx = 50;
var posy = 340;

//VARIAVEIS MOVIMENTO PULO
var pulo = false;
var puloy = 0;
var contFrames = 0;

//VARIAVEIS TIRO
var tirox, tiroy;
var tiro = false;
  //COLISAO TIRO/BLOCO
var ponto = 0;

//VARIAVEIS BLOCO
var blocox = 600, blocoy = 320;
var lx = 50, ly = 50;

//VARIAVEIS VIDA
var bateu=0;
  //COLISAO PERSONAGEM/BLOCO
var colisao = false;

//VARIAVEIS NIVEL
var valorn = 5, nivel = 0;

function setup(){
  createCanvas(x,y);

}
function keyPressed(){

  //TIRO
  if(keyCode === 13 && tiro === false){ //tecla "ENTER"
    tiro = true;
    tirox = posx
    tiroy = posy+puloy
  }
}
function draw(){
  background(0)

  //DESENHA CHAO
  fill("gray")
  rect(-1, 350, 601, 80);

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

  //MOVIMENTO PULO
  if(keyIsDown(87) && pulo === false){ //tecla "W"
    pulo = true
    contFrames = 0
  }
  if (pulo) {
    contFrames++; 
    puloy = 0.5*(contFrames)*(contFrames - 39);
    
    if (puloy > 0) { //para que o objeto não caia e possibilite um novo pulo
      pulo = false;
      puloy = 0;    
    }
  }

  //TIRO
  if (tiro){
    tirox = tirox +30 //movimento tiro
    ellipse(tirox,tiroy,10,10)

    if(tirox>x+100){
      tiro = false //possibilita um novo disparo
    }
  }
    //COLISAO TIRO/BLOCO
  if(dist(blocox+25,blocoy+25,tirox,tiroy) <= 30){
    lx = ly = blocoy = 0  //faz com que o bloco desapareça com a colisao
    ponto+=1  //contador de pontos
  }
  if(lx == 0 ){ //retoma as dimensoes e a posiçao do bloco quando ele atravessa o canvas após a colisão
    if(blocox<-50){
      lx = ly = 50
      blocoy = 320
    }
  }

  //NIVEL
  if(ponto == 5){
    ponto = 0
    valorn+=2 ///aumenta a velocidade do bloco conforme numero de pontos
    nivel+=1  //contador de nivel
  }

  //TEXTO VIDA/PONTOS/NIVEL
  textSize(25);
  fill(135,206,235);
  text("vida: ", 25, 26);
  text("pontos: " + ponto, 400, 26); //aumenta os pontos conforme colisao tiro/bloco
  text("nivel: " + nivel, 250, 26); // aumenta o nivel conforme numero de pontos

  //VIDA
    //COLISAO PERSONAGEM/BLOCO
  if(dist(blocox+25,blocoy+25,posx,posy+puloy) <= 50 && !colisao){
    colisao = true
    bateu = bateu +34 // para diminuir o retngulo vida
  }
  if(colisao){
    if(blocox<posx-100){
      colisao = false
    }
  }
    //DESENHA RETANGULO VIDA
  noFill();
  stroke(0, 0, 255);
  rect(25, 30, 170, 13);

  fill("white");
  rect(25, 30, 170 - bateu, 13);  //diminui a vida conforme colisao personagem/bloco

  //REINICIA O JOGO
    //PELO NIVEL
  if(nivel == 5){
    valorn = 5
    ponto = 0
    nivel = 0
    bateu = 0
  }
    //PELA VIDA
  if(bateu == 170){
    bateu = 0
    ponto = 0
    nivel = 0
    valorn = 0
  }

  //DESENHA BLOCO
  fill(700)
  rect(blocox, blocoy, lx, ly);
    //MOVIMENTO BLOCO
  blocox-=valorn
  if(blocox<-70){
    blocox = 600
  }

  //DESENHA PERSONAGEM
  fill(700)
  ellipse(posx,posy+puloy,50,50)
}
       