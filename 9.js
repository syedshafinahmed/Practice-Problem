function findAveragePhonePrice(phones) {
    let sum = 0;
    let avg = 0;
    for (let phone of phones) {
        sum += phone.price;
    }
    avg = sum / phones.length;
    return avg;
}
const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];

console.log(findAveragePhonePrice(phones).toFixed(2));