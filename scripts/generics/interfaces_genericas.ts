interface IProcessamento<TipoInterface>{
    valor: TipoInterface;
    realizarProcessamento(arg: TipoInterface): TipoInterface;
}
const  string: IProcessamento<string> = {
    valor: "hcode",
    realizarProcessamento(argumento: string): string{
        return argumento.toUpperCase();
    }
}
console.log(string.valor);
console.log(string.realizarProcessamento("hcode treinamentos"));

const numero: IProcessamento<number> = {
    valor: 10,
    realizarProcessamento(v: number): number {
        return v * v;
    }
}
console.log(numero.realizarProcessamento(numero.valor));