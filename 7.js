function smallestName(names){
    let small = names[0];
    for(let i = 0; i < names.length; i++){
        if(small.length > names[i].length){
            small = names[i];
        }
    }
    return small;
}
const friends = smallestName(['rahim', 'robin', 'rafi', 'ron', 'rashed']);
console.log(friends);