var arrayDeNumeros = [10, 3, 2, 4, 20, 11];

console.log(ordenaNumeros(arrayDeNumeros)); //Retorna [2, 3, 4, 10, 11, 20]

// esse eu fiz o bubble na peia
function ordenaNumeros(array) {
    array.forEach(function () {
        array.forEach(function (element, index) {
            var proximoElemento = array[index + 1];
            if (element > proximoElemento) {
                array[index] = proximoElemento;
                array[index + 1] = element;
            }
        });
    });
    return array;
}

arrayDeNumeros = [10, 3, 2, 4, 20, 11];
//esse eu recorri a documentação
arrayDeNumeros = arrayDeNumeros.sort((a, b) => a - b);

console.log(arrayDeNumeros);
