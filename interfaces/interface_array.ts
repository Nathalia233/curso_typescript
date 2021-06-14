interface Categoria {
    nome: string;
    id:number;
    categoriaPai?: Categoria;
}

const frontEnd: Categoria = {
    nome: "front-End",
    id: 1
}
const backEnd: Categoria ={
    nome: "back-End",
    id: 2
}
interface Menu {
   categorias: Categoria[]; 
}
let menu: Menu = {
    categorias : [frontEnd, backEnd],
};

interface Todo {
    [indice: number] : string ;
}
let minhasTarefas: Todo;
minhasTarefas = ["estudar typescript", "estudar javascript", "estudar php8",]
 
console.log(minhasTarefas[0]);

// nao achei o piper no teclado do pc 