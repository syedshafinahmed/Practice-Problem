function count(numbers, find){
    let times = 0;
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] === find){
            times++;
        }
    }
    return times;
}
const array = count([1, 2, 3, 4, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1);
console.log(array);
