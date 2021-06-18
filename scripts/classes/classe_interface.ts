interface IEmailv2{
    nome: string,
    email: string,
}

interface ITelefonev2 {
    nome: string,
    email: string,
    telefone: number
}
interface INotificaçoesv2 {
    enviar(usuario: MeuUsuariov2): boolean;
    
}

interface MeuUsuariov2 {
    nome: string;
    email: string;
    telefone: number;
    idAndroid?: string;
}

abstract class Notificaçoesv2{
    abstract enviar(usuario: MeuUsuariov2): boolean;
}

class Emailv2 extends Notificaçoesv2 implements  INotificaçoesv2, IEmailv2{

    nome: string;
    email: string;
    usuario: MeuUsuariov2;

    constructor(usuario: MeuUsuariov2){
        super(), 
        this.nome = usuario.nome;
        this.email = usuario.email;
        this.usuario = usuario;
    }
    enviar(usuario: MeuUsuariov2): boolean{
        console.log(`enviando email para o usuario${this.email}...`)
        return true;
    }

}
class SMSv2 extends Notificaçoesv2 implements  INotificaçoesv2, ITelefonev2 {

    nome: string;
    email: string;
    telefone: number;

    constructor(usuario: MeuUsuariov2){
        super() 
        this.nome = usuario.nome; 
        this.email = usuario.email;
        this.telefone = usuario.telefone;
}

    enviar(usuario: MeuUsuariov2): boolean {
        console.log(`enviando SMS para o usuario ${usuario.telefone}...`);
        return true;
    }
}
class Androidv2 extends Notificaçoesv2 {
    enviar(usuario: MeuUsuariov2): boolean {
        console.log(`enviando mensagem para o usuario do android ${usuario.idAndroid}...`);
        return true;
    }
}
/*new Emailv2().enviar({
    nome: "joao",
    email: "joao@hcode.com.br",
    telefone: 119212345678
});
new SMSv2().enviar({
    nome: "joao",
    email: "joao@hcode.com.br",
    telefone: 119212345678
});
new Androidv2().enviar({
    nome: "joao",
    email: "joao@hcode.com.br",
    telefone: 119212345678,
    idAndroid: "jhdsahdkhahsdkas"
});*/
