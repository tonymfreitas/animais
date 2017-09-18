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
    }

})();