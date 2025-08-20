let lista = new Array(8);
let x = null;

function armazenarNumeros() {
    const n1 = parseInt((document.querySelector('#n1')).value);
    const n2 = parseInt((document.querySelector('#n2')).value);
    const n3 = parseInt((document.querySelector('#n3')).value);
    const n4 = parseInt((document.querySelector('#n4')).value);
    const n5 = parseInt((document.querySelector('#n5')).value);
    const n6 = parseInt((document.querySelector('#n6')).value);
    const n7 = parseInt((document.querySelector('#n7')).value);
    const n8 = parseInt((document.querySelector('#n8')).value);

    if(n1 && n2 && n3 && n4 && n5 && n6 && n7 && n8){
        lista.push([n1, n2, n3, n4, n5, n6, n7, n8]);
        lista.sort((a, b) => a - b);
        setTimeout(() => {
            window.location.href = "tela2.html";
        }, 1000);
    }
}

function armazenarNumeroBuscado(){
    let entrada = (document.querySelector('#numero-procura')).value;
    if(entrada){
        x = parseInt(entrada);
        setTimeout(() => {
            window.location.href = "Tela3.html";
        }, 1000);
    }
}

function buscarNumero() {
    let ini = 0;
    let fim = lista.length - 1;
    while(ini <= fim) {
        let meio = Math.floor((ini + fim) / 2);
        if (x == lista[meio]) return meio;
        if (x > lista[meio]) ini = meio + 1;
        else fim = meio -1;
    }
    return -1
}

function exibirResultado(){
    let texto = document.querySelector('#resultado');
    let resultado = buscarNumero()
    if(resultado >= 0){
        texto.innerHTML(`O número foi encontrado na posição: ${resultado}`);
    } else {
        texto.innerHTML('O número inserido não foi encontrado.');
    }
    lista.length = 0;
    x = null;
}