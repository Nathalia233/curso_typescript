console.log("hello world este é meu primeiro codigo typescript");

console.log("================================================");
const nome = "joao";
console.log("ola " + nome + " seja bem vindo!");
 console.log("================================================");

 class Produto {
     nome: string;
     valor: number;
     
     constructor(produtoNome: string, produtoValor: number) {
         this.nome = produtoNome;
         this.valor = produtoValor;
     }
 }
 const playstation5 = new Produto ("playstation 5 ", 5000);