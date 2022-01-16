module.exports = function reverse (n) {
    if (n < 0) {
        n = n * -1;
    }

    if (n < 10) {
        return n;
    }

    let nArr = [...n.toString()];
    if (nArr[nArr.length - 1] === '0') {
        nArr.pop();
    }
    return Number(nArr.reverse().join(''));
}
