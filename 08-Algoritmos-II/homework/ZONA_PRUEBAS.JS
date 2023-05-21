var countArray = function(array) {
    // Tu código aca:
    let count=0;
    array=array.flat(Infinity)
    for (let i = 0; i < array.length; i++) {
       count+=array[i]
    }
    return count;
    
}

console.log(countArray([1, [2, [3,4]], [5,6], 7]))