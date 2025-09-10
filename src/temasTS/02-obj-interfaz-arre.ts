interface Alumno{
    nombre:string,
    edad:number,
    activo:boolean,
    email?:string, //el ? indica que es opcional
    nota:number | string //puede ser numero o string
}

const alumno:Alumno={
    nombre:"Juan",
    edad:23,
    activo:true,
    email:"juan123@gmail.com",
    nota:9.5
}
console.table(alumno)

let mascotas:string[]=['perro','gato','loro']
mascotas.push("tortuga")
console.log(mascotas)
mascotas[1]='pez'
console.log(mascotas)

let idades:(number|string)[]=[29,45,67,'89']
idades.push(90)
idades.push('100')
console.log(idades)
