function smallestNum(first, second, third){
    if(first < second && first < third){
        return first;
    }
    else if(second < first && second < third){
        return second;
    }
    else{
        return third;
    }
}
var values = smallestNum(-16, 8, 22);
console.log("smallest is", values);