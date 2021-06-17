class Usuario {
    readonly id:string = "";
    nome: string = "";
    private senha: string ="123456";
    readonly dataCadastro: Date = new Date ("2021-01-01");
}

const usuario = new Usuario();
// usuario.id = "123";
//console.log(usuario.senha);
console.log(usuario.id);
