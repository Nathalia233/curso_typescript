interface IHcode{
    length: number;
}

function mostrarQuantidadeTotal<Hcode extends IHcode >(valor: Hcode): Hcode {
    console.log(`total ${valor.length}`);
    return valor;
}
console.log(mostrarQuantidadeTotal([10, 20]));
console.log(mostrarQuantidadeTotal({nome: "ronaldo", length: 1}));