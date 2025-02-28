const palindromes = function (string) {
    // let halfLength = Math.ceil(string.length / 2);


    const lowerCase = string.toLowerCase();
    const array = Array.from(lowerCase);
    const filtered = array.filter((char) => isLetterNumb(char));
    const sliced = slicedArray(filtered);


    for (let i = 0; i < sliced.length; i++) {
        if (filtered[i] != sliced[i]) {
            return false;
        }
    }

    return true;


    //return the second half of the array

    function slicedArray(array) {
        let index;


        if (array.length % 2 == 0) { //Even
            index = Math.floor(array.length / 2);
        } else {                     ///Odd
            index = Math.ceil(array.length / 2);
        }
        return array.slice(index, array.length).reverse();

    }



    function isLetterNumb(char) {
        if (char.toLowerCase() != char.toUpperCase() || char == +char && char != " ") {
            return true;
        } else {
            return false;
        }
    }





};

// Do not edit below this line
module.exports = palindromes;
