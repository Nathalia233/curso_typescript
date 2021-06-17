interface IBancoDeDados {
    ip: string,
    usuario: string,
    senha: string,
    tipoBanco: string
}

class BancoDeDados {
    static LOCAL = "127.0.0.1";
    static TIPO_MYSQL = "MySQL";
    static TIPO_SQLSERVER = "SQLServer";

    constructor(
        private ip: string,
        private usuario: string,
        private senha: string,
        private TipoBancos: string
        ){ }

    static factory(parametros: IBancoDeDados){
        if([
            BancoDeDados.TIPO_MYSQL, 
            BancoDeDados.TIPO_SQLSERVER
        ].includes(parametros.tipoBanco)) {
            throw new Error("tipo de banco incorrecto");
        }

        return new BancoDeDados(
            parametros.ip,
            parametros.usuario,
            parametros.senha,
            parametros.tipoBanco
        );
    }
}

const conexaoBanco = BancoDeDados.factory({
    tipoBanco: BancoDeDados.TIPO_MYSQL,
    senha: "root",
    usuario: "root",
    ip: BancoDeDados.LOCAL
});

console.log(conexaoBanco);