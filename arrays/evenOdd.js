// Create a function called evenOdd that takes in the array and pushes into a
// new array "even" or "odd" for every value in the array, depending upon
// whether they are even or odd number values. Return the new array.
// Hint: Use the modulus operator

var evenOdd;
evenOdd = function(t) {
    var e=[];
    var x = "even";
    var y = "odd";
    for (let i=0;i<t.length;i++) {
        if (t[i]%2===0) {
            e.push(x) }
        else { e.push(y) 
             }
    }
    return e;
}
// DO NOT DELETE
module.exports = evenOdd;
