var array = [];

while (array.length < 6) {
    var temp = randomNumberBetween1and60();
    for (var index = 0; index < array.length; index++) {
        if (array[index] == temp) {
            break;  
        }
    }
    array.push(temp);
}

function randomNumberBetween1and60() {
    return Math.floor((Math.random() * 60) + 1);
}