// Create a function called chopIt that takes in an array and two numbers.
// It deletes the original 3rd index value and inserts the two numbers in it's place.

var chopIt;

chopIt = function(arr,x,y) {
    return arr.splice(3,1,x,y)
}

// DO NOT DELETE
module.exports = chopIt;
