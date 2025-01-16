const sumAll = function(numA,numB) {

    let sum = 0;
    let sortA = 0;
    let sortB = 0;

    if (numA > numB){
        sortA = numB;
        sortB = numA;
    }else{
        sortA = numA;
        sortB = numB;

    }

    if ( !Number.isInteger(sortA)||!Number.isInteger(sortB)|| sortA < 0 || sortB <0){
    return "ERROR";
    } else{

        for (let i = sortA; i <= sortB; i++){
            sum = sum + i;
        }
        return sum;



    }



};

// Do not edit below this line
module.exports = sumAll;
