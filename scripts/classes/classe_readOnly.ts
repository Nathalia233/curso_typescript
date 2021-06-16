class Usuario {
    readonly id:string = "";
    nome: string = "";
    private senha: string ="123456";
    readonly dataCadastro: Date = new Date ("2021-01-01");
}

const usuario = new Usuario();
console.log(usuario.id);
