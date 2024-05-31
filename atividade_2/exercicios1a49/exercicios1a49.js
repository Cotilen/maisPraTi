var prompt = require("prompt-sync")()

//Falta Fazer o 18, 19

function exercicio_1() {
    console.log("Vamos calcular quanto tempo de vida você perdeu?");
    console.log();

    var cigarros = parseInt(prompt("Quantos cigarros você fuma por dia? "))
    console.log();
    var anos = parseInt(prompt("Há quantos anos você fuma? "))

    if (isNaN(anos) && isNaN(cigarros)) {
        console.log("\nPor favor, digite numeros válidos");
    } else {
        var dias = anos * 365

        var diasPerdidos = parseInt(((((cigarros * dias) * 10) / 6) / 24))

        console.log(`\nVocê já perdeu ${diasPerdidos} dias de vida por causa do cigarro!`);
    }

}

function exercicio_2() {
    var velocidade = parseInt(prompt("Qual foi a velocidade do carro em Km/h? "))

    if (isNaN(velocidade)) {
        console.log("\n Por favor, digite um número válido.");
    } else {
        var multa = velocidade - 80

        if (multa > 0) {
            console.log(`\nVocê foi multado em ${multa * 5} reais!`);
        } else {
            console.log("\nVocê não foi multado!");
        }
    }
}

function exercicio_3() {
    var distancia = parseInt(prompt("Quantos quilômetros você deseja percorrer? "))

    if (isNaN(distancia)) {
        console.log("\n Por favor, digite um número válido.");
    } else {

        if (distancia > 200) {
            var preco = distancia * 0.45
        } else {
            var preco = distancia * 0.50
        }

        console.log(`\nO preço da passagem será de ${preco} reais!`);

    }
}

function exercicio_4() {
    var reta1 = parseInt(prompt("Por favor, digite o tamanho da primeira reta: "))
    var reta2 = parseInt(prompt("Por favor, digite o tamanho da segunda reta: "))
    var reta3 = parseInt(prompt("Por favor, digite o tamanho da terceira reta: "))

    if (isNaN(reta1) || isNaN(reta2) || isNaN(reta3)) {
        console.log("Por favor, digite valores válidos");
    } else {

        if (reta1 + reta2 > reta3 && reta1 + reta3 > reta2 && reta2 + reta3 > reta1)
            console.log("É possível formar um triângulo com estas medidas");
        else
            console.log("Não é possível formar um triângulo com estas medidas");
    }
}

//Mexer no segundo
function exercicio_5() {
    console.log(`Movimentos: \n 1)Pedra; \n 2)Papel; \n 3)Tesoura;`);
    var primeiroJogador = parseInt(prompt("Por favor, digite o número correspondente ao movimento do primeiro jogador: "))
    console.log();
    var segundoJogador = parseInt(prompt("Por favor, digite o número correspondente ao movimento do segundo jogador: "))

    if (isNaN(primeiroJogador) || isNaN(segundoJogador) || primeiroJogador > 3 || segundoJogador > 3 || primeiroJogador < 1 || segundoJogador < 1) {
        console.log("\n Por favor, digite números válidos.");
    } else {
        if (primeiroJogador == 1 && segundoJogador == 2) {
            console.log("\n O segundo jogador ganhou!!");
        } else if (primeiroJogador == 1 && segundoJogador == 3) {
            console.log("\n O primeiro jogador ganhou!!");
        } else if (primeiroJogador == 2 && segundoJogador == 1) {
            console.log("\n O primeiro jogador ganhou!!");
        } else if (primeiroJogador == 2 && segundoJogador == 3) {
            console.log("\n O segundo jogador ganhou!!");
        } else if (primeiroJogador == 3 && segundoJogador == 1) {
            console.log("\n O segundo jogador ganhou!!");
        } else if (primeiroJogador == 3 && segundoJogador == 2) {
            console.log("\n O primeiro jogador ganhou!!");
        } else {
            console.log("\nEmpate!!");
        }
    }
}

function exercicio_6() {
    var tentativa
    var valor = parseInt((Math.random() * 10 / 2)) + 1
    console.log(valor);

    do {
        tentativa = parseInt(prompt("Tente acertar o valor sorteado (1 a 5): "))

        if (isNaN(tentativa) || tentativa < 0 || tentativa > 5) {
            console.log("\nPor favor, digite um número válido.");
        } else if (tentativa != valor) {
            console.log("\nVocê errou! Tente novamente!");
        }

    } while (tentativa !== valor) {
        console.log("\nParabéns, você acertou!");
    }
}

function exercicio_7() {
    var preco = 0

    var tipoCarro = prompt("Qual o tipo de carro alugado (1-Popular 2-Luxo)? ")
    var dias = parseInt(prompt("Quantos dias de aluguel? "))
    var km = parseInt(prompt("Quantos Km foram percorridos? "))

    if (isNaN(tipoCarro) || isNaN(dias) || isNaN(km) || tipoCarro > 2 || tipoCarro < 1) {
        console.log("\n Por favor, digite números válidos!");
    } else {
        if (tipoCarro == 1) {
            preco += 90 * dias

            if (km <= 100) {
                preco += km * 0.20
            } else {
                preco += km * 0.10
            }
        } else {
            preco += 150 * dias

            if (km <= 200) {
                preco += km * 0.30
            } else {
                preco += km * 0.25
            }
        }

        console.log(`\n O preço total a ser pago é ${preco} reais.`);
    }
}

function exercicio_8() {
    var pontos
    var horas = parseInt(prompt("Quantas horas de atividade você teve no mês? "))

    if (isNaN(horas)) {
        console.log("\n Por favor, digite números válidos!");
    } else {
        if (horas <= 10) {
            pontos = horas * 2
        } else if (horas <= 20) {
            pontos = horas * 5
        } else {
            pontos = horas * 10
        }

        console.log(`\nVocê obteve ${pontos} pontos nesse mês, isso equivale a ${pontos * 0.05} reais`);
    }

}

function exercicio_9() {
    var salarioFeminino = 0
    var salarioMasculino = 0
    var continuar = true

    do {
        var sexo = parseInt(prompt("Qual o sexo do funcionario?(1- Masculino, 2- Feminino) "))

        if (isNaN(sexo) || sexo < 1 || sexo > 2) {
            console.log("\nPor favor, digite um número válido.");
        } else {
            var salario = Number(prompt("Qual o salário do funcionario? "))

            if (sexo == 1)
                salarioMasculino += salario
            else
                salarioFeminino += salario

            var pergunta = prompt("Você deseja continuar? Digite sim ou não: ")

            if (pergunta == "sim" || pergunta == "Sim" || pergunta == "SIM") {
                continuar = true
            } else {
                continuar = false
            }

        }

    } while (continuar) {
        console.log(`\nO salário total dos homens é ${salarioMasculino} reais e o salário total das mulheres é ${salarioFeminino} reais.`);
    }
}

function exercicio_10() {
    var somatorio = 0
    var menor = 0
    var media = 0
    var pares = 0
    var contador = 1
    var continuar = true

    do {

        var numero = parseInt(prompt("Por favor, informe o número: "))

        if (isNaN(numero)) {
            console.log("\nPor favor, digite um número válidos!");
        } else {

            somatorio += numero
            media = somatorio / contador

            if (contador == 1) {
                menor = numero
            } else {
                if (numero < menor) {
                    menor = numero
                }
            }

            if (numero % 2 == 0) {
                pares += 1
            }

            var pergunta = prompt("Você deseja continuar? Digite sim ou não: ")

            if (pergunta == "sim" || pergunta == "Sim" || pergunta == "SIM") {
                continuar = true
                contador += 1
            } else {
                continuar = false
            }
        }
    } while (continuar) {
        console.log(`\nO somatório entre todos os valores é ${somatorio}.`);
        console.log(`\nO menor valor digitado é ${menor}.`);
        console.log(`\nA média entre todos os valores é ${media}.`);
        console.log(`\nDesses valores, ${pares} são pares.`);
    }
}

function exercicio_11() {
    const primeiroTermo = Number(prompt('Digite o primeiro termo da PA: '));
    const razao = Number(prompt('Digite a razão da PA: '));

    const quantidadeTermos = 10;

    let somaTermos = 0;

    console.log('Os 10 primeiros termos da PA são:');
    for (let i = 1; i <= quantidadeTermos; i++) {
        const termoAtual = primeiroTermo + (i - 1) * razao;
        console.log(`Termo ${i}: ${termoAtual}`);

        somaTermos += termoAtual;
    }

    console.log(`A soma dos termos da PA é: ${somaTermos}`);
}

function exercicio_12() {
    let fibonacci = 1
    let auxiliar = 0
    let auxiliar2 = 0
    for (let i = 1; i <= 10; i++) {
        console.log("fibonacci: ", fibonacci);
        auxiliar2 = fibonacci
        fibonacci = fibonacci + auxiliar
        auxiliar = auxiliar2
    }

}

function exercicio_13() {
    let fib = []
    let fibonacci = 1
    let auxiliar = 0
    let auxiliar2 = 0
    for (let i = 1; i <= 15; i++) {
        fib.push(fibonacci)
        auxiliar2 = fibonacci
        fibonacci = fibonacci + auxiliar
        auxiliar = auxiliar2
    }
    console.log(fib);
}

function exercicio_14() {
    let nomes = []

    for (let i = 0; i <= 7; i++) {
        let nome = prompt("Digite um nome: ")
        nomes.push(nome)
    }

    console.log(nomes.reverse());
}

function exercicio_15() {
    let numeros = []
    for (let i = 1; i <= 10; i++) {
        let numero = parseInt(prompt("Digite o número: "))

        numeros.push(numero)

    }
    numeros.forEach(result => {
        if (result % 2 == 0) {
            console.log(`O número ${result} é par e está na posição ${numeros.indexOf(result)}`);
        }
    })

}

function exercicio_16() {
    let numeros = []
    let segundoArray = []
    for (let i = 1; i <= 20; i++) {
        let numero = parseInt(Math.random() * 100)
        numeros.push(numero)
    }

    console.log("Array gerado: ", numeros);

    for (let i = 0; i < numeros.length; i++) {
        for (let j = i + 1; j < numeros.length; j++) {
            if (numeros[i] > numeros[j]) {
                let auxiliar = numeros[i]
                numeros[i] = numeros[j]
                numeros[j] = auxiliar
            }
        }
    }

    console.log("Array ordenado: ", numeros);
}

function exercicio_17() {
    let nomes = []
    let idades = []

    for (let i = 1; i <= 9; i++) {
        let nome = prompt("Digite o nome: ")
        let idade = parseInt(prompt("Digite a idade: "))

        nomes.push(nome)
        idades.push(idade)
    }

    for (let i = 0; i < nomes.length; i++) {
        if (idades[i] < 18) {
            console.log(`Nome: ${nomes[i]}, Idade: ${idades[i]}`);
        }
    }
}

function exercicio_18() {
    const funcionario = {
        "nome": "",
        "cargo": "",
        "salario": 0
    }

    let nome = prompt("Digite o nome do funcionário: ")
    let cargo = prompt("Digite o cargo do funcionário: ")
    let salario = Number(prompt("Digite o salário do funcionário: "))

    funcionario.nome = nome
    funcionario.cargo = cargo
    funcionario.salario = salario

    console.log(funcionario);

}

function exercicio_19() {
    const horarios = []
    let contador = 1

    do {
        console.log(`\nCadastre o horário ${contador}`);
        let horas = Number(prompt("Digite as horas: "))
        let minutos = Number(prompt("Digite os minutos: "))
        let segundos = Number(prompt("Digite os segundos: "))

        if (horas < 0 || horas > 23 || minutos < 0 || minutos > 59 || segundos < 0 || segundos > 59 ||
            isNaN(horas) || isNaN(minutos) || isNaN(segundos) || horas.length > 2 || segundos.length > 2 || minutos.length > 2) {
            console.log("\nHorário inválido!");
            console.log("Cadastre novamente: ");
        } else {
            horarios.push(`${horas}:${minutos}:${segundos}`)
            contador++

        }
    }
    while (horarios.length < 5) {
        console.log();
        console.table(horarios);
    }

}
function exercicio_20() {
    const funcionarios = [
        { "nome": "João Silva", "matricula": "001", "salario_bruto": 5000 },
        { "nome": "Maria Oliveira", "matricula": "002", "salario_bruto": 5500 },
        { "nome": "José Santos", "matricula": "003", "salario_bruto": 4800 },
        { "nome": "Ana Pereira", "matricula": "004", "salario_bruto": 5200 },
        { "nome": "Carlos Souza", "matricula": "005", "salario_bruto": 6000 },
        { "nome": "Amanda Costa", "matricula": "006", "salario_bruto": 5300 },
        { "nome": "Felipe Martins", "matricula": "007", "salario_bruto": 4700 },
        { "nome": "Lúcia Almeida", "matricula": "008", "salario_bruto": 5100 },
        { "nome": "Rafael Ferreira", "matricula": "009", "salario_bruto": 5900 },
        { "nome": "Carla Nunes", "matricula": "010", "salario_bruto": 5400 },
        { "nome": "Paulo Mendes", "matricula": "011", "salario_bruto": 5800 },
        { "nome": "Fernanda Lima", "matricula": "012", "salario_bruto": 4900 },
        { "nome": "Gustavo Rocha", "matricula": "013", "salario_bruto": 5700 },
        { "nome": "Camila Costa", "matricula": "014", "salario_bruto": 5200 },
        { "nome": "Antônio Oliveira", "matricula": "015", "salario_bruto": 5400 },
        { "nome": "Isabela Santos", "matricula": "016", "salario_bruto": 4800 },
        { "nome": "Lucas Alves", "matricula": "017", "salario_bruto": 5100 },
        { "nome": "Mariana Lima", "matricula": "018", "salario_bruto": 5300 },
        { "nome": "Pedro Martins", "matricula": "019", "salario_bruto": 5000 },
        { "nome": "Vitória Pereira", "matricula": "020", "salario_bruto": 5600 },
        { "nome": "Renato Silva", "matricula": "021", "salario_bruto": 5200 },
        { "nome": "Juliana Souza", "matricula": "022", "salario_bruto": 5900 },
        { "nome": "Marcelo Costa", "matricula": "023", "salario_bruto": 5500 },
        { "nome": "Larissa Rocha", "matricula": "024", "salario_bruto": 5000 },
        { "nome": "Rodrigo Santos", "matricula": "025", "salario_bruto": 5100 },
        { "nome": "Luana Oliveira", "matricula": "026", "salario_bruto": 5400 },
        { "nome": "Mateus Almeida", "matricula": "027", "salario_bruto": 5800 },
        { "nome": "Gabriela Ferreira", "matricula": "028", "salario_bruto": 4700 },
        { "nome": "Daniel Nunes", "matricula": "029", "salario_bruto": 5300 },
        { "nome": "Aline Mendes", "matricula": "030", "salario_bruto": 5600 },
        { "nome": "Marcos Lima", "matricula": "031", "salario_bruto": 4900 },
        { "nome": "Sandra Rocha", "matricula": "032", "salario_bruto": 5100 },
        { "nome": "Roberto Costa", "matricula": "033", "salario_bruto": 5300 },
        { "nome": "Carolina Santos", "matricula": "034", "salario_bruto": 5400 },
        { "nome": "Leonardo Alves", "matricula": "035", "salario_bruto": 5800 },
        { "nome": "Tatiane Oliveira", "matricula": "036", "salario_bruto": 4700 },
        { "nome": "Luciana Almeida", "matricula": "037", "salario_bruto": 5200 },
        { "nome": "Ricardo Ferreira", "matricula": "038", "salario_bruto": 5900 },
        { "nome": "Natália Nunes", "matricula": "039", "salario_bruto": 5500 },
        { "nome": "Vinícius Mendes", "matricula": "040", "salario_bruto": 5000 },
        { "nome": "Fernando Lima", "matricula": "041", "salario_bruto": 5100 },
        { "nome": "Patrícia Rocha", "matricula": "042", "salario_bruto": 5400 },
        { "nome": "Diego Costa", "matricula": "043", "salario_bruto": 5600 },
        { "nome": "Jéssica Santos", "matricula": "044", "salario_bruto": 4900 },
        { "nome": "Eduardo Alves", "matricula": "045", "salario_bruto": 5800 },
        { "nome": "Roberta Oliveira", "matricula": "046", "salario_bruto": 4700 },
        { "nome": "Marcela Almeida", "matricula": "047", "salario_bruto": 5200 },
        { "nome": "Bruno Ferreira", "matricula": "048", "salario_bruto": 5900 },
        { "nome": "Débora Nunes", "matricula": "049", "salario_bruto": 5500 },
        { "nome": "Anderson Mendes", "matricula": "050", "salario_bruto": 5000 },
        { "nome": "Vanessa Lima", "matricula": "051", "salario_bruto": 5100 },
        { "nome": "Raul Rocha", "matricula": "052", "salario_bruto": 5400 },
        { "nome": "Gabriel Costa", "matricula": "053", "salario_bruto": 5600 },
        { "nome": "Carolina Santos", "matricula": "054", "salario_bruto": 4900 },
        { "nome": "Leandro Alves", "matricula": "055", "salario_bruto": 5800 },
        { "nome": "Tatiane Oliveira", "matricula": "056", "salario_bruto": 4700 },
        { "nome": "Lucas Almeida", "matricula": "057", "salario_bruto": 5200 },
        { "nome": "Bruna Ferreira", "matricula": "058", "salario_bruto": 5900 },
        { "nome": "Gustavo Nunes", "matricula": "059", "salario_bruto": 5500 },
        { "nome": "Amanda Mendes", "matricula": "060", "salario_bruto": 5000 },
        { "nome": "Rafael Lima", "matricula": "061", "salario_bruto": 5100 },
        { "nome": "Patrícia Rocha", "matricula": "062", "salario_bruto": 5400 },
        { "nome": "Diego Costa", "matricula": "063", "salario_bruto": 5600 },
        { "nome": "Jéssica Santos", "matricula": "064", "salario_bruto": 4900 },
        { "nome": "Eduardo Alves", "matricula": "065", "salario_bruto": 5800 },
        { "nome": "Roberta Oliveira", "matricula": "066", "salario_bruto": 4700 },
        { "nome": "Marcela Almeida", "matricula": "067", "salario_bruto": 5200 },
        { "nome": "Bruno Ferreira", "matricula": "068", "salario_bruto": 5900 },
        { "nome": "Débora Nunes", "matricula": "069", "salario_bruto": 5500 },
        { "nome": "Anderson Mendes", "matricula": "070", "salario_bruto": 5000 },
        { "nome": "Vanessa Lima", "matricula": "071", "salario_bruto": 5100 },
        { "nome": "Raul Rocha", "matricula": "072", "salario_bruto": 5400 },
        { "nome": "Gabriel Costa", "matricula": "073", "salario_bruto": 5600 },
        { "nome": "Carolina Santos", "matricula": "074", "salario_bruto": 4900 },
        { "nome": "Leandro Alves", "matricula": "075", "salario_bruto": 5800 },
        { "nome": "Tatiane Oliveira", "matricula": "076", "salario_bruto": 4700 },
        { "nome": "Lucas Almeida", "matricula": "077", "salario_bruto": 5200 },
        { "nome": "Bruna Ferreira", "matricula": "078", "salario_bruto": 5900 },
        { "nome": "Gustavo Nunes", "matricula": "079", "salario_bruto": 5500 },
        { "nome": "Amanda Mendes", "matricula": "080", "salario_bruto": 5000 }
    ]

    funcionarios.map(result => {
        console.log("\nFUNCIONÁRIO:");
        console.log("Matricula: ", result.matricula);
        console.log("Nome: ", result.nome);
        console.log("Salário Bruto: ", result.salario_bruto);
        console.log("Dedução INSS: ", (result.salario_bruto * 0.12));
        console.log("Salário Líquido: ", (result.salario_bruto * 0.88));
    })

}
function exercicio_21() {
    var sexo = parseInt(prompt("Qual o sexo do funcionario?(1- Masculino, 2- Feminino) "))

    if (isNaN(sexo) || sexo < 1 || sexo > 2) {
        console.log("\nPor favor, digite um número válido.");
    } else {
        var alt = parseFloat(prompt("Qual a altura do funcionario? "))
        if (sexo == 1) {
            var peso = (72.7 * alt) - 58
        } else {
            var peso = (62.1 * alt) - 44.7
        }

        console.log(peso.toFixed(2));

    }
}

function exercicio_22() {
    var contador = 0
    var salarios = 0
    var filhos = 0
    var maiorSalario = 0
    var percentual = 0
    var valor = true

    do {
        contador += 1

        var salario = Number(prompt("Qual é o seu salário? "))
        var filho = parseInt(prompt("Quantos filhos você tem? "))

        if (isNaN(salario) || isNaN(filho)) {
            console.log("\nPor favor, digite um número válido.");
            contador -= 1
            valor = false
        } else {
            if (salario > maiorSalario) {
                maiorSalario = salario
            }

            if (salario <= 350) {
                percentual += 1
            }

            salarios += salario
            filhos += filho

            var continuar = parseInt(prompt("Digite 1 se deseja continuar cadastrando, senão digite 2: "))

            if (continuar == 2) {
                valor = false
            }
        }


    } while (valor) {
        salarios = salarios / contador
        filhos = filhos / contador
        percentual = (percentual / contador) * 100

        console.log("\nMédia de salário: ", salarios.toFixed(2));
        console.log("Média de filhos: ", filhos.toFixed(2));
        console.log("Maior salário: ", maiorSalario);
        console.log("Percentual de pessoas com salário até R$ 350,00: ", percentual.toFixed(2), "%");
    }
}
function exercicio_23() {
    const linhas = 7;
    const colunas = 7;

    let matriz = [];
    for (let i = 0; i < linhas; i++) {
        matriz[i] = [];
        for (let j = 0; j < colunas; j++) {
            matriz[i][j] = 0;
        }
    }
    for (let index = 0; index < Math.min(linhas, colunas); index++) {
        matriz[index][index] = 1;
    }
    for (let i = 0; i < linhas; i++) {
        console.log(matriz[i].join(' '));
    }
}
function exercicio_24() {
    const Matriz = [
        [1, 2, 3, -4, 5, 6, 7, -8],
        [-1, 2, -3, 4, -5, 6, -7, 8],
        [1, 2, 3, -4, 5, -6, 7, 8],
        [1, -2, 3, 4, 5, -6, -7, 8],
        [-1, -2, 3, 4, 5, 6, -7, -8],
        [-1, -2, -3, -4, -5, -6, -7, -8]
    ];

    // Função para contar elementos negativos em uma linha
    function negativos(linha) {
        let count = 0;
        for (let i = 0; i < linha.length; i++) {
            if (linha[i] < 0) {
                count++;
            }
        }
        return count;
    }

    let C = [];

    for (let i = 0; i < Matriz.length; i++) {
        C.push(negativos(Matriz[i]));
    }

    console.log("Vetor C:");
    console.log(C);

}
function exercicio_25() {
    const linhas = 15;
    const colunas = 20;
    let matriz = [];

    for (let i = 0; i < linhas; i++) {
        matriz[i] = [];
        for (let j = 0; j < colunas; j++) {
            matriz[i][j] = Math.floor(Math.random() * 10) + 1;
        }
    }

    let somas = [];
    for (let j = 0; j < colunas; j++) {
        somas[j] = 0;
    }
    for (let i = 0; i < linhas; i++) {
        for (let j = 0; j < colunas; j++) {
            somas[j] += matriz[i][j];
        }
    }

    let somasColunas = somas

    console.log("Matriz:");
    console.log(matriz);
    console.log("Somas de cada coluna:");
    for (let j = 0; j < colunas; j++) {
        console.log("Coluna " + (j + 1) + ": " + somas[j]);
    }

}
function exercicio_26() {
    let matrizA = []
    let matrizB = []
    const linhas = 3;
    const colunas = 5;

    for (let i = 0; i < linhas; i++) {
        matrizA[i] = [];
        for (let j = 0; j < colunas; j++) {
            matrizA[i][j] = Math.floor(Math.random() * 10) + 1;
        }
    }

    for (let i = 0; i < linhas; i++) {
        matrizB[i] = [];
        for (let j = 0; j < colunas; j++) {
            matrizB[i][j] = Math.floor(Math.random() * 10) + 1;
        }
    }
}

function exercicio_27() {
    const matriz = []
    const a = 2
    const vetor = []
    const linhas = 6;
    const colunas = 6;

    //Adicionar valores a matriz
    for (let i = 0; i < linhas; i++) {
        matriz[i] = [];
        for (let j = 0; j < colunas; j++) {
            matriz[i][j] = Math.floor(Math.random() * 15) + 1;
        }
    }

    for (let i = 0; i < linhas; i++) {
        for (let j = 0; j < colunas; j++) {
            const resultado = matriz[i][j] * a;
            vetor.push(resultado);
        }
    }

    console.log("\nMatriz Inicial");
    console.log(matriz);

    console.log("\nVetor");
    console.log(`Valor da multiplicação: ${a}`);
    console.log(vetor);
}
function exercicio_28() {
    const matriz = []
    const linhas = 10;
    const colunas = 10;
    let a = 0;
    let b = 0;

    //Adicionar valores a matriz
    for (let i = 0; i < linhas; i++) {
        matriz[i] = [];
        for (let j = 0; j < colunas; j++) {
            matriz[i][j] = Math.floor(Math.random() * 15) + 1;
        }
    }



    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz.length; j++) {
            if (i < j) { // Elementos acima da diagonal principal
                a += matriz[i][j];
            } else if (i > j) { // Elementos abaixo da diagonal principal
                b += matriz[i][j];
            }
        }
    }
    console.log("\nMatriz:");
    console.table(matriz);
    console.log("\nSoma dos elementos acima da diagonal principal");
    console.log(a);
    console.log("\nSoma dos elementos abaixo da diagonal principal");
    console.log(b);
}

function exercicio_29() {
    const matriz = []
    const linhas = 5;
    const colunas = 5;
    let a = 0
    let b = 0
    let c = 0
    let d = 0

    //Adicionar valores a matriz
    for (let i = 0; i < linhas; i++) {
        matriz[i] = [];
        for (let j = 0; j < colunas; j++) {
            matriz[i][j] = Math.floor(Math.random() * 15) + 1;
        }
    }

    //Adicionando valor de A
    for (let i = 0; i < 5; i++) {
        a += matriz[4][i]
    }

    //Adicionando valor de B
    for (let i = 0; i < 5; i++) {
        b += matriz[i][4]
    }

    //Adicionando valor de C
    for (let i = 0; i < 5; i++) {
        c += matriz[i][i]
    }

    //Adicionando valor de D
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            d += matriz[i][j]
        }
    }

    console.log("\nMatriz:");
    console.table(matriz);

    console.log("\nSoma da linha 4 da matriz:");
    console.log(a);

    console.log("\nSoma da coluna 2 da matriz:");
    console.log(b);

    console.log("\nSoma dos elementos da diagonal:");
    console.log(c);

    console.log("\nSomda de todos os valores da matriz:");
    console.log(d);

}

function exercicio_30() {
    const matriz = []
    const linhas = 5;
    const colunas = 5;
    let sl = []
    let sc = []

    //Adicionar valores a matriz
    for (let i = 0; i < linhas; i++) {
        matriz[i] = [];
        for (let j = 0; j < colunas; j++) {
            matriz[i][j] = Math.floor(Math.random() * 15) + 1;
        }
    }

    //Adicionando valor de SL
    for (let i = 0; i < 5; i++) {
        let soma = 0
        for (let j = 0; j < 5; j++) {
            soma += matriz[i][j]
        }
        sl.push(soma)

    }

    //Adicionando valor de SC
    for (let i = 0; i < 5; i++) {
        let soma = 0
        for (let j = 0; j < 5; j++) {
            soma += matriz[j][i]
        }
        sc.push(soma)

    }

    console.log("\nMatriz:");
    console.table(matriz)

    console.log("\nVetor SL");
    console.log(sl);

    console.log("\nVetor SC");
    console.log(sc);
}

function exercicio_31() {
    const matrizV = []
    const matrizX = []
    const linhas = 30;
    const colunas = 30;
    let contador = 0

    //Adicionar valores a matriz
    for (let i = 0; i < linhas; i++) {
        matrizV[i] = [];
        for (let j = 0; j < colunas; j++) {
            matrizV[i][j] = Math.floor(Math.random() * 15) + 1;
        }
    }

    let numeroA = parseInt(prompt("Escreva um número inteiro(1 a 15): "))

    matrizV.map(result => {
        let linha = []
        result.map(element => {
            if (element == numeroA) {
                contador++
            } else {
                linha.push(element);
            }
        })

        matrizX.push(linha);
    })

    console.log("\nMatriz Inicial:");
    console.table(matrizV)

    console.log("\nQuantidade de vezes que o número " + numeroA + " aparece na matriz:");
    console.log(contador);

    console.log("\nMatriz Final:");
    console.table(matrizX);
}

function exercicio_32() {
    const matriz = []
    const linhas = 12;
    const colunas = 13;
    const maiorNumeroLinha = []

    //Adicionar valores a matriz
    for (let i = 0; i < linhas; i++) {
        matriz[i] = [];
        for (let j = 0; j < colunas; j++) {
            matriz[i][j] = Math.floor(Math.random() * 15) + 1;
        }
    }

    console.log("\nMatriz original:");
    console.table(matriz)

    for (let i = 0; i < linhas; i++) {
        let valor = 0
        for (let j = 0; j < colunas; j++) {
            if (valor == 0) {
                valor = matriz[i][j]
            } else if (valor < matriz[i][j]) {
                valor = matriz[i][j]
            }

        }
        maiorNumeroLinha.push(valor)

        for (let j = 0; j < colunas; j++) {
            matriz[i][j] = Number((matriz[i][j] / maiorNumeroLinha[i]).toFixed(2))
        }

    }
    console.log("\nMatriz modificada:");
    console.table(matriz)
}

function exercicio_33() {
    const matriz = []
    const linhas = 3;
    const colunas = 3;
    let coluna = colunas - 1
    let soma = 0

    //Adicionar valores a matriz
    for (let i = 0; i < linhas; i++) {
        matriz[i] = [];
        for (let j = 0; j < colunas; j++) {
            matriz[i][j] = Math.floor(Math.random() * 15) + 1;
        }
    }

    console.log("\nMatriz Original:");
    console.table(matriz)

    //Obtendo o valor da diagonal secundaria
    for (let i = 0; i < linhas; i++) {
        soma += matriz[i][coluna]
        coluna--
    }

    for (let i = 0; i < linhas; i++) {
        for (let j = 0; j < colunas; j++) {
            if (i == j) {
                matriz[i][j] = Number(matriz[i][j] * (soma / colunas).toFixed(2))
            }
        }
    }
    console.log("\nMatriz Final:");
    console.table(matriz)
}

function exercicio_34() {
    const matriz = []
    const linhas = 50;
    const colunas = 50;

    //Adicionar valores a matriz
    for (let i = 0; i < linhas; i++) {
        matriz[i] = [];
        for (let j = 0; j < colunas; j++) {
            matriz[i][j] = Math.floor(Math.random() * 15) + 1;
        }
    }
    console.table(matriz);

    for (let i = 0; i < linhas; i++) {
        let multiplicador = matriz[i][i]
        for (let j = 0; j < colunas; j++) {
            matriz[i][j] = matriz[i][j] * multiplicador
        }
    }

    console.table(matriz);

}

function exercicio_35() {
    let valores = []
    let pares = [];
    let impares = [];

    for (let i = 0; i < 30; i++) {
        valores.push(Math.floor(Math.random() * 100) + 1);
    }

    for (let i = 0; i < valores.length; i++) {
        if (valores[i] % 2 === 0) {
            pares.push(valores[i]);
            if (pares.length === 5) {
                console.log("Vetor de pares cheio:", pares);
                pares = [];
            }
        } else {
            impares.push(valores[i]);
            if (impares.length === 5) {
                console.log("Vetor de ímpares cheio:", impares);
                impares = [];
            }
        }
    }

    if (pares.length > 0) {
        console.log("Vetor de pares final:", pares);
    }
    if (impares.length > 0) {
        console.log("Vetor de ímpares final:", impares);
    }
}

function exercicio_36() {
    const gabarito = []
    const jogadores = []

    //Adicionar valores ao gabarito
    for (let i = 0; i < 13; i++) {
        gabarito[i] = Math.floor(Math.random() * 10) + 1;
    }

    for (let i = 0; i < 100; i++) {
        const respostas = []
        for (let i = 0; i < 13; i++) {
            respostas[i] = Math.floor(Math.random() * 10) + 1;
        }
        jogadores[i] = { cartao: i + 1, respostas: respostas }
    }

    jogadores.map(result => {
        let acertos = 0;
        for (let i = 0; i < gabarito.length; i++) {
            if (gabarito[i] === result.respostas[i]) {
                acertos++;
            }
        }
        console.log(`Apostador ${result.cartao} teve ${acertos} acertos.`);
        if (acertos === gabarito.length) {
            console.log("Parabéns, você foi o GANHADOR!");
        }
    })

}

function exercicio_37() {
    const letras = 'ABCDE';
    const gabarito = [];
    const alunos = [];

    for (let i = 0; i < 20; i++) {
        let indice = Math.floor(Math.random() * letras.length);
        gabarito.push(letras[indice]);
    }

    for (let i = 0; i < 50; i++) {
        const respostas = []
        for (let i = 0; i < 20; i++) {
            let indice = Math.floor(Math.random() * letras.length);
            respostas.push(letras[indice]);
        }
        alunos[i] = { matricula: i + 1, respostas: respostas }
    }

    alunos.map(result => {
        let acertos = 0;
        for (let i = 0; i < gabarito.length; i++) {
            if (gabarito[i] === result.respostas[i]) {
                acertos++;
            }
        }
        console.log(`Aluno ${result.matricula} teve ${acertos} acertos.`);
        if (acertos >= 12) {
            console.log("APROVADO");
        } else {
            console.log("REPROVADO");
        }
    })
}

function exercicio_38() {
    const vetor = []

    //Adicionar valores ao vetor
    for (let i = 0; i < 6; i++) {
        vetor[i] = Math.floor(Math.random() * 10) + 1;
    }

    function calcularSoma(vetor) {
        let soma = 0;
        for (let i = 0; i < vetor.length; i++) {
            soma += vetor[i];
        }
        return soma;
    }

    function calcularProduto(vetor) {
        let produto = 1;
        for (let i = 0; i < vetor.length; i++) {
            produto *= vetor[i];
        }
        return produto;
    }

    function calcularMedia(vetor) {
        let soma = calcularSoma(vetor);
        return soma / vetor.length;
    }

    function mostrarVetor(vetor) {
        console.log("Vetor:", vetor);
    }

    function ordenarVetorCrescente(vetor) {
        return vetor.sort((a, b) => a - b);
    }

    console.log("Escolha uma operação:\n1 - Soma dos elementos;\n2 - Produto dos elementos;\n3 - Média dos elementos;\n4 - Vetor ordenado em ordem crescente;\n5 - Mostrar o vetor;\n");
    let operacao = Number(prompt(""));
    console.log("Vetor: ", vetor);

    switch (operacao) {
        case 1:
            console.log("Soma dos elementos:", calcularSoma(vetor));
            break;
        case 2:
            console.log("Produto dos elementos:", calcularProduto(vetor));
            break;
        case 3:
            console.log("Média dos elementos:", calcularMedia(vetor));
            break;
        case 4:
            console.log("Vetor ordenado em ordem crescente:", ordenarVetorCrescente(vetor));
            break;
        case 5:
            mostrarVetor(vetor);
            break;
        default:
            console.log("Operação inválida.");
    }

}

function exercicio_39() {
    let vetorA = [];
    let vetorB = [];

    for (let i = 0; i < 100; i++) {
        vetorA.push(Math.floor(Math.random() * 201) - 100);
    }

    for (let i = 0; i < vetorA.length; i++) {
        if (vetorA[i] > 0) {
            vetorB.push(vetorA[i]);
        }
    }

    console.log("Vetor A original:", vetorA);
    console.log("Vetor B compactado:", vetorB);
}

function exercicio_40() {
    let vetor = [];
    let jogadores = []
    for (let i = 0; i < 5; i++) {
        let numero
        do {
            numero = Math.floor(Math.random() * 20) + 1;
        } while (vetor.includes(numero));
        vetor.push(numero);
    }
    vetor.sort()

    for (let i = 0; i < 50; i++) {
        let respostas = []

        for (let i = 0; i < 5; i++) {
            let numero
            do {
                numero = Math.floor(Math.random() * 20) + 1;
            } while (vetor.includes(numero));
            respostas.push(numero);
        }
        respostas.sort()
        jogadores[i] = { jogador: i + 1, respostas: respostas, ganhador: true }

    }

    for (let i = 0; i < jogadores.length; i++) {
        for (let j = 0; j < vetor.length; j++) {
            if (vetor[j] !== jogadores[i].respostas[j]) {
                jogadores[i].ganhador = false;
            }
        }
    }

    for (let i = 0; i < jogadores.length; i++) {

        if (jogadores[i].ganhador) {
            console.log(`Jogador ${jogadores[i].jogador}`);
            console.log(`Ganhador`);
        } else {
            console.log(`Jogador ${jogadores[i].jogador}`);
            console.log(`Perdedor`);
        }
    }
}

function exercicio_41() {
    const pessoa = {
        nome: "Cleiton",
        idade: 23
    }
    console.log("\nObjeto pesssoa inicial: ", pessoa);

    console.log("\nIdade: ", pessoa.idade);

    pessoa.email = "cleitonncruz105@gmail.com"

    console.log("\nObjeto pesssoa final: ", pessoa);
    console.log("");
}

function exercicio_42() {
    let dados = {
        numero: 42,
        nome: "João",
        idade: 30,
        linguagens: ["JavaScript", "Python", "Java"],
        interesses: ["Fotografia", "Viagens", "Esportes"],
        amigos: [
            { nome: "Maria", idade: 28 },
            { nome: "Pedro", idade: 32 },
            { nome: "Ana", idade: 25 }
        ],
        endereco: {
            rua: "Rua Principal",
            numero: 123,
            cidade: "Cidade Exemplo"
        },
        ativo: true
    };

    let novoObjeto = {}

    for (let chave in dados) {
        if (Array.isArray(dados[chave])) {
            novoObjeto[chave] = dados[chave];
        }
    }

    console.log("Objeto Filtrado: ", novoObjeto);
}

function exercicio_43() {
    let obj1 = { nome: "João", idade: 30 };
    let obj2 = { idade: 35, cidade: "São Paulo", ativo: true };
    let objetoCombinado = {};

    for (let chave in obj1) {
        objetoCombinado[chave] = obj1[chave];
    }

    for (let chave in obj2) {
        objetoCombinado[chave] = obj2[chave];
    }

    console.log("Objeto 1: ", obj1);
    console.log("Objeto 2: ", obj2);

    console.log("\nObjeto Combinado: ", objetoCombinado);
}

function exercicio_44() {
    let dados = {
        numero: 42,
        nome: "João",
        idade: 30,
        linguagens: ["JavaScript", "Python", "Java"],
        interesses: ["Fotografia", "Viagens", "Esportes"],
        amigos: [
            { nome: "Maria", idade: 28 },
            { nome: "Pedro", idade: 32 },
            { nome: "Ana", idade: 25 }
        ],
        endereco: {
            rua: "Rua Principal",
            numero: 123,
            cidade: "Cidade Exemplo"
        },
        ativo: true
    };
    let contador = 0

    for (let chave in dados) {
        if (typeof dados[chave] == "string") {
            contador++;
        }
    }

    console.log("Quantidade de strings: ", contador);
}

function exercicio_45() {
    let strings = ["maca", "banana", "laranja", "maca", "maca", "banana", "laranja", "kiwi"];
    let frequencia = {};
    for (let i = 0; i < strings.length; i++) {
        let elemento = strings[i];
        if (frequencia[elemento]) {
            frequencia[elemento]++;
        } else {
            frequencia[elemento] = 1;
        }
    }

    console.log(frequencia);
}

function exercicio_46() {
    let vendas = [
        { vendedor: "João", valor: 100 },
        { vendedor: "Maria", valor: 200 },
        { vendedor: "João", valor: 150 },
        { vendedor: "Pedro", valor: 300 },
        { vendedor: "Maria", valor: 120 },
        { vendedor: "Pedro", valor: 250 }
    ];

    let resumoVendas = {};
    for (let i = 0; i < vendas.length; i++) {
        let vendedor = vendas[i].vendedor;
        let valorVenda = vendas[i].valor;

        if (resumoVendas[vendedor]) {
            resumoVendas[vendedor] += valorVenda;
        } else {
            resumoVendas[vendedor] = valorVenda;
        }
    }

    console.log("Vendas: ", vendas);
    console.log("Resumo das vendas: ", resumoVendas);
}

function exercicio_47() {
    let objetoEntrada = {
        nome: "Cleiton",
        idade: 23,
        texto1: "Oi",
        texto2: "Tchau"
    };
    let novoObjeto = {};

    function olaMundo(texto){
        texto = "Ola Mundo"
        return texto
    }

    function dobrarValor(valor){
        valor = valor * 2;
        return valor
    }

    for (let chave in objetoEntrada) {
        if (typeof objetoEntrada[chave] === "string") {
            novoObjeto[chave] = olaMundo(objetoEntrada[chave]) ;
        }else if(typeof objetoEntrada[chave] === "number"){
            novoObjeto[chave] = dobrarValor(objetoEntrada[chave]) 
        }
    }

    console.log("Objeto de Entrada:", objetoEntrada);
    console.log("Novo objeto:", novoObjeto);
}

function exercicio_48() {
    const inventarioCombinado = {}

    let inventarioLojaA = {
        "mouse": 50,
        "monitor": 30,
        "teclado": 20
    }
    
    let inventarioLojaB = {
        "mouse": 20,
        "teclado": 10,
        "gabinete": 15
    }


    for (let itemA in inventarioLojaA) {
        inventarioCombinado[itemA] = inventarioLojaA[itemA];
    }

    for (let itemB in inventarioLojaB) {
        if (inventarioCombinado[itemB]) {
            inventarioCombinado[itemB] += inventarioLojaB[itemB];
        } else {
            inventarioCombinado[itemB] = inventarioLojaB[itemB];
        }
    }

    console.log();
    console.log("Inventário Loja A:", inventarioLojaA);
    console.log("Inventário Loja B:", inventarioLojaB);
    console.log("Inventário Combinado:",inventarioCombinado);
    console.log();

}

function exercicio_49() {
    const transacoes = [
        { id: 1, valor: 100, data: "2024-05-15", categoria: "Alimentacao" },
        { id: 2, valor: 50, data: "2024-05-16", categoria: "Transporte" },
        { id: 3, valor: 200, data: "2024-05-17", categoria: "Alimentacao" },
        { id: 4, valor: 75, data: "2024-05-18", categoria: "Saude" },
        { id: 5, valor: 120, data: "2024-05-19", categoria: "Transporte" },
        { id: 6, valor: 150, data: "2024-05-20", categoria: "Alimentacao" }
    ];

        let categoriasTransacoes = {};
    
        transacoes.forEach(transacao => {
            let { categoria, valor } = transacao;
            if (!categoriasTransacoes[categoria]) {
                categoriasTransacoes[categoria] = {
                    transacoes: [],
                    subtotal: 0
                };
            }
            categoriasTransacoes[categoria].transacoes.push(transacao);
            categoriasTransacoes[categoria].subtotal += valor;
        });
    
    console.log("Transações por categoria:");
    console.log("Alimentação: ",categoriasTransacoes.Alimentacao);
    console.log("Transporte: ",categoriasTransacoes.Transporte);
    console.log("Saude:: ",categoriasTransacoes.Saude);
}


module.exports ={
    exercicio_1,
    exercicio_2,
    exercicio_3,
    exercicio_4,
    exercicio_5,
    exercicio_6,
    exercicio_7,
    exercicio_8,
    exercicio_9,
    exercicio_10,
    exercicio_11,
    exercicio_12,
    exercicio_13,
    exercicio_14,
    exercicio_15,
    exercicio_16,
    exercicio_17,
    exercicio_18,
    exercicio_19,
    exercicio_20,
    exercicio_21,
    exercicio_22,
    exercicio_23,
    exercicio_24,
    exercicio_25,
    exercicio_26,
    exercicio_27,
    exercicio_28,
    exercicio_29,
    exercicio_30,
    exercicio_31,
    exercicio_32,
    exercicio_33,
    exercicio_34,
    exercicio_35,
    exercicio_36,
    exercicio_37,
    exercicio_38,
    exercicio_39,
    exercicio_40,
    exercicio_41,
    exercicio_42,
    exercicio_43,
    exercicio_44,
    exercicio_45,
    exercicio_46,
    exercicio_47,
    exercicio_48,
    exercicio_49
}


