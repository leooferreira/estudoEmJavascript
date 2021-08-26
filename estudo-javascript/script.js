// Exercício-1 em JavaScript

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
    if(car.quantidadePessoas === car.assentos && totalPessoas >= car.assentos) {
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

// Exercício-2 em JavaScript

let myarray = [10, 'leonardo', null, {a: 1}, function(){}];

function myFunction(arr) {
    return arr;
}

console.log(myFunction(myarray)[1]);

function myFunction2(arr, index){
    return arr[index];
}

let myarray2 = ['ninja', 52.4, true, [1, 2, 'leonardo'], {b: 2}];
console.log(myFunction2(myarray2, 0));
console.log(myFunction2(myarray2, 1));
console.log(myFunction2(myarray2, 2));
console.log(myFunction2(myarray2, 3));
console.log(myFunction2(myarray2, 4));

function book(bookName) {
    let allBooks = {
        'Guia de Html e Css':{
            quantidadePaginas:333,
            autor:'Jhon',
            editora:'ebook'
        },
        'Introdução ao HTML5':{
            quantidadePaginas:456,
            autor:'Eric',
            editora:'eletronicbook'
        },
        'Javascript do zero':{
            quantidadePaginas:179,
            autor:'Tony',
            editora:'pagetech'
        } 

    };

    return !bookName ? allBooks : allBooks[bookName];
}

console.log(book());
let bookName = 'Guia de Html e Css';
console.log(`O livro ${bookName} tem ${book(bookName).quantidadePaginas} páginas!`);

console.log(`O autor do livro ${bookName} é ${book(bookName).autor}.`);

console.log(`O livro ${bookName} foi publicado pela editora ${book(bookName).editora}.`);

