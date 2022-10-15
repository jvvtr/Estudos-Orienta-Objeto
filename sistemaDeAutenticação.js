/*
    Ser autenticavel no sistema significa ter um metodo "autenticar"

    DuckType
*/


export class sistemaDeAutenticacao{

    static login(autenticavel, senha){
        if(sistemaDeAutenticacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        return false
    }

    static ehAutenticavel(autenticavel){
       return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function
    }
}