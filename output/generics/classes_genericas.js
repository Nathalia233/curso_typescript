"use strict";
class CadastroBasico {
    criar(dados) {
        console.log("criando novo rgistros");
        return dados;
    }
    selecionar(id) {
        console.log("dados do registro de ID" + id);
        return {};
    }
    editar(id, dadosAtualizaçao) {
        console.log("editando dados do ID" + id);
        return dadosAtualizaçao;
    }
    excluir(id) {
        console.log("excluindo registro do id" + id);
        return true;
    }
}
/*class UsuarioModelo extends CadastroUsuario<CadastroBasico>{
    criar(arg0: { id: number; nome: string; email: string; senha: string; created_at: Date; updated_at: Date; }): any {
        throw new Error("Method not implemented.");
    }
}
const NovoUsuario = new UsuarioModelo();
console.log(NovoUsuario.criar({
    id: 1,
    nome: "glaucio daniel",
    email: "glaucio_daniel@hcode.com.br",
    senha:"Gl@ucio",
    created_at: new Date ("2015-06-01"),
    updated_at: new Date ("2020-01-20")
}));
class CategoriaModelo extends CadastroUsuario<CadastroCategoria>{
    criar(arg0: { id: number; nome: string; created_at: Date; updated_at: Date; }) {
        throw new Error("Method not implemented.");
    }
}
const NovoCategoria = new CategoriaModelo();
NovoCategoria.criar({
    id: 1,
    nome: "jascript",
    created_at: new Date ("2015-06-01"),
    updated_at: new Date ("2020-01-20")
});*/ 
