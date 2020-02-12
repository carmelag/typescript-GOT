var Status;
(function (Status) {
    Status[Status["UNKNOWN"] = 0] = "UNKNOWN";
    Status[Status["MARRIED"] = 1] = "MARRIED";
    Status[Status["SINGLE"] = 2] = "SINGLE";
    Status[Status["WIDOWER"] = 3] = "WIDOWER";
})(Status || (Status = {}));
;
var Gender;
(function (Gender) {
    Gender[Gender["UNKNOWN"] = 0] = "UNKNOWN";
    Gender[Gender["MALE"] = 1] = "MALE";
    Gender[Gender["FEMALE"] = 2] = "FEMALE";
})(Gender || (Gender = {}));
;
;
function createNewUser(config) {
    var person = { name: "new", surname: "new", age: 0, socialStatus: Status.UNKNOWN, gender: Gender.UNKNOWN };
    person.name = config.name;
    person.surname = config.surname;
    person.age = 34;
    person.socialStatus = config.socialStatus;
    person.gender = config.gender;
    return person;
}
function ageOfUser(person) {
    return "Age is: " + person.age;
}
function statusOfUser(person) {
    return "Status is: " + person.socialStatus;
}
var allUsers;
allUsers = [
    {
        name: "John", surname: "Snow", age: 28, socialStatus: Status.SINGLE, gender: Gender.MALE
    },
    {
        name: "Arya", surname: "Stark", age: 17, socialStatus: Status.SINGLE, gender: Gender.FEMALE
    },
    {
        name: "Daenerys", surname: "Targaryen", age: 24, socialStatus: Status.WIDOWER, gender: Gender.FEMALE
    },
    {
        name: "Tyrion", surname: "Lannister", age: 33, socialStatus: Status.MARRIED, gender: Gender.MALE
    },
    {
        name: "Sansa", surname: "Stark", age: 24, socialStatus: Status.MARRIED, gender: Gender.FEMALE
    },
    {
        name: "Cercei", surname: "Lannister", age: 43, socialStatus: Status.WIDOWER, gender: Gender.FEMALE
    },
    {
        name: "Theon", surname: "Greyjoy", age: 28, socialStatus: Status.SINGLE, gender: Gender.MALE
    },
    {
        name: "Oberyn", surname: "Martel", age: 45, socialStatus: Status.MARRIED, gender: Gender.MALE
    }
];
var marriedUsers = new Array();
var availableUsers = new Array();
allUsers.forEach(function (charachter) {
    var newUser = createNewUser(charachter);
    if (newUser.socialStatus === Status.MARRIED) {
        marriedUsers.push(newUser);
    }
    else {
        availableUsers.push(newUser);
    }
});
function getMaxAge(age, maxAge) {
    if (age > maxAge) {
        maxAge = age;
        return true;
    }
    return false;
}
function findOldest(charachters) {
    var maxAge = 0;
    var oldestCharachter;
    charachters.forEach(function (charachter) {
        var greaterAge = getMaxAge(charachter.age, maxAge);
        if (greaterAge) {
            oldestCharachter = charachter;
        }
    });
    return oldestCharachter;
}
function findWomen(charachters) {
    var women;
    women = new Array();
    charachters.forEach(function (charachter) {
        if (charachter.gender === Gender.FEMALE) {
            women.push([charachter.name, charachter.surname, charachter.age]);
        }
    });
    return women;
}
console.log(marriedUsers);
var marriedSection = document.getElementById("married-people");
marriedUsers.forEach(function (married) {
    var innerDiv = document.createElement("div");
    innerDiv.innerHTML = married.name + " " + married.surname;
    marriedSection.append(innerDiv);
});
var singleSection = document.getElementById("single-people");
console.log(availableUsers);
availableUsers.forEach(function (available) {
    var innerDiv = document.createElement("div");
    innerDiv.innerHTML = available.name + " " + available.surname;
    singleSection.append(innerDiv);
});
var oldCharachter = findOldest(allUsers);
document.getElementById("oldest-person").innerHTML = oldCharachter.name + " " + oldCharachter.surname;
console.log("The oldest charachter among these people is: " + oldCharachter.name);
var femaleCharacters = findWomen(allUsers);
var girlsAgeSection = document.getElementById("age-of-girls");
var br = document.createTextNode("<br />");
femaleCharacters.forEach(function (woman) {
    var innerDiv = document.createElement("div");
    innerDiv.innerHTML = woman[0] + " " + woman[1] + " is " + woman[2] + " years old";
    girlsAgeSection.append(innerDiv);
});
