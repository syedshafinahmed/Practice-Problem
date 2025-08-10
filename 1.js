function celsiusToFahrenheit(temperature){
    const tf = ((9 * temperature) / 5) + 32;
    return tf;
}
const fahrenheit = celsiusToFahrenheit(32);
console.log(fahrenheit);