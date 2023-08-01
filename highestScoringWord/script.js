function high(str){
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let arrayIndex = []
    
    const arrayStr = str.split(' ')
    const arrayValues = arrayStr.map(phrase => {
        const arrayLetters = phrase.split('')
        const arrayIndex = arrayLetters.map(item => {
            let index = (alphabet.findIndex(l => l === item)) + 1
            return index
        })
        return arrayIndex
    })

    const arraySum = arrayValues.map((arrayValue, index) => {
        const sumValues = arrayValue.reduce((acc, value) => {
            acc += value
            return acc
        })
        arrayIndex.push(index)
        return sumValues
    })

    const highestSum = Math.max(...arraySum)
    const indexHighestValue = arraySum.findIndex(i => i === highestSum)
    return arrayStr[indexHighestValue]
}

console.log(high('aaa b'))