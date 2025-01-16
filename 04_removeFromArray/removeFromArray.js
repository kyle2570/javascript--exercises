const removeFromArray = function(inputArray,...toRemove) {

    for ( let i = 0; i < toRemove.length; i++){
        for ( let j = 0; j < inputArray.length;j++){
         if (toRemove[i] === inputArray[j]) {
                 inputArray.splice(j,1);
                 j--;
         }
        }       
    
    
    }

    return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
