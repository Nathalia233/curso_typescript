class Domicilio {
    public cor: string;
    public endereço: object;

    constructor(cor: string, endereço: object){
        this.cor = cor;
        this.endereço = endereço;
    }

    public entrarNaCasa(): string{
        return "oi, quem é?";
    }
}

class Casa extends Domicilio {
    public entrarNaCasa(): string{
        return this.atenderInterfone ("oi, quem é?");
    }
    protected atenderInterfone(mensagem: string): string {
        return mensagem;
    }
}

const casadoHomer = new Casa ("rosa", {cidade: "springfield"});
console.log(casadoHomer.entrarNaCasa());