import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    
    static numeroDeContas = 0;
    
    constructor(cliente, agencia){
        super(0, cliente, agencia);
        ContaCorrente.numeroDeContas += 1;
    } // o super. traz a classe extends

    // esse sacar abaixo sobreescreve o metodo sacar da classe mãe devido a sua taxa
    sacar(valor){

        let taxa = 1.1;
        return this._sacar(valor, taxa)
    }
}
