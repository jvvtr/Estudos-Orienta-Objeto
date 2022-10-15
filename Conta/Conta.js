export class Conta{

    constructor(saldoInicial, cliente, agencia){
            if(this.constructor == Conta){
            throw new Error ("Você não pode instanciar um objeto tipo conta diretamente!")
        }
            //conta é uma classe abstrata apenas para outras classes a erdarem
            this._saldo = saldoInicial;
            this._cliente = cliente;
            this._agencia = agencia;
    }

    set cliente(novoValor){
        
        if (novoValor instanceof Cliente){

            this._cliente = novoValor;
        }
    }

    get cliente(){

        return this._cliente;
    }

    get saldo(){

        return this._saldo;
    }
    
    // Sacar é um metodo que deve ser sobreescrito porque cada conta tem a sua particularidade
    sacar(valor){

        throw new Error ("O Sacar é apenas um metodo abstrato, você deve sobreescrever em cada tipo de conta")
    }

    _sacar(valor){
    
        let taxa = 1;
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            
                this._saldo -= valorSacado;
                return valorSacado;
        }

        return 0;
    }   
    
    depositar(valor){
    
        if(valor <= 0){
    
                return;
        }
            this._saldo += valor;
    }
    
    transferir(valor, conta){

        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
} 