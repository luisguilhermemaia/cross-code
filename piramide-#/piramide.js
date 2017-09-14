var number = 10;
var count = 10;
var x = 0;
while (x < number) {
    imprimeLinha(x, count);
    x++;
    count--;
}

function imprimeLinha(n, count) {
    n = n + 1;
    var numero = (n * 2) - 1;
    var str1 = '';

    for (var j = 0; j < count; j++) {
        str1 = ' ' + str1;
    }

    for (var i = 0; i < numero; i++) {
        str1 = str1.concat('#');
    }
    console.log(str1);
}