/*
Ser autenticavel significa ter o método autenticar

Duck Type
*/

export class SistemaAutenticação{
    static login(autenticavel, senha){
        if(SistemaAutenticação.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        return false;
    }
    static ehAutenticavel(autenticavel){
        return "autenticar" in autenticavel && 
        autenticavel.autenticar instanceof Function
    }
}