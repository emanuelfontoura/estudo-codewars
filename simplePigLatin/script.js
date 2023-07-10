function pigIt(str){
    let arrayStr = str.split(' ')
    console.log(arrayStr)
    let newArrayStr = arrayStr.map(aStr => {
        aStr = aStr.replace(/\s+/g, ' ')
        if(!(/^[\p{P}]+$/u.test(aStr))){
            newStr = aStr.substring(1) + aStr[0] + 'ay'
            return newStr
        }else{
            return aStr
        }
    })
    return newArrayStr.join(' ')
  }

  console.log(pigIt('Pig latin is cool !!'))