console.log(eval(new String("2+2")));
console.log(eval("\n"));
console.log(eval("2+2"));

var nombre = "Hola mundo";
console.log(nombre);

var variable = "nombre";

let nombre_;
nombre = "camilo";

const  apellido = "perez";

console.log(variable,nombre,apellido);

let nombrecompleto2= "Jhon Borda"
let nombreCompleto2= "Angel Vargas"

console.log(nombrecompleto2,nombreCompleto2)

let _1263= "hola";
let $1263= "que mas";
let a1263= "pues";

console.log(_1263,$1263,a1263)

let x,y;
x=2;
y=5;

var bandera = true;

console.log(bandera);

var z

console.log(z);

var objeto = {
    nombre: "Jhon",
    apellido: "Borda",
    telefono: 3112373193
}

console.log(objeto.nombre)

var autos = ["BWM","Audi","volvo"];

console.log(autos[0]);

class Persona {
    constructor (nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

let a = 3;
let b = 5;
z = a + b;
console.log(z);
z = a - b;
console.log(z);
z = a * b;
console.log(z);
z = a / b;
console.log(z);
z = a % b;
console.log(z);
z = a ** b;
console.log(z);

let i = 0;

console.log(++i); //pre incremento

let j = 0;

console.log(j++);

console.log(j);//pos incremento

console.log(j++);


let k = 3

console.log(--k); //post incremento

let l = 3;

console.log(l--);

console.log(l);//pre incremento

let r = 1

r+=3;
console.log(r);

r-=2;
console.log(r);


r*=2;
console.log(r);


r/=2;
console.log(r);


r%=2;
console.log(r);


r**=2;
console.log(r);


let a1 = 3
let b1 = 5
let c1 = "3"
let d1 = 3

console.log (a1==c1);
console.log (a1===c1);

console.log (a1!=c1);
console.log (a1!==c1);



let numero = 10;
resultado = (numero % 2 == 1) ? "es par" : "es impar";
console.log (resultado); 

let q = 11;
let minimo = 0;
let maximo = 10;

if( q >= minimo && q <= maximo){
    console.log(q + " esta en el rango");
}else{
    console.log(q + " no esta en el rango");

}

function miFuncion(a,b){
return a+b;}

function suma(num1,num2){
    let resultado;
    resultado = num1 + num2;
    return resultado;
} 

miFuncion(3,4); 

suma(3,4);
console.log(suma(3,4));

function saludar(){
    return "hola mundo";
}

console.log(saludar());

let m = function(a,b){return a+b};
let total = m(5,8);
console.log(total)

const factorial = function fac (n){
    return n < 2 ? 1 : n * fac (n-1);
};

console.log(factorial(6));

const sumaFuncionFlecha = (num1,num2) => num1 + num2;
resultado = sumaFuncionFlecha(5,4);

console.log(resultado);


function resta(j,m){   //declarada resta
    return j-m
}

function resta(num1,num2){
    let resultado;
    resultado = num1 - num2;
    return resultado;
} 

console.log(resta(2,4));


let ñ = function(a,b){return a-b}; // expresada resta
let totall = ñ(5,8);
console.log(totall)


const restaFuncionFlecha = (num1,num2) => num1 - num2; //Flecha resta
resultado = restaFuncionFlecha(5,4);

console.log(resultado);
//----------------------------------------------------------------------------------------//

let saludo_p=function(a){return "hola "+a +" que tengas un buen dia"}; //expresadas
let par1=function(x){if(x%2==0){return "es par"}else{return "es impar"}};
console.log(saludo_p("Juan"));
console.log(par1(6));

//-----------------------------------------------------------------------------------------------//





const mediana = (a,b,c) => {
    if(a>b && a<c || a<b && a>c)
        {return a}
    else if(b>a && b<c || b<a && b>c)
        {return b}
    else
        {return c};
}

console.log(mediana(8,7,2))

//-----------------------------------------------------------------------------------------------

let persona = {
    nombre: "Jhon",
    apellido: "Borda",
    telefono: 3112373193,
    email: "borda@.com",
    edad: 25,
    nombrecompleto: function(){
        return this.nombre + " " + this.apellido;
    }
}
console.log(persona["edad"]);
console.log(persona.edad);
console.log(persona["nombrecompleto"]());

for (nombrePropiedad in persona){
    console.log(nombrePropiedad);
    console.log(persona[nombrePropiedad])
}




let persona2 = new Object ();
persona2.nombre = "Angel";
persona2.apellido = "Vargas";

console.log(persona2.nombre);
console.log(persona2["apellido"]);
for (nombrePropiedad in persona2){
    console.log(nombrePropiedad);
    console.log(persona2[nombrePropiedad])
}



 persona.tel = 2173812893;
console.log(persona.tel);



let personaString = JSON.stringify(persona);
console.log(personaString);


//-----------------------------------------------------------------------------------------------

function PersonaReal (nombre = "Jhonathan",apellido,email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombrecompletoo = function(){
        return this.nombre + " " + this.apellido;  
     }
}

let padre = new PersonaReal("Lopez","sergio@.com");
console.log(padre);

//-------------------------------------------------------------------------------------------

let cliente1 = {
    nombre: "Jhon",
    edad: 30,
    saludar: function()
    {
         return "Hola" +" "+ this.nombre
    }
}
console.log(cliente1.saludar());

//-------------------------------------------------------------------------------------------

function fsaludar (nombre){
    return ("Hola " + nombre);
};

var cliente2 = {
    saludar: fsaludar // Asignamos la función al metodo
};

// Invocamos el metodo y le pasamos un argumento

console.log(cliente2.saludar("Catalina")); //Invocamos el metodo y le pasamos un argumento

//-------------------------------------------------------------------------------------------

//Clousure = Es que atravez de una funcion anonima se encapsula un objeto

let constructor = function(precio){
    let miObjeto = {
        PrecioBase: precio,
        iva : 1.21,
        CalcularIva : function () {
            return (this.PrecioBase * this.iva);
        }
    };
    return miObjeto;
},
precio1 = constructor(100); //Aca se define una variable


console.log(precio1.CalcularIva());

//-------------------------------------------------------------------------------------------

function miFuncion(){
    let count = 1
    function contador() {
        return count
       }
       return contador ()
       
    }

    console.log(miFuncion());


    //-------------------------------------------------------------------------------------------

    var n = 10;

    function foo () {
        var y = 20;

        function bar () {
        var z = 15;
        var output;
        return output = n + y + z;
        }
        return bar();
    }

    console.log(foo()); 


