const ingresos = [
    new Ingreso('Salario',20),
    new Ingreso('Venta',20)
];
const egresos=[
    new Egreso('Alimento',2),
    new Egreso('Alquiler',1)
];

//cargara la app cuando se abra la pag html 
let cargarApp = ()=>{
    cargarCabecero();
}
//sumara todos los elementos del array ingresos
let totalIngresos = ()=>{
    let totalIngreso=0;
    for(let ingreso of ingresos){
        totalIngreso+=ingreso.valor;
    }
    return totalIngreso;
}

//sumara los elementos del array egresos
let totalEgresos = ()=>{
    let totalEgreso=0;
    for(let egreso of egresos){
        totalEgreso+=egreso.valor;
    }
    return totalEgreso;
}
//actualizar funciones del cabecero
let cargarCabecero = ()=>{
    let presupuesto = totalIngresos()-totalEgresos();
    let porcentajeEgreso = totalEgresos()/totalIngresos();

    document.getElementById('presupuesto').innerHTML=formatoMoneda(presupuesto);
    document.getElementById('porcentaje').innerHTML=formatoPorcentaje(porcentajeEgreso);
    document.getElementById('ingresos').innerHTML=formatoMoneda(totalIngresos());
    document.getElementById('egresos').innerHTML=formatoMoneda(totalEgresos());
    
}
const formatoMoneda = (valor)=>{
    return valor.toLocaleString('en-US',{style:'currency',currency:'COP',minimunFractionDigits:2});
}
const formatoPorcentaje = (valor)=>{
    return valor.toLocaleString('en-US',{style:'percent',minimunFractionDigits:2});
}