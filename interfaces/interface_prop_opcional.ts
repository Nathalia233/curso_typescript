interface IProduto {
    nome: string;
    preço: number;
    descriçao?: string;
    dataValidade: Date;
}

const produtoDados: IProduto = {
    nome: "notebook",
    preço: 2000,
    descriçao: "meu notebook superpotente", 
    dataValidade: new Date (2002,11,1),
    
}