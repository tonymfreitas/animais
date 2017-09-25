// JavaScript Document
//adiciona mascara de cnpj
function MascaraCNPJ(cnpj) {
        if (mascaraInteiro(cnpj) == false) {
                event.returnValue = false;
        }
        return formataCampo(cnpj, '00.000.000/0000-00', event);
}

/*function MaskCNPJ(cnpj) {
        var value = cnpj.value.toString();
        if (!isNaN(cnpj.value.toString())) {
                if (value.length == 2 || value.length == 6) {
                        value += '.';
                } else if (value.length == 10) {
                        value += '/';
                } else if (value.length == 15) {
                        value += '-';
                }
        } else {
                value = value.substring(0, value.length-1);
        }
        cnpj.value = value;
} */

//adiciona mascara de cep
function MascaraCEP(cep) {
        if (mascaraInteiro(cep) == false) {
                event.returnValue = false;
        }
        return formataCampo(cep, '00.000-000', event);
}

//adiciona mascara de data
function MascaraData(data) {
        if (mascaraInteiro(data) == false) {
                event.returnValue = false;
        }
        return formataCampo(data, '00/00/0000', event);
}

//adiciona mascara ao telefone
function MascaraTelefone(tel) {
        if (mascaraInteiro(tel) == false) {
                event.returnValue = false;
        }
        return formataCampo(tel, '(00)00000-0000', event);
}

function MascaraMoeda(moeda) {
        if (mascaraInteiro(moeda) == false) {
                event.returnValue = false;
        }
        if (moeda.value.toString().length > 9) {
                moeda.value = moeda.value.toString().substring(0, 8);
        }
        return formataCampo(moeda, 'R$0000,00', event);
}

//adiciona mascara ao CPF
function MascaraCPF(cpf) {
        if (mascaraInteiro(cpf) == false) {
                event.returnValue = false;
        }
        return formataCampo(cpf, '000.000.000-00', event);
}

//valida telefone
function ValidarTelefone(tel) {
        exp = /\(\d{2}\)\d{5}\-\d{4}/
        if (!exp.test(tel)) {
                return false;
        } else {
                return true;
        }
}

//valida CEP
function ValidarCep(cep) {
        exp = /\d{2}\.\d{3}\-\d{3}/
        if (!exp.test(cep.value))
                alert('Numero de Cep Invalido!');
}

//valida data
function ValidarData(data) {
        exp = /\d{2}\/\d{2}\/\d{4}/
        if (!exp.test(data)) {
                return false;
        } else { 
                return true;
        }
}

//valida o CPF digitado
function ValidarCPF(Objcpf) {
        var cpf = Objcpf;
        exp = /\.|\-/g
        cpf = cpf.toString().replace(exp, "");
        var digitoDigitado = eval(cpf.charAt(9) + cpf.charAt(10));
        var soma1 = 0, soma2 = 0;
        var vlr = 11;

        for (i = 0; i < 9; i++) {
                soma1 += eval(cpf.charAt(i) * (vlr - 1));
                soma2 += eval(cpf.charAt(i) * vlr);
                vlr--;
        }
        soma1 = (((soma1 * 10) % 11) == 10 ? 0 : ((soma1 * 10) % 11));
        soma2 = (((soma2 + (2 * soma1)) * 10) % 11);

        var digitoGerado = (soma1 * 10) + soma2;
        if (digitoGerado != digitoDigitado) {
                return false;
        } else {
                 return true;
        }

}

//valida numero inteiro com mascara
function mascaraInteiro() {
        if (event.keyCode < 48 || event.keyCode > 57) {
                event.returnValue = false;
                return false;
        }
        return true;
}

//valida o CNPJ digitado
function ValidarCNPJ(ObjCnpj) {
        var cnpj = ObjCnpj;
        var valida = new Array(6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2);
        var dig1 = new Number;
        var dig2 = new Number;

        exp = /\.|\-|\//g
        cnpj = cnpj.toString().replace(exp, "");
        var digito = new Number(eval(cnpj.charAt(12) + cnpj.charAt(13)));

        for (i = 0; i < valida.length; i++) {
                dig1 += (i > 0 ? (cnpj.charAt(i - 1) * valida[i]) : 0);
                dig2 += cnpj.charAt(i) * valida[i];
        }
        dig1 = (((dig1 % 11) < 2) ? 0 : (11 - (dig1 % 11)));
        dig2 = (((dig2 % 11) < 2) ? 0 : (11 - (dig2 % 11)));

        if (((dig1 * 10) + dig2) != digito) {
                return false;
        } else {
                return true;
        }

}

function aplicarMascaraCpf(cpf) {
        var parte1 = cpf.substring(0,3);
        var parte2 = cpf.substring(3,6);
        var parte3 = cpf.substring(6,9);
        var parte4 = cpf.substring(9,11);
        return parte1 + '.' + parte2 + '.' + parte3 + '-' + parte4;
}

function aplicarMascaraTelefone(telefone) {
        var parte1 = telefone.substring(0,2);
        var parte2 = telefone.substring(2,7);
        var parte3 = telefone.substring(7,11);
        return '(' + parte1 + ')' + parte2 + '-' + parte3;
}

//formata de forma generica os campos
function formataCampo(campo, Mascara, evento) {
        var boleanoMascara;

        var Digitato = evento.keyCode;
        exp = /\-|\.|\/|\(|\)|\R|\$|\,|\  /g
        campoSoNumeros = campo.value.toString().replace(exp, "");

        var posicaoCampo = 0;
        var NovoValorCampo = "";
        var TamanhoMascara = campoSoNumeros.length;;

        if (Digitato != 8) { // backspace 
                for (i = 0; i <= TamanhoMascara; i++) {
                        boleanoMascara = ((Mascara.charAt(i) == "-")
                                || (Mascara.charAt(i) == ".")
                                || (Mascara.charAt(i) == "/"));
                        boleanoMascara = boleanoMascara
                                || ((Mascara.charAt(i) == "(")
                                        || (Mascara.charAt(i) == ")")
                                        || (Mascara.charAt(i) == " "));
                        boleanoMascara = boleanoMascara || (Mascara.charAt(i) == "R")
                                || (Mascara.charAt(i) == "$")
                                || (Mascara.charAt(i) == ",")
                        if (boleanoMascara) {
                                NovoValorCampo += Mascara.charAt(i);
                                TamanhoMascara++;
                        } else {
                                NovoValorCampo += campoSoNumeros.charAt(posicaoCampo);
                                posicaoCampo++;
                        }
                }
                campo.value = NovoValorCampo;
                return true;
        } else {
                return true;
        }
}