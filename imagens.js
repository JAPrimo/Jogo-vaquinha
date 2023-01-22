//variáveis das imagens
let imagenDaEstrada;
let ator;
let carro1;
let carro2;
let carro3;

function preload(){
  imagenDaEstrada = loadImage("imagens/estrada.png");
  ator = loadImage("imagens/ator-1.png");
  carro1 = loadImage("imagens/carro-1.png");
  carro2 = loadImage("imagens/carro-2.png");
  carro3 = loadImage("imagens/carro-3.png");
  imagemCarros = [carro1, carro2, carro3, carro1, carro2, carro3, carro3, carro1, carro2, carro2, carro3, carro1];
  
  // sons do jogo
  sonDaTrilha = loadSound("sons/trilha.mp3");
  sonDoPonto = loadSound("sons/pontos.wav");
  sonDaColisao = loadSound("sons/colidiu.mp3");
}