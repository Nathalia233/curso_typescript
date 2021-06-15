class Banco {
    private cofreQtd: number = 10000;
    private debitarCofre(quantidade: number): number | string { 
        if(this.cofreQtd >= quantidade){

            this.cofreQtd -= quantidade;
            return this.cofreQtd;
              
        }else{
            return "o cofre nao possui a quantidade";
        }
    }

    protected sacaraDoCaixa(quantidade: number) {
        return this.debitarCofre(quantidade);
    }
}

class Banco24Horas extends Banco {
    static sacaraDoCaixa(arg0: number) {
        throw new Error("Method not implemented.");
    }

    sacar(qtd: number) {
        return this.sacaraDoCaixa(qtd);
    }

}

//const nubank new = Banco();
const banco24 = new Banco24Horas();

Banco24Horas.sacaraDoCaixa(25000);