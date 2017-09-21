(function(){
    angular.module('animais').service('clearMaskService', clearMaskService);

    function clearMaskService(){
        this.clearMaskCpf = function(cpf) {
            var cpfString = cpf.toString();
            return cpfString.replace('.', '').replace('.', '').replace('-', '').trim();
        }; 
        this.clearMaskCnpj = function(cnpj) {
            return cnpj.replace('.','').replace('.','').replace('/','').replace('-','').trim();
        };
        this.clearMaskValor = function(valor) {
            return valor.replace('.', '').replace(',', '').replace('R$', '').trim();
        };
        this.clearMaskCep = function(cep) {
            return cep.replace('.','').replace('-','').trim();
        };
        this.clearMaskTelefone = function(telefone) {
            var telefoneString = telefone.toString();
            return telefoneString.replace('(','').replace(')','').replace('-','').trim();
        }
        this.aplicarMaskCpf = function(cpf) {
            var cpfString = cpf.toString();
            var part1 = cpf.substring(0,3);
            var part2 = cpf.substring(3,6);
            var part3 = cpf.substring(6,9);
            var part4 = cpf.substring(9,11);
            return part1 + '.' + part2 + '.' + part3 + '-' + part4;
        }
    }

})();