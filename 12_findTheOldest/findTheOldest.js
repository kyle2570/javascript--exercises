const findTheOldest = function (people) {

    //   if (person.yearOfDeath == undefined) {

    //   }

    //   else {


    const oldestPerson = people.reduce((oldest, person) =>

        (person.yearOfDeath - person.yearOfBirth) > (oldest.yearOfDeath - oldest.yearOfBirth) ? person : oldest);


    return oldestPerson;

    //}


};

// Do not edit below this line
module.exports = findTheOldest;
