interface ICurso {
    readonly titulo: string;
    preço: number,
    descriçao: string,
    cargaHoraria: number,
    classificaçoes: number
}
const curso: ICurso = {
    titulo: "typercript",
    preço: 5000,
    descriçao: "curso",
    cargaHoraria: 10,
    classificaçoes: 5
}

curso.titulo = "php 8";

console.log(curso);