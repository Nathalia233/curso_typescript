interface IEndereço {
    logradouro: string;
    numero: number;
    bairro: string;
    cidade: string;
}

let endereço: IEndereço;

endereço = {
    logradouro: "av. paulista",
    numero:1000,
    bairro: "bela citra",
    cidade: "sao paulo"
};
