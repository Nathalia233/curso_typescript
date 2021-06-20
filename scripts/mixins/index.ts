class ProdutoFinal{
    vender(quantidade: number){
        return `foram vendidos ${quantidade} itens deste produto`;
    }
    comprar(quantidade: number){
        return `foram comprados ${quantidade} itens deste produto`;
    }
}
class Movel {
    sentar(){
        return "vc sentou";
    }
    empurrar(metros: number){
        return `o movel foi empurrado ${metros} metros`;
    }
}
class Sofa {
    constructor(public nome: string){}
    
}
