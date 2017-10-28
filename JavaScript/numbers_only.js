//var newArray = numbersOnly([1, "apple", -3, "orange", 0.5]);
// newArray is [1, -3, 0.5]

function numbersOnly(arr) {
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        if(typeof(arr[i]) === "number"){
            newArr.push(arr[i]);   
        }
    }
    return newArr;
}
var newArray = numbersOnly([1, "apple", -3, "orange", 0.5]);
console.log(newArray);