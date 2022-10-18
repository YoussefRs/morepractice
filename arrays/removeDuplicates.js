// Write a JavaScript function removeDuplicates that removes duplicate values fom an array.

var removeDuplicates;
removeDuplicates = function(t) {
    var ne = [];
    for (let i=0; i<t.length; i++) {
        if (ne.indexOf(t[i])===-1) {
            ne.push(t[i]);
        }
    }
    return ne;
}

// DO NOT DELETE
module.exports = removeDuplicates;
