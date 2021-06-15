function somarRenda(... meses: number []) : number {
    return meses.reduce((rendaTotal, rendaAtual) => rendaTotal + rendaTotal, 0);
}
console.log(somarRenda( 250, 780, 695, 2000, 6500 ));