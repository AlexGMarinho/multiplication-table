import readlineSync from 'readline-sync';

let numero_da_tabuada = readlineSync.questionFloat(`Digite o valor da tabuada: `);

for (let contador = 1; contador <= 10; contador++) {
    let valor_da_tabuada = contador * numero_da_tabuada;

    console.log(`${numero_da_tabuada} X ${contador} = ${valor_da_tabuada.}`);
}
