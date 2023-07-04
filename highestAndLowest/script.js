function highAndLow(numbers){
    let arrayNumbers = numbers.split(' ').map(num => Number(num))
    return Math.max(...arrayNumbers) + ' ' + Math.min(...arrayNumbers)
}

console.log(highAndLow('1 -3 5 -6'))