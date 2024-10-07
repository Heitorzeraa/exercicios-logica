let titulo = document.querySelector ('h1');
titulo.innerHTML =('hora do desafio')

function verificarconsole(){
    console.log ('O botao foi clicado')
}

function botaoclicado (){
    console.log ('O botao foi clicado')
}

function prompt (){
    let cidade = prompt ('Me fala um nome de uma cidade do Brasil');
    alert (`Estive em ${cidade} e lembrei de voce `);
}

function soma (){
    let numero1 = parseInt(prompt('Digite o primeiro numero'));
    let numero2 = parseInt (prompt('Digite o segundo numero'));
    let resultado = numero1 + numero2 ;
    alert (`A soma dos dois numeros e ${resultado}`)
}

//Criar uma função que exibe "Olá, mundo!" no console.
function olaMundo() {
    console.log ('Ola mundo')
}

olaMundo();

//Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

function nome (nome){
    console.log (`Ola ${nome}`)

}
nome("Heitor");

//Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function numero (numero){
    return numero* 2;
}

let resultadoDobro = numero(7)
console.log(resultadoDobro)

//Criar uma função que recebe três números como parâmetros e retorna a média deles.

function media (numero1, numero2, numero3){
    return (numero1 + numero2 + numero3) / 3;
}

let media1 = media(2, 3, 4);
console.log (media1);

//Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

function maiorNumero (numero, numero8){
     if (numero>numero8){
        console.log('numero1 e maior que o numero2')
        return
    }
    else{
        console.log('numero2 maior que o numero 1')
        return
    }
}

let comparacao = maiorNumero (2, 3);
console.log (comparacao);

//Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

function multiplicacao(numeroMultiplicado){
    return numeroMultiplicado * numeroMultiplicado;
}

let numerozito = multiplicacao (7);
console.log(numerozito);

//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

function calcularImc(altura,peso) {
    return peso / (altura*altura);
    
}

let IMC = calcularImc(1.80, 80);
console.log(IMC);

//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

function calcularFatorial(numero) {
    let fatorial = 1;
    for (let i = n; i> 0; i--){

    }
    console.log(fatorial);
    
}
calcularFatorial(5)

//Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

function calcularDolar(dolar) {
    let cotaçao = 4.80;
    let conversao = dolar * cotaçao;
    console.log (conversao)
}

let dolar1 = dolar(50);
console.log (dolar1); 

//Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

function calcularAreaPerimetro(altura, largura) {
    let area = altura * largura;
    let perimetro = 2 * (comprimento = largura);
    console.log(area);
    console.log (perimetro);
}

let areacomperimetro = calcularAreaPerimetro(180, 200);
console.log (areacomperimetro);

//Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

function calcularAreaPerimetroCircular(raio) {
    let pi = 3.14;
    let area = pi * raio * raio;
    let perimetro = 2 * pi * raio;
    console.log (area);
    console.log (perimetro);

}
let areaDoCirculo = calcularAreaPerimetro (9);
console.log (areaDoCirculo);

//Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

function calcularTabuada(tabuada) {
  let tabuada = 0;
  while (valores < 10){
    valores ++;
    console.log(tabuada*valores);
}
}
let tabuada = calcularTabuada (8);
console.log (tabuada);

//Crie uma lista vazia, com o nome listaGenerica.

let listaGenerica = []

//Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.

let linguagensDeProgramacao =  ["JavaScript", "C", "C++", "Kotlin", "Python" ];

//Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.

linguagensDeProgramacao.push ("Java", "Ruby", "Golang");

//Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.

let nomes = ["Heitor", "Miguel", "Adler"];
console.log(nomes[0]);

//Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.

let nome = ["Melu", "Pedro", "Jao"];
console.log(nome[1]);

//Crie uma lista com 3 nomes e exiba no console apenas o último elemento.

let nomes1 = ["Heitor", "Miguel", "Adler"];
console.log(nome[2]);

//crie uma lista com 6 nomes do xdf e exiba no console apenas o nome do Adler que eh aniversario dele hoje 04/10/2024 e meu nome pq eu sou zika

let nomess = ["Adler", "Cauan", "Heitor", "Joao", "Miguel", "Pedro"];
console.log (nomess[0,2])



