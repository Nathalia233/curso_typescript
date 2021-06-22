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
//# sourceMappingURL=classes_genericas.js.map