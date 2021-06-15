interface Modelo {
    id: number;
    created_at: number;
    updated_at: number;
}

interface IPessoa extends Modelo{
    nome: string;
    id: number;
    idade?: number;
}

interface Usuario extends IPessoa {
    email: string;
    senha: string;
}

const joao: Usuario = {
    email: "joao@hcode.com.br",
    id: 1,
    nome: "joao rangel",
    senha: "123456",
    idade: 30,
    created_at: new Date().getTime(),
    updated_at: new Date().getTime()
}
