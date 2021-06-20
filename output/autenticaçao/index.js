"use strict";
var autenticaçao;
(function (autenticaçao) {
    class LoginRegistro {
        login(usuario) {
            return usuario;
        }
        registro(NovoUsuario) {
            return NovoUsuario;
        }
    }
    autenticaçao.LoginRegistro = LoginRegistro;
    class Recuperaçao {
        recuperarSenha() {
            return "Enviando email para recuperaçao de senha";
        }
        recuperarUsuario() {
            return "Enviando email para recuperar usuario";
        }
    }
    autenticaçao.Recuperaçao = Recuperaçao;
})(autenticaçao || (autenticaçao = {}));
