function obterPrimeiraPosiçao<Hcode>(meuArray: Array<Hcode>): Hcode|undefined  {
    return meuArray.pop();
}
console.log(obterPrimeiraPosiçao(["joao1",10,"joao3","joao4"]));
