class Documento{
    private valor: string = "123456789-01"; // TS
    #numero: number = 35; // ecmascript
    mostrarDoumento(){
        return this.#numero;
    }
} 
class CNPJ extends Documento{
    //private valor: string = "25698745632-01"
    #numero: number = 50;
    mostrarCNPJ(){
        return this.#numero;
    }
}

const rg = new Documento(); 
console.log(rg.mostrarDoumento());

const cnpj = new CNPJ();
console.log(cnpj.mostrarCNPJ());

//console.log("RG:" + rg.valor);
//console.log("RG:" + rg.#numero);