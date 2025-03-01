const findTheOldest = function (people) {


    const oldestPerson = people.reduce((oldest, person) => {

        if (!("yearOfDeath" in oldest)) {

            const currentDate = new Date();
            let year = currentDate.getFullYear();
            return (person.yearOfDeath - person.yearOfBirth) > (year - oldest.yearOfBirth) ? person : oldest;

        }
        else {

            return (person.yearOfDeath - person.yearOfBirth) > (oldest.yearOfDeath - oldest.yearOfBirth) ? person : oldest;


        }
    }, people[0]);

    return oldestPerson;


};

// Do not edit below this line
module.exports = findTheOldest;
