var array = new Set();

while (array.size < 6) {
    array.add(randomNumberBetween1and60());
}

console.log(array);

function verificaSeONumeroExiste(array) {
    for (var index = 0; index < array.length; index++) {
        if (array[index] == temp) {
            return false;
        }
    }
    return true;
}

function randomNumberBetween1and60() {
    return Math.floor((Math.random() * 60) + 1);
}