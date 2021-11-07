class Dato{
    constructor(descripcion,valor){
        this._valor=valor;
        this._descripcion=descripcion;
    }
    get descripcion(){
        return this._descripcion;
    }
    get valor(){
        return this._valor;
    }
    set valor(valor){
        this._valor=valor;
    }
    set descripcion(descrip){
        this._descripcion=descrip
    }
}