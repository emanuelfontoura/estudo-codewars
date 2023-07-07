function rgb(r, g, b){
    let array = new Array(r, g ,b)

    let newArray = array.map(num => {
        if(num > 255){
            return 255
        }else if(num < 0){
            return 0
        }else{
            return Math.round(num)
        }
    })

    let arrayHex = newArray.map(num => {
        let hexNum = num.toString(16).toUpperCase()
        return hexNum.length < 2 ?  '0' + hexNum : hexNum
    })

    return arrayHex.join('')
}

console.log(rgb(36, 4, 6))