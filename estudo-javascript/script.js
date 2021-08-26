// Exercício em JavaScript

var car = {
    marca: 'fiat',
    modelo: 'uno',
    placa: 'ltx-0009',
    ano: 2000,
    cor: 'azul',
    quantasPortas: 4,
    assentos: 5,
    quantidadePessoas: 0
};


car.mudarCor = function(cor) {
    car.cor = cor;
};


car.obterCor = function() {
    return car.cor;
};

car.obterModelo = function() {
    return car.modelo;
};

car.obterMarca = function() {
    return car.marca;
};

car.obterMarcaModelo = function() {
    return `Esse carro é um ${car.obterMarca()} ${car.obterModelo()}.`
};


console.log(car.obterMarcaModelo());

car.adicionarPessoas = function(numeroPessoas) {
    var totalPessoas = car.quantidadePessoas + numeroPessoas;
    if(car.quantidadePessoas === car.assentos) {
        return `O carro já está lotado!`
    }

    if(totalPessoas > car.assentos) {
        var quantasPessoasCabem = car.assentos - car.quantidadePessoas;
        var pluralOuSingular = quantasPessoasCabem === 1 ? 'pessoa' : 'pessoas';
        return `Só cabem mais ${quantasPessoasCabem} ${pluralOuSingular} no carro!`;
    }

    car.quantidadePessoas += numeroPessoas;
        return `Já temos ${totalPessoas} pessoas no carro!`;
};



