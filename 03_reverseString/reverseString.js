const reverseString = function(str) {
    
    let finalOut = "";
    let length = str.length;

    for (let i = length;i > 0; i--){
        finalOut = finalOut.concat(str.at(i-1));

    }
  return finalOut;


};

// Do not edit below this line
module.exports = reverseString;
