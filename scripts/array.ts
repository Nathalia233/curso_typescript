const filmesCategorias: ( string|number )[] = ["comedia", "drama", "romance", "aventura"];

//filmesCategorias.push("rom");
//filmesCategorias.push("123456");

const filmesAnos: Array< number|string > = [];
for(let ano = 2000; ano <= new Date().getFullYear(); ano++ ){
    filmesAnos.push(ano);
}
console.log(filmesAnos);