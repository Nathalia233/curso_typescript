class Permissao {
    constructor (
        private _nome: string,
        private _nivel: number
    ) { }

    get nome() {
        return this._nome.toLocaleUpperCase();
    }
    
    set nome(novoNome: string) {
        if(novoNome.length <5 ){
            throw new Error("o nome da permissao deve ter no minimo 5 letras");
        }
        this._nome = novoNome;
    }
}

const permissao = new Permissao("administrador", 1);
console.log(permissao.nome);
try {
    permissao.nome ="adm";
} catch (e) {
    console.log(e);
}
console.log(permissao.nome);
