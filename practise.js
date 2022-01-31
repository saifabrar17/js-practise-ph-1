// Largest Number from array
function arrayNumbers(numbers){
    let largest = 0;
    for(let i = 0; i<numbers.length; i++){
        let elements = numbers [i];
        if(elements > largest){
            largest = elements;
        }
        
    }
    return largest;
}

const ages = [12, 36, 45, 87, 96, 42];
const oldest = arrayNumbers(ages);
console.log(oldest);
