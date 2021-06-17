"use strict";
class BancoDeDados {
    constructor(ip, usuario, senha, TipoBancos) {
        this.ip = ip;
        this.usuario = usuario;
        this.senha = senha;
        this.TipoBancos = TipoBancos;
    }
    static factory(parametros) {
        if ([
            BancoDeDados.TIPO_MYSQL,
            BancoDeDados.TIPO_SQLSERVER
        ].includes(parametros.tipoBanco)) {
            throw new Error("tipo de banco incorrecto");
        }
        return new BancoDeDados(parametros.ip, parametros.usuario, parametros.senha, parametros.tipoBanco);
    }
}
BancoDeDados.LOCAL = "127.0.0.1";
BancoDeDados.TIPO_MYSQL = "MySQL";
BancoDeDados.TIPO_SQLSERVER = "SQLServer";
const conexaoBanco = BancoDeDados.factory({
    tipoBanco: BancoDeDados.TIPO_MYSQL,
    senha: "root",
    usuario: "root",
    ip: BancoDeDados.LOCAL
});
console.log(conexaoBanco);
