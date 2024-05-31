function menu() {
    var prompt = require("prompt-sync")()
    const exercicio_50 = require("./exercicio50/exercicio_50.js");
    const exercicios1a49 = require('./exercicios1a49/exercicios1a49.js')


    let finalizar = true
    do {
        const exercicio = parseInt(prompt("Olá, digite o número do exercício que você deseja acessar (1 a 50): "))

        switch (exercicio) {
            case 1:
                exercicios1a49.exercicio_1();
                break;
            case 2:
                exercicios1a49.exercicio_2();
                break;
            case 3:
                exercicios1a49.exercicio_3();
                break;
            case 4:
                exercicios1a49.exercicio_4();
                break;
            case 5:
                exercicios1a49.exercicio_5();
                break;
            case 6:
                exercicios1a49.exercicio_6();
                break;
            case 7:
                exercicios1a49.exercicio_7();
                break;
            case 8:
                exercicios1a49.exercicio_8();
                break;
            case 9:
                exercicios1a49.exercicio_9();
                break;
            case 10:
                exercicios1a49.exercicio_10();
                break;
            case 11:
                exercicios1a49.exercicio_11();
                break;
            case 12:
                exercicios1a49.exercicio_12();
                break;
            case 13:
                exercicios1a49.exercicio_13();
                break;
            case 14:
                exercicios1a49.exercicio_14();
                break;
            case 15:
                exercicios1a49.exercicio_15();
                break;
            case 16:
                exercicios1a49.exercicio_16();
                break;
            case 17:
                exercicios1a49.exercicio_17();
                break;
            case 18:
                exercicios1a49.exercicio_18();
                break;
            case 19:
                exercicios1a49.exercicio_19();
                break;
            case 20:
                exercicios1a49.exercicio_20();
                break;
            case 21:
                exercicios1a49.exercicio_21();
                break;
            case 22:
                exercicios1a49.exercicio_22();
                break;
            case 23:
                exercicios1a49.exercicio_23();
                break;
            case 24:
                exercicios1a49.exercicio_24();
                break;
            case 25:
                exercicios1a49.exercicio_25();
                break;
            case 26:
                exercicios1a49.exercicio_26();
                break;
            case 27:
                exercicios1a49.exercicio_27();
                break;
            case 28:
                exercicios1a49.exercicio_28();
                break;
            case 29:
                exercicios1a49.exercicio_29();
                break;
            case 30:
                exercicios1a49.exercicio_30();
                break;
            case 31:
                exercicios1a49.exercicio_31();
                break;
            case 32:
                exercicios1a49.exercicio_32();
                break;
            case 33:
                exercicios1a49.exercicio_33();
                break;
            case 34:
                exercicios1a49.exercicio_34();
                break;
            case 35:
                exercicios1a49.exercicio_35();
                break;
            case 36:
                exercicios1a49.exercicio_36();
                break;
            case 37:
                exercicios1a49.exercicio_37();
                break;
            case 38:
                exercicios1a49.exercicio_38();
                break;
            case 39:
                exercicios1a49.exercicio_39();
                break;
            case 40:
                exercicios1a49.exercicio_40();
                break;
            case 41:
                exercicios1a49.exercicio_41();
                break;
            case 42:
                exercicios1a49.exercicio_42();
                break;
            case 43:
                exercicios1a49.exercicio_43();
                break;
            case 44:
                exercicios1a49.exercicio_44();
                break;
            case 45:
                exercicios1a49.exercicio_45();
                break;
            case 46:
                exercicios1a49.exercicio_46();
                break;
            case 47:
                exercicios1a49.exercicio_47();
                break;
            case 48:
                exercicios1a49.exercicio_48();
                break;
            case 49:
                exercicios1a49.exercicio_49();
                break;
            case 50:
                exercicio_50()
                break;
            default:
                console.log("Exercício não encontrado");
                break;
        }

        console.log();
        let confirmacao = prompt("Deseja testar outro exercicico? (S/N)");

        if (confirmacao == "s" || confirmacao == "S") {
        } else {
            finalizar = !finalizar
        }
    }
    while (finalizar) {
        console.log();
        console.log("Adeus");
    }
}

menu()