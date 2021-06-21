import applyMixins  from "./apllyMixins";
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
    vender(quantidade: number){
        return "vc vendeu o sofa"
    }
    constructor(public nome: string){
    }    
}
interface  Sofa extends Produto, Movel {}
applyMixins(Sofa, [ProdutoFinal, Movel]);
const Produto = new Sofa ("meu sofa");
console.log(Produto.vender(25));
console.log(Produto.empurrar(50));
console.log(Produto.nome);

