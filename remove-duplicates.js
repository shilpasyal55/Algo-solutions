//Count how many characters are repeating in a string
//Like we are given a string "aaBbcdEe"
//the answer should be 3
//as a,b and e characters are repeating


// First Solution
function duplicateCount(text) {
    let new_text = text.toLowerCase().split("");
    console.log(new_text);

    let count = 0;
     for (let i = 0; i < new_text.length; i++) {
        let br = 1;
        for (let j = i + 1; j < new_text.length; j++) {
            if (new_text[i] == new_text[j]) {
                count++;
                br = 0;
                break;
            }
        }
        if (br == 0) {
            new_text = new_text.filter(elem => elem != new_text[i])
            i = -1; continue;
        }
     }
    return count;
}

//Second Solution
function duplicateCount2(text) {
    let new_text = text.toLowerCase().split("").sort();
    let count = 0
    new_text.forEach(element => {
        let t = new_text.lastIndexOf(element) - new_text.indexOf(element)
        if(t > 0) {
            count++
        }
         new_text.splice(new_text.indexOf(element),t)
    });

    console.log(count);
}

duplicateCount2("aaBbcdEe");
