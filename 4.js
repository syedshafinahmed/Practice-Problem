function findLongestWord(sentence){
    let words = sentence.split(" ");
    let longestWord = " ";
    for(let i = 0; i < words.length; i++){
        if(words[i].length > longestWord.length){
            longestWord = words[i];
        }
    }
    return longestWord;
}
const sentence = findLongestWord("I am learning Programming to become a programmer");
console.log(sentence);