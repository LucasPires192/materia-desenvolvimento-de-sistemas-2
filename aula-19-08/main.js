function verificarIdade(idade){
    if(idade >= 18){
        console.log(`Idade ${idade}: Você é maior de idade!`);
    } else {
        console.log(`Idade ${idade}: Você é menor de idade!`);
    }
}

function Calcular(opcao, num1, num2){
    if(opcao === 1){
        console.log(`Resultado da Soma: ${num1} + ${num2} = ${num1 + num2}`);
    } else if(opcao === 2){
        console.log(`Resultado da Subtração: ${num1} - ${num2} = ${num1 - num2}`);
    } else if(opcao === 3){
        console.log(`Resultado da Multiplicação: ${num1} * ${num2} = ${num1 * num2}`);
    } else if(opcao === 4){
        console.log(`Resultado da Divisão: ${num1} / ${num2} = ${num1 / num2}`);
    }else{
        console.log(`A opção ${opcao} é invalida!`);
    }
}

//Testes

verificarIdade(18);
//Resultado: Idade 18: Você é maior de idade!
verificarIdade(26);
//Resultado: Idade 26: Você é maior de idade!
verificarIdade(12);
//Resultado: Idade 12: Você é menor de idade!

Calcular(1, 5, 6); //Soma
//Resultado: Resultado da Soma: 5 + 6 = 11

Calcular(1, 0, 12); //Soma
//Resultado: Resultado da Soma: 0 + 12 = 12

Calcular(2, 12, 15); //Subtração
//Resultado: Resultado da Subtração: 12 - 15 = -3

Calcular(2, 12, 0); //Subtração
//Resultado: Resultado da Subtração: 12 - 0 = 12

Calcular(3, 15, 33); //Multiplicação
//Resultado: Resultado da Multiplicação: 15 * 33 = 495

Calcular(3, 2, 5); //Multiplicação
//Resultado: Resultado da Multiplicação: 2 * 5 = 10

Calcular(4, 5, 15); //Divisão
//Resultado: Resultado da Divisão: 5 / 15 = 0.3333333333333333

Calcular(4, 18, 6); //Divisão
//Resultado: Resultado da Divisão: 18 / 6 = 3

Calcular(5, 2, 3); //Opção Inválida;
//Resultado: A opção 5 é invalida!

Calcular('dasdsa', 56, 99); //Opção Inválida
//Resultado: A opção dasdsa é invalida!