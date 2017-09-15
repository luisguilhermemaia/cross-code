var towerSize = 10;

for (var count = 0; count < towerSize; count++) {
    printLine(count, towerSize);
}

function printLine(count, towerCenter) {
    var blankSpaceQt = towerCenter - (count);
    var hashtagQt = (count * 2) + 1;
    var result = ' '.repeat(blankSpaceQt);
    result += '#'.repeat(hashtagQt);

    console.log(result);
}