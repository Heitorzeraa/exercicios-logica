//Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
let mensagem = "Boas vindas ";
console.log (mensagem);

//Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
let nome = "Heitor";
console.log (`Olá, ${nome}!`);

//Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .

let nome1 = "Heitor";
alert(`Olá, ${nome}!`);

//Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.

 let pergunta = prompt ("Qual a linguagem de programaçao que voce mais gosta ?")
 console.log (`A minha linguagem preferida é ${linguagemPreferida}!`);

 //Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. 
 //Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". 
 //Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
 
 let valor1 = 3;
 let valor2 = 4;
 let resultado = valor1 + valor2;
 console.log(`A soma de ${valor1} e ${valor2} e igual a ${resultado}`);

//Crie uma variável chamada "valor3" e outra chamada "valor4", atribuindo a elas valores numéricos de sua escolha. 
//Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". 
//Utilize o console.log para mostrar a mensagem "A diferença entre [valor3] e [valor4] é igual a [resultado]." no console.

let valor3 = 6;
let valor4 = 1;
let resultado1 = valor3 + valor4;
console.log(`A subtraçao de ${valor1} e ${valor2} e igual a ${resultado}`);

//Peça ao usuário para inserir sua idade com prompt. 
//Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.

let idade;
idade = prompt ("Insira a sua idade :");
if(idade>= 18){
    alert("Voce e maior de idade ")
}
else{
    alert("Voce nao e maior de idade")
}

//Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.

let numero3;
numero3 = prompt ("Digite um numero");
if (numero3 > 0){
    alert ("O seu numero e positivo")
    
}
else if (numero3==0){
    alert ("O seu numero e zero")
}
else {
    alert ("O seu numero e negativo")
}

//Use um loop while para imprimir os números de 1 a 10 no console.

let contador = 1;
while (contador<=10) {
    alert (contador)
    contador++
}

//Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.

let nota = 8;

if(nota => 7 ){
    alert("Aprovado")
}
else{
    alert("Reprovado")
}

//Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.

let numero4 = Math.random();
console.log (numero4);

//Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.

let numero5 = parseInt(Math.random() * 10 + 1);
console.log (numero5)


//Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.

let numero6 = parseInt(Math.random()* 1000 + 1);
console.log (numero6)


//Peça ao usuário para inserir sua idade com prompt. 
//Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
let idades = 18;
idades = prompt ("Digite a sua idade :");
if(idades=>18){
    console.log ("Voce e maior de idade");
} else {
    console.log ("Voce e menor de idade");
}