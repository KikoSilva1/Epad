/* =============================================
   FICHEIRO JAVASCRIPT - Aqui controlamos o COMPORTAMENTO
   O JS "escuta" ações do utilizador (cliques, escrita, etc.)
   e reage alterando o HTML/CSS em tempo real.
   ============================================= */

// "querySelector" / "getElementById" servem para IR BUSCAR um elemento do HTML
// e guardá-lo numa variável, para depois podermos trabalhar com ele.


/* ---------------------------------------------
   EXEMPLO 1: Contador de cliques
--------------------------------------------- */

// Vamos buscar o botão e o elemento onde mostramos o número
const botaoContador = document.getElementById("botao-contador");
const numeroCliques = document.getElementById("numero-cliques");

// Variável que guarda o número de cliques (começa em 0)
let contador = 0;

// "addEventListener" diz ao browser: "quando isto acontecer, corre esta função"
botaoContador.addEventListener("click", function () {
  contador = contador + 1;              // soma 1 ao contador
  numeroCliques.textContent = contador; // atualiza o texto na página
});


/* ---------------------------------------------
   EXEMPLO 2: Mudar a cor de fundo da página
--------------------------------------------- */

const botaoAzul = document.getElementById("botao-cor-azul");
const botaoVerde = document.getElementById("botao-cor-verde");
const botaoReset = document.getElementById("botao-cor-reset");

// "classList.add/remove" adiciona ou remove uma classe CSS do elemento
botaoAzul.addEventListener("click", function () {
  document.body.classList.remove("fundo-verde");
  document.body.classList.add("fundo-azul");
});

botaoVerde.addEventListener("click", function () {
  document.body.classList.remove("fundo-azul");
  document.body.classList.add("fundo-verde");
});

botaoReset.addEventListener("click", function () {
  document.body.classList.remove("fundo-azul", "fundo-verde");
});


/* ---------------------------------------------
   EXEMPLO 3: Mostrar / Esconder mensagem
--------------------------------------------- */

const botaoToggle = document.getElementById("botao-toggle");
const mensagemEscondida = document.getElementById("mensagem-escondida");

botaoToggle.addEventListener("click", function () {
  // "toggle" liga/desliga a classe: se está presente remove-a, se não está adiciona-a
  mensagemEscondida.classList.toggle("escondido");
});


/* ---------------------------------------------
   EXEMPLO 4: Campo de texto em tempo real
--------------------------------------------- */

const campoNome = document.getElementById("campo-nome");
const nomeMostrado = document.getElementById("nome-mostrado");

// O evento "input" dispara sempre que o utilizador escreve/apaga algo no campo
campoNome.addEventListener("input", function () {
  // "event.target.value" é o texto que está atualmente no campo
  const textoEscrito = campoNome.value;

  // Se o campo estiver vazio, voltamos a mostrar "visitante"
  nomeMostrado.textContent = textoEscrito === "" ? "visitante" : textoEscrito;
});


/* ---------------------------------------------
   IDEIAS PARA EXPERIMENTAR (desafios para os alunos):
   1. Criar um botão que muda o tamanho do texto do título.
   2. Criar um botão "modo escuro" que troca as cores da página.
   3. Fazer o contador nunca descer abaixo de 0 (adicionar um botão "-1").
   4. Mudar a cor da caixa quando se clica nela (usar addEventListener no próprio elemento .caixa).
--------------------------------------------- */
