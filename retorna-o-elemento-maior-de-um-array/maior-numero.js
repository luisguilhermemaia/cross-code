var arrayDeNumeros = [10, 3, 2, 4, 20, 11];

console.log(retornaMaiorNumero(arrayDeNumeros)); //Retorna 20
console.log(retornaMaiorNumero2(arrayDeNumeros)); //Retorna 20

//fiz assim de primeira
function retornaMaiorNumero (array) {
    var maior = array[0];
    array.forEach(function (element) {
        if(element > maior)
            maior = element;
    });
    return maior;
}

//mas lembrei do reduce 
function retornaMaiorNumero2(array){
    return array.reduce(function(a,b){return a>b ? a : b;});
}