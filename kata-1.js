const sumLargestNumbers = function(data) {
    var first = 0
    var second = 0
    for (let i = 0; i < data.length; i++){
        if (data[i] > first ){
            first = data[i] 
        }
    }
    for (let x = 0; x < data.length; x++){
        if ((data[x] > second) && (data[x] != first) ){
            second = data[x]
            
        }
    }
    return first + second
}
  



console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]))