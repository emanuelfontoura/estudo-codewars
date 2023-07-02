function wordsReverse(string){
    if(string.indexOf(" ") === -1){
        if(string.length >= 5){
            let arrayStrOneWord = string.split("")
            return arrayStrOneWord.reverse().join("")
        }else{
            return string
        }
    }else{
        let newString = []
        let arrayString = string.split(" ")

        arrayString.forEach(str => {
            if(str.length >= 5){
                let arrayStr = str.split("")
                newString.push(arrayStr.reverse().join(""))
            }else{
                newString.push(str)
            }
        })
        return newString.join(" ")  
    }
    
}

console.log(wordsReverse("Welcome to my first code in Visual Studio"))