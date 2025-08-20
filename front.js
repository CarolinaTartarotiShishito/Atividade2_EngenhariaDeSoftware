let lista = new Array(8);
let x = null;

function armazenarNumeros() {
    const n1 = parseInt(Document.querySelector('#numero1'));
    const n2 = parseInt(Document.querySelector('#numero2'));
    const n3 = parseInt(Document.querySelector('#numero3'));
    const n4 = parseInt(Document.querySelector('#numero4'));
    const n5 = parseInt(Document.querySelector('#numero5'));
    const n6 = parseInt(Document.querySelector('#numero6'));
    const n7 = parseInt(Document.querySelector('#numero7'));
    const n8 = parseInt(Document.querySelector('#numero8'));

    if(n1 && n2 && n3 && n4 && n5 && n6 && n7 && n8){
        lista.push([n1, n2, n3, n4, n5, n6, n7, n8]);
        lista.sort((a, b) => a - b);
        setTimeout(() => {
            window.location.href = "Tela1.html";
        }, 1000);
    }
}

function armazenarNumeroBuscado(){
    let entrada = Document.querySelector('#numero-procura');
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
    // :D
    let texto = Document.querySelector('#resultado');
    let resultado = buscarNumero()
    if(resultado >= 0){
        resultado.innerHTML(`O núumero foi encontrado na posição: ${resultado}`);
    } else {
        resultado.innerHTML('O número não foi encontrado.');
    }
    lista.length = 0;
    x = null;
}