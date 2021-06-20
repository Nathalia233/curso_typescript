import MeuUsuario from "../interface/meuUsuario";
export default abstract class Notificaçoes{
    abstract enviar(usuario: MeuUsuario): boolean;
}