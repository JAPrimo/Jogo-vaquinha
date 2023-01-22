//variável movimento da vaquinha
let xAtor = 100;
let yAtor = 366;
let colisao = false;
let pontos = 0;

function mostraAtor(){
  image(ator, xAtor, yAtor, 30, 30);
}


function movimentoAtor(){
 if (keyIsDown(UP_ARROW)) {
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (atorMenor()){
    yAtor += 3;
    }
  }
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i ++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarros, alturaCarros, xAtor, yAtor, 15)
    if (colisao){
      voltaPosisãoImicialDoAtor();
      sonDaColisao.play();
      if (pontosMaiorQueZero()){
        pontos -= 1;
      }
    }
  }
}

function voltaPosisãoImicialDoAtor(){
  yAtor = 366;
}

function meusPontos(){
  textAlign(CENTER);
  textSize(25);
  text(pontos, 250, 27);
  fill(0, 0, 205);
}

function marcarPontos(){
  if (yAtor < 15){
  pontos += 1;
    sonDoPonto.play();
  voltaPosisãoImicialDoAtor();
  }
}

function pontosMaiorQueZero(){
  return pontos > 0 ;
}

function atorMenor(){
  return yAtor < 366;
}







