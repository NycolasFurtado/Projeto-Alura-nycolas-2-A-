//var: Escopo global ou de função, re-declarável, hoisted, mas menos recomendável nas versões mais modernas de JavaScript devido a seu comportamento confuso.
//let: Escopo de bloco, não re-declarável no mesmo escopo, hoisted (mas não acessível antes da declaração), e recomendado para variáveis que podem mudar.
//const: Escopo de bloco, não re-declarável, usado para constantes (mas objetos/arrays podem ser mutáveis), e recomendado para valores que não devem ser alterados.


// Seleciona o botão e o campo de entrada usando seus IDs
const botao = document.getElementById("calcular");
const numeroInput = document.getElementById("numero");
const resultado = document.getElementById("resultado");

// Adiciona um evento de clique ao botão
botao.addEventListener("click", function() {
    // Pega o valor do campo de entrada e converte para número
    let numero = Number(numeroInput.value);

    // Calcula o dobro do número
    let dobro = numero * 2;

    // Exibe o resultado no parágrafo
    resultado.textContent = "O dobro de " + numero + " é " + dobro + ".";
});
