import MeuUsuario from '../interface/meuUsuario';
import Notificaçoes from './Notificaçoes';
export class Email extends Notificaçoes {
    enviar(usuario: MeuUsuario): boolean {
        console.log(`enviando email para o usuario ${usuario.email}...`);
        return true;
    }
}
export class SMS extends Notificaçoes {
    enviar(usuario: MeuUsuario): boolean {
        console.log(`enviando SMS para o usuario ${usuario.telefone}...`);
        return true;
    }
}
export class Android extends Notificaçoes {
    enviar(usuario: MeuUsuario): boolean {
        console.log(`enviando mensagem para o usuario do android ${usuario.idAndroid}...`);
        return true;
    }
}