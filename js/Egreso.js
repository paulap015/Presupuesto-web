class Egreso extends Dato{
    static contadorEgresos=0;
    constructor(valor,descripcion){
        super(descripcion,valor);
        this._id=++Egreso.contadorEgresos;

    }
    get id(){
        return this._id;
    }
}