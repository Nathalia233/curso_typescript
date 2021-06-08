"use strict";
function enviarEmail(para, assunto = " sem assunto ", remetente) {
    console.log({
        para,
        assunto,
        remetente
    });
}
enviarEmail("joao@hcode.com.br");
