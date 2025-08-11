function lowest(numbers){
    let low = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] < low){
            low = numbers[i];
        }
    }
    return low;
}
const heights = lowest([167, 190, 120, 165, 137]);
console.log(heights);
