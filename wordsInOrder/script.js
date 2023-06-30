function order(words){
    var wordsInOrder = ""
    if(words === ""){
        return ""
    }else{
        const arrayWords = words.split(' ')
        for(let c = 1; c < 10; c++){
            arrayWords.forEach(word =>{
                if(word.includes(c.toString())){
                    wordsInOrder += word + " "
                }
            })
        }
    }

    return wordsInOrder.trim()
}