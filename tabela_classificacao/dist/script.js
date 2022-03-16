var americaMG = {
  posicao: "1",
  nome: "América-MG",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var athleticoPR = {
  posicao: "2",
  nome: "Athletico-PR",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var atleticoGO = {
  posicao: "3",
  nome: "Atlético-GO",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var atleticoMG = {
  posicao: "4",
  nome: "Atlético-MG",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var avai = {
  posicao:"5", 
  nome: "Avaí", 
  vitorias: 0, 
  empates: 0, 
  derrotas: 0, 
  pontos: 0 
};
var botafogo = {
  posicao: "6",
  nome: "Botafogo",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var cearaSC = {
  posicao: "7",
  nome: "Ceará SC",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var cotinthians = {
  posicao: "8",
  nome: "Corinthians",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var coritiba = {
  posicao: "9",
  nome: "Cotiriba",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var cuiaba = {
  posicao: "10",
  nome: "Cuiabá",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var flamengo = {
  posicao: "11",
  nome: "Flamengo",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var fluminence = {
  posicao: "12",
  nome: "Fluminence",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var fortaleza = {
  posicao: "13",
  nome: "Fortaleza",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var goias = {
  posicao: "14", 
  nome: "Goiás", 
  vitorias: 0, 
  empates: 0, 
  derrotas: 0, 
  pontos: 0 
};
var internacional = {
  posicao: "15",
  nome: "Internacional",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var juventude = {
  posicao: "16",
  nome: "Juventude",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var palmeiras = {
  posicao: "17",
  nome: "Palmeiras",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var bragantino = {
  posicao: "18",
  nome: "Bragantino",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var santos = {
  posicao: "19",
  nome: "Santos",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var saoPaulo = {
  posicao: "20",
  nome: "São Paulo",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};

function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

var jogadores = [
  americaMG,
  athleticoPR,
  atleticoGO,
  atleticoMG,
  avai,
  botafogo,
  cearaSC,
  cotinthians,
  coritiba,
  cuiaba,
  flamengo,
  fluminence,
  fortaleza,
  goias,
  internacional,
  juventude,
  palmeiras,
  bragantino,
  santos,
  saoPaulo
];

function exibeJogadores(jogadores) {
  var elemento = "";
  for (var indice = 0; indice < jogadores.length; indice++) {
    elemento += "<tr><td>" + jogadores[indice].posicao + "</td>";
    elemento += "<td>" + jogadores[indice].nome + "</td>";
    elemento += "<td>" + jogadores[indice].vitorias + "</td>";
    elemento += "<td>" + jogadores[indice].empates + "</td>";
    elemento += "<td>" + jogadores[indice].derrotas + "</td>";
    elemento += "<td>" + jogadores[indice].pontos + "</td>";
    elemento +="<td><button onClick='adicionarVitoria("+ indice +")'>Vitória</button></td>";
    elemento += "<td><button onClick='adicionarEmpate("+ indice +")'>Empate</button></td>";
    elemento +="<td><button onClick='adicionarDerrota("+ indice +")'>Derrota</button></td>";
    elemento += "</tr>";
  }
  
  var tabelaJogadores = document.getElementById("tabelaJogadores")
  tabelaJogadores.innerHTML = elemento
}

function adicionarVitoria(indice){
  var jogador = jogadores[indice]
  jogador.vitorias++
  jogador.pontos = calculaPontos(jogador)
  exibeJogadores(jogadores)
}

function adicionarEmpate(indice){
  var jogador = jogadores[indice]
  jogador.empates++
  jogador.pontos = calculaPontos(jogador)
  exibeJogadores(jogadores)
}

function adicionarDerrota(indice){
  var jogador = jogadores[indice]
  jogador.derrotas++
  exibeJogadores(jogadores)
}

exibeJogadores(jogadores)