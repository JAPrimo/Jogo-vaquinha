//código do carro
let xCarros = [600, 600, 600, 600, 600, 600, 250, 250, 250, 250, 250, 250];
let yCarros = [40, 96, 150, 210, 270, 318, 40, 96, 150, 210, 270, 318];
let velocidadeCarros = [4.5, 3.5, 2.2, 4.0, 3.0, 2.2, 4.5, 3.5, 2.2, 4.0, 3.0, 2.2];
let comprimentoCarros = 50;
let alturaCarros = 40;


function mostraCarro(){
  for ( let i = 0; i < imagemCarros.length; i ++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarros, alturaCarros);
  }
  
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i ++){
    xCarros[i] -= velocidadeCarros[i];
  }

}

function posicaoInicialCarro(){
  for (let i = 0; i < imagemCarros.length; i ++){
  if (passouTodaATela(xCarros[i])){
    xCarros[i] = 600;
    }
  }
}

function passouTodaATela(xCarro){
  return xCarro < -50;
}

