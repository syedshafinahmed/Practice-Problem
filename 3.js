function noOfVowels(string){
    let lc_string = string.toLowerCase();
    let count = 0;
    for(const word of lc_string){
        if(['a', 'e', 'i', 'o', 'u'].includes(word)){
            count++;
        }
    }
    return count;
}

let abc = noOfVowels("a ee iii oooo uuuuu");
console.log(abc);
