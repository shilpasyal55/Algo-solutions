function getCount(str) {
    var vowelsCount = 0;
    let s = str.split("");
    s.forEach(element => {
        if (element == "a" || element == "e" || element == "i" || element == "o" || element == "u")  {
            vowelsCount++
        }
    });  
    return vowelsCount;
}

console.log(getCount("aakeeib"))