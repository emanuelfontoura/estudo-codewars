function nbYear(p0, percent, aug, p) {
    let years = 0
    while(p0 < p){
        years++
        p0 = Math.floor(p0 + (p0 * (percent/100)) + aug)
    }
    return years
}

console.log(nbYear(1500000, 2.5, 10000, 2000000))