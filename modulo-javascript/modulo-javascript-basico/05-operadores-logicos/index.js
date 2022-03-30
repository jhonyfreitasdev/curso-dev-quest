/*
    == igual ---> a==b ---> verdadeiro se a for igual a b
    === idêntico ---> a===b ---> verdadeiro se a for idêntico a b tanto no valor quanto no tipo 
    != diferente ---> a!=b ---> verdadeiro quando a for diferente de b 
    !== não idêntico ---> a!== ---> verdadeiro quando o a não for idêntico a b
    < menor que ---> a<b ---> verdadeiro quando a for menor que b 
    <= menor igual que ---> a<=b ---> verdadeiro quando a for menor ou igual a b
    > maior que ---> a>b ---> verdadeiro quando a for maior que b
    < maior igual que ---> a>=b ---> verdadeiro quando a for maior ou igual a b

*/ 
const a = 2
const b = 2

console.log(a>=b);





//AND  --->  &&

console.log(a === b && a <= b);
// V e V = V

console.log(a === b && a < b);
// V e F = F

console.log(a > b && a === b);
// F e V = F

console.log(a > b && a < b);
// F e F = F

//AND  --->  &&





//OR  --->  ||

console.log(a === b || a <= b);
// V ou V = V

console.log(a === b || a < b);
// V ou F = V


console.log(a > b || a === b);
// F ou V = V

console.log(a > b || a < b);
// F ou F = F

//OR  --->  ||




//NOT  --->  !

console.log(!(a === b));
// false

console.log(!(a < b));
// true

//NOT  --->  !
