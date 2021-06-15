class Veiculo {
    public cor: string;

    constructor(cor:string){
        this.cor = cor;
    }

    public tentandoAbrirPorta(): boolean{
        return false;
    }
}

const carro = new Veiculo("branco");
carro.cor = "preto";
console.log(carro.cor);
