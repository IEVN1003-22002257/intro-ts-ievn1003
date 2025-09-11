//herencia en TypeScript
class Persona3{
    protected nombre:string;
    protected edad:number;
    protected direccion:string;
    constructor(nombre:string, edad:number, direccion:string){
        this.nombre=nombre;
        this.edad=edad;
        this.direccion=direccion;
    }
    mostrarPersona(){
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, Dirección: ${this.direccion}`);
    }
}
class Empleado3 extends Persona3{  //Empleado hereda de Persona
    private salario:number;
    constructor(nombre:string, edad:number, direccion:string, salario:number){//constructor de Empleado
        super(nombre, edad, direccion);
        this.salario=salario;//llamada al constructor de la clase padre
    }
    imprimir(){//metodo de Empleado
        if(this.salario>1500){
            this.mostrarPersona();//llamada al metodo de la clase padre
            console.log(`Salario: ${this.salario}`);
        }
        else{
            console.log("Empleado no gana chido");
        }
}      
}
const persona3=new Persona3("Ana",28,"Calle 123");
persona3.mostrarPersona();
 
const empleado3=new Empleado3("Luis",30,"Calle 456",1600);
empleado3.imprimir();
 
const empleado4=new Empleado3("Carlos",25,"Calle 789",1400);
empleado4.imprimir();