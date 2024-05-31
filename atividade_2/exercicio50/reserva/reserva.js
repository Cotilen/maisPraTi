class Reserva {
    constructor(idReserva, idHotel, nomeCliente) {
        this.idReserva = idReserva;
        this.idHotel = idHotel;
        this.nomeCliente = nomeCliente;
    }
}

function fazerReserva(idHotel, nomeCliente, hoteis, reservas) {
    const idReserva = reservas.length > 0 ? reservas[reservas.length - 1].id + 1 : 1;
    const hotel = hoteis.find(hotel => hotel.id === idHotel);

    if (hotel && hotel.quartosDisponiveis > 0) {
        const novaReserva = new Reserva(idReserva, idHotel, nomeCliente);
        hotel.quartosDisponiveis -= 1;
        console.log(`Reserva feita com sucesso para ${nomeCliente} no hotel "${hotel.nome}".`);

        return novaReserva
    } else {
        console.log(`Não foi possível fazer a reserva. Hotel não encontrado ou sem quartos disponíveis.`);
    }
}

function cancelarReserva(idReserva, reservas, hoteis) {
    const reserva = reservas.find(reserva => reserva.idReserva === idReserva);
    if (reserva) {
        const hotel = hoteis.find(hotel => hotel.id === reserva.idHotel);
        hotel.quartosDisponiveis += 1;
        const index = reservas.indexOf(reserva);
        reservas.splice(index, 1);
        console.log(`Reserva ${idReserva} cancelada com sucesso.`);
    } else {
        console.log(`Reserva ${idReserva} não encontrada.`);
    }
}

function listarReservas(reservas, hoteis) {
    if (reservas.length > 0) {
        console.log("Reservas Atuais:");
        reservas.forEach(reserva => {
            const hotel = hoteis.find(hotel => hotel.id === reserva.idHotel);
            console.log(`- Reserva ID: ${reserva.idReserva} | Hotel: ${hotel.nome} | Cliente: ${reserva.nomeCliente} | Cidade: ${hotel.cidade}`);
        });
    } else {
        console.log("Nenhuma reserva encontrada.");
    }
}

const reservas = [
    new Reserva(1,1, "Cleiton"),
    new Reserva(2,2, "Jaques"),
    new Reserva(3,1, "Rodrigo")
]

module.exports ={
    fazerReserva,
    cancelarReserva,
    listarReservas,
    reservas
}