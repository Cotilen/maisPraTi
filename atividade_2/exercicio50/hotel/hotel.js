class Hotel {
    constructor(id, nome, cidade, quartosTotais) {
        this.id = id;
        this.nome = nome;
        this.cidade = cidade;
        this.quartosTotais = quartosTotais;
        this.quartosDisponiveis = quartosTotais;
    }
}

 function adicionarHotel(nome, cidade, quartosTotais, hoteis) {
    const id = hoteis.length > 0 ? hoteis[hoteis.length - 1].id + 1 : 1;

    const novoHotel = new Hotel(id, nome, cidade, quartosTotais);
    console.log(`Hotel "${nome}" adicionado com sucesso.`);

    return novoHotel
}

 function buscarHoteisPorCidade(cidade, lista) {
    const hoteisNaCidade = lista.filter(hotel => hotel.cidade.toLowerCase() === cidade.toLowerCase());
    if (hoteisNaCidade.length > 0) {
        console.log(`Hotéis disponíveis em ${cidade}:`);
        hoteisNaCidade.forEach(hotel => {
            console.log(`- ${hotel.nome} (ID: ${hotel.id}) - Quartos Disponíveis: ${hotel.quartosDisponiveis}`);
        });
    } else {
        console.log(`Nenhum hotel encontrado em ${cidade}.`);
    }
}

const hoteis = [
    new Hotel(1, "Ibis", "OSASCO", 100),
    new Hotel(2, "Golf", "SAO PAULO", 50),
    new Hotel(3, "Chuva de Prata", "RIO GRANDE DO SUL", 80)
];

module.exports ={
    adicionarHotel,
    buscarHoteisPorCidade,
    hoteis
}