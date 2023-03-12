// Apuntes del BootCamp JS 12/03/2023

const human1 = {
    name : "Alberto", 
    lastname : "Maqueda", 
    age : 24
}

const human2 = {
    name : "Fer", 
    lastname : "Primo", 
    age : 25
}

const human3 = {
    name : "Manu", 
    lastname : "deAlva", 
    age : 24
}


//No usar var
let group = []

group.push(human1);
group.push(human2);


console.log(group);

console.log(group.find(human3)) 


group.filter

group.join

group.findIndex


group.values

group.forEach

group.pop



group.concat

group.includes

group.shift

group.slice

group.splice



const firstWeek = function() {
    console.log(human1);
    human1.id = 1;
    console.log(human1['id']);
    
    //Mutacion de objetos => Mala practica
    delete human1.id ;
    
    //PRIMITIVOS
    /*
        - string
        - number
        - bigint
        - boolean
        - undefined
        - symbol
    */
    
    //Asignacion de valores por valor y referencia
    let nombre = "Guillermo";
    let nickname = nombre; //A los PRIMITIVOS se les asigna por VALOR
    nombre = "Willy";
    console.log(nickname);//Sigue siendo 'Guillermo'
    
    let alien = human;
    alien.name = 'Antonio';//A los OBJETOS se les asigna por REFERENCIA
    console.log(human1.name)//Al referenciar a otra variable, la modifica en consecuencia ('Antonio')
    human1.name = 'Alberto';
    console.log(alien.name)//De forma bidireccional
    
    
        //FUNCIONES PURAS
    /*
        No tienen efectos secundarios:
            No deben modificar ningun estado fuera de su alcance, como variables
            globales o referencias.
    
        Es determinista:
            Dada una entrada, la salida sera siempre la misma
    */
    
    function sayHello() {//declaration 
        console.log('Hello World ')
    }
    sayHello(); //expression (returns something)
    
    const sayBye = function(name){// Parametros de la funcion
        console.log('Bye ' + name);
    }
    sayBye('Alberto');//argumentos
    
        //OPERADORES LOGICOS EN JS
    /*
        - OR: RETORNA LE PRIMER VALOR VERDADERO
        - AND: RETORNA EL PRIMER VALOR FALSO
        - NOT: RETORNA CONTRARIO AL BOOLEANO
    */
}
