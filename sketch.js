

function setup() {
  createCanvas(500, 400);
  sonDaTrilha.loop ();
}

function draw() {
  background(imagenDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentoAtor();
  posicaoInicialCarro();
  verificaColisao();
  meusPontos();
  marcarPontos();
}



