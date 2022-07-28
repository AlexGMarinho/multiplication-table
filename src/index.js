import readlineSync from 'readline-sync';

const numero_da_tabuada = readlineSync.question(`Digite o valor da tabuada: `);

for (let contador = 1; contador <= 10; contador++) {
    const valor_da_tabuada = contador * numero_da_tabuada;

    console.log(`${numero_da_tabuada} X ${contador} = ${valor_da_tabuada}`);
}
