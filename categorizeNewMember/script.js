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