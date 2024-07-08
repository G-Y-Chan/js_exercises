const findTheOldest = function(people) {
    let oldest = people[0];
    for (let i = 1; i < people.length; i++) {
        let currPerson = people[i];
        if (findAge(currPerson) > findAge(oldest)) {
            oldest = currPerson;
        }
    }
    return oldest;
};

function findAge(person) {
    let currYear = new Date().getFullYear();
    let finalYear = (person.yearOfDeath === undefined) ? currYear : person.yearOfDeath;
    return finalYear - person.yearOfBirth;
}