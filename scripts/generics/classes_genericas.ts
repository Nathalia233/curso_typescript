interface CadastroPadrao {
    readonly id: number
    readonly created_at: Date;
    readonly updated_at: Date

}
interface CadastroUsuario extends CadastroPadrao {
    nome: string;
    email: string;
    senha: string;
}
interface CadastroCategoria extends CadastroPadrao {
    nome: string;
}
class CadastroBasico<InterfaceBasica> {
    criar(dados: InterfaceBasica){
        console.log("criando novo rgistros");
        return dados;
    }  
    selecionar(id: number){
        console.log("dados do registro de ID" + id);
        return{} as InterfaceBasica;
    }
    editar(
        id: number,
        dadosAtualizaçao: InterfaceBasica,
    ): InterfaceBasica {
        console.log("editando dados do ID" + id);
        return dadosAtualizaçao;   
    }
    excluir(id: number): boolean {
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