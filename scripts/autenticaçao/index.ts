namespace autenticaçao  { 
    interface IUsuario{
        email: string;
        senha: string;
    }
    interface Icadastro{
        nome: string;
        email: string;
        senha: string;
        dataNascimento: string;
    }
    export class LoginRegistro {
        login(usuario: IUsuario){
            return usuario;
        }
        registro(NovoUsuario: Icadastro){
            return NovoUsuario;
        }
    }
    export class Recuperaçao {
        recuperarSenha(){
            return "Enviando email para recuperaçao de senha"
        }
        recuperarUsuario(){
            return "Enviando email para recuperar usuario"
        }
    }
}