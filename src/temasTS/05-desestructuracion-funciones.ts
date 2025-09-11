<<<<<<< HEAD
export interface Producto{
=======
interface Producto{
>>>>>>> 28c38f03f9cad3bc4161f98edba9b47f0143ca9e
    nombre:string,
    precio:number
}

const telefono:Producto={
    nombre:'Iphone 14',
    precio:15000
}

const tablet:Producto={
    nombre:'Ipad Air',
    precio:1200
}

function calcularISV(productos:Producto[]):number{
    let total=0;
    for(let producto of productos){
        total+=producto.precio
    }
    return total*0.15
}
const articulos=[telefono,tablet]
const isv=calcularISV(articulos)
console.log('ISV',isv);

//Desestructuracion de funciones
<<<<<<< HEAD
export function calcularISV2(productos:Producto[]):[number,number]{
=======
function calcularISV2(productos:Producto[]):[number,number]{
>>>>>>> 28c38f03f9cad3bc4161f98edba9b47f0143ca9e
    let total=0;
    for(let producto of productos){
        total+=producto.precio
    }
    return [total,total*0.15]
}
const [total,isv2]=calcularISV2(articulos)
console.log('Total:',total);
console.log('ISV 2:',isv2);