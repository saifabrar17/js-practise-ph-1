// //METHOD 1
// const numbers = [12, 36, 45, 87, 96, 42];
// let sum = 0;

// for(let i = 0; i<numbers.length; i++){
//     let elements = numbers [i];
//     sum = sum + elements;
    
// }
// console.log(sum);


METHOD 2
function arrayTotal(numbers){
    let sum = 0;
    for(let i = 0; i<numbers.length; i++){
        let elements = numbers [i];
        sum = sum + elements;
        
    }
    return sum;
}

let total = arrayTotal([10, 20, 30]);
console.log(total);
