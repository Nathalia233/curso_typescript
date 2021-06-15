function enviarEmail (
    para:string,
    assunto: string = " sem assunto ",
    remetente?: string
): void {
    console.log({
        para,
        assunto,
        remetente
    });
}
enviarEmail("joao@hcode.com.br");
