//USe of ENUM
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
//Creates and returns a new user
function createNewUser(config) {
    var person = { name: "new", surname: "new", age: 0, socialStatus: Status.UNKNOWN, gender: Gender.UNKNOWN };
    person.name = config.name;
    person.surname = config.surname;
    person.age = 34;
    person.socialStatus = config.socialStatus;
    person.gender = config.gender;
    return person;
}
//Returns the age of a User
function ageOfUser(person) {
    return "Age is: " + person.age;
}
//Returns the status of a USer
function statusOfUser(person) {
    return "Status is: " + person.socialStatus;
}
//Array of users, type is UserConfig
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
//Arrays that will be returned to the frontend containing the married/single people
var marriedUsers = new Array();
var availableUsers = new Array();
//Creates all te users and push them in the right array, depending on their status
allUsers.forEach(function (charachter) {
    var newUser = createNewUser(charachter);
    if (newUser.socialStatus === Status.MARRIED) {
        marriedUsers.push(newUser);
    }
    else {
        availableUsers.push(newUser);
    }
});
//Gets the max age among the charachters
function getMaxAge(age, maxAge) {
    if (age > maxAge) {
        maxAge = age;
        return true;
    }
    return false;
}
//Finds the oldest charachter within the array of characters
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
//Finds all the women within the array of characters
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
//Married characters are returned to the front-end element with id="married-people"
var marriedSection = document.getElementById("married-people");
marriedUsers.forEach(function (married) {
    var innerDiv = document.createElement("div");
    innerDiv.innerHTML = married.name + " " + married.surname;
    marriedSection.append(innerDiv);
});
//Single characters are returned to the front-end element with id="single-people"
var singleSection = document.getElementById("single-people");
availableUsers.forEach(function (available) {
    var innerDiv = document.createElement("div");
    innerDiv.innerHTML = available.name + " " + available.surname;
    singleSection.append(innerDiv);
});
//Oldest character is returned to the front-end element with id="oldest-person"
var oldCharachter = findOldest(allUsers);
document.getElementById("oldest-person").innerHTML = oldCharachter.name + " " + oldCharachter.surname;
console.log("The oldest charachter among these people is: " + oldCharachter.name);
//Female characters and their age are returned to the front-end element with id="age-of-girls"
var femaleCharacters = findWomen(allUsers);
var girlsAgeSection = document.getElementById("age-of-girls");
var br = document.createTextNode("<br />");
femaleCharacters.forEach(function (woman) {
    var innerDiv = document.createElement("div");
    innerDiv.innerHTML = woman[0] + " " + woman[1] + " is " + woman[2] + " years old";
    girlsAgeSection.append(innerDiv);
});
