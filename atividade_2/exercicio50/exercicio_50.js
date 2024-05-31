function exercicio_50() {
    var prompt = require("prompt-sync")()
    const hotel = require('./hotel/hotel.js')
    const reserva = require('./reserva/reserva.js')
    const hoteis = hotel.hoteis
    const reservas = reserva.reservas
    let finalizar = true
    let nome = prompt("Bem Vindo! Qual o seu nome? ")

    reservas.map(result => {
        let idHotel = result.idHotel
        const hotel = hoteis.find(hotel => hotel.id === idHotel);

        hotel.quartosDisponiveis -= 1;
    })

    do {
        console.log(`\n${nome}, o que você gostaria de fazer?`);

        console.log("1 - Adicionar um hotel");
        console.log("2 - Buscar hoteis por cidade");
        console.log("3 - Reservar um hotel");
        console.log("4 - Cancelar reserva");
        console.log("5 - Listar reservas");
        console.log("6 - Finalizar");

        let opcao = prompt("Digite a opção desejada: ")

        switch (parseInt(opcao)) {
            case 1:
                let case1 = true
                do {
                    console.log();
                    let nome = prompt("Digite o nome do hotel: ")
                    let adicionarCidade = prompt("Digite a cidade do hotel: ")
                    let quartosTotais = parseInt(prompt("Digite a quantidade total de quartos deste hotel: "))

                    if (nome.length > 2 && adicionarCidade.length > 2, !isNaN(quartosTotais)) {
                        hoteis.push(hotel.adicionarHotel(nome, adicionarCidade.toUpperCase(), quartosTotais, hoteis))
                    } else {
                        console.log("Erro!");
                        console.log("\nNome e cidade devem ter mais de 2 caracteres")
                    }

                    console.log("\nHotel adicionado com sucesso!");
                    let case1Confirmacao = prompt("Deseja adicionar outro hotel? (S/N)");

                    if (case1Confirmacao == "S" || case1Confirmacao == "s") {
                    }else{
                        case1 = !case1
                    }
                }
                while (case1) {
                    break;
                }
            case 2:
                let case2 = true
                do {
                    let cidade = prompt("Digite a cidade desejada: ")

                    hotel.buscarHoteisPorCidade(cidade.toUpperCase(), hoteis)

                    let case2Confirmacao = prompt("Deseja buscar em outra cidade? (S/N)");

                    if (case2Confirmacao == "S" || case2Confirmacao == "s") {
                    }else{
                        case2 = !case2
                    }
                }
                while (case2) {
                    break;
                }
            case 3:
                let case3 = true
                do {
                    let hotel = parseInt(prompt("Por favor, digite o número do hotel: "))

                    if (!isNaN(hotel)) {
                        reservas.push(reserva.fazerReserva(hotel, nome, hoteis, reservas))
                    }

                    let case3Confirmacao = prompt("Deseja fazer outra reserva? (S/N)");

                    if (case3Confirmacao == "s" || case3Confirmacao == "S") {
                    }else{
                        case3 = !case3
                    }
                }
                while (case3) {
                    break;
                }
            case 4:

                let case4 = true
                do {
                    let pergunta = parseInt(prompt("Por favor, digite o número da reserva que você deseja cancelar: "))

                    let conf = false
                    reservas.forEach(result => {
                        if (result.nomeCliente === nome && result.idReserva == pergunta) {
                            reserva.cancelarReserva(pergunta, reservas, hoteis)
                            reservas.filter(item => !(item.idHotel === pergunta && item.nomeCliente === nome))
                            conf = reservas.some(item => !(item.idHotel === pergunta && item.nomeCliente === nome))
                        }

                    })

                    if (!conf) {
                        console.log("Não foi possível cancelar a reserva! Somente o hóspede pode cancelá-la")
                    }

                    let case4Confirmacao = prompt("Deseja cancelar outra reserva? (S/N)");

                    if (case4Confirmacao == "s" || case4Confirmacao == "S") {
                    }else{
                        case4 = !case4
                    }
                }
                while (case4) {
                    break;
                }
            case 5:
                let case5 = true
                do {
                    reserva.listarReservas(reservas, hoteis)

                    let case5Confirmacao = prompt("Deseja visualizar as reservas novamente? (S/N)");

                    if (case5Confirmacao == "s" || case5Confirmacao == "S") {
                    }else{
                        case5 = !case5
                    }
                }
                while (case5) {
                    break;
                }
            case 6:
                finalizar = !finalizar
                break;
            default:
                console.log("\nOpção Inválida");
                break;
        }
    }
    while (finalizar) {
        console.log("\nMuito obrigado e adeus...");

    }
}

module.exports = exercicio_50