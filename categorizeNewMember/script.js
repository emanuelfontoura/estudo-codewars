function categorizer(array){
    return array.map(odd => {
        if(odd[0] >= 55 && odd[1] > 7){
            return "Senior"
        }else{
            return "Open"
        }
    })
}

console.log(categorizer([[41, 2], [53, -7], [56, 8]]))

// FORMA MAIS SIMPLIFICADA

// USANDO OS CONCEITOS DE: ARROW FUNCTION, DESTRUCTURING E MAP

function categorizer2(array){
    return array.map(([age, handicap]) => age > 54 && handicap > 7 ? 'Senior' : 'Open')
}