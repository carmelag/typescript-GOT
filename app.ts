
//USe of ENUM
enum Status { UNKNOWN, MARRIED, SINGLE, WIDOWER };
enum Gender { UNKNOWN, MALE, FEMALE };

//Use of interface
interface UserConfig {
    name: string;
    surname: string;
    age: number;
    socialStatus: Status;
    gender: Gender
};

//Use of Alias 
type womenCollection = [string, string, number][];

//Creates and returns a new user
function createNewUser(config: UserConfig): {
    name: string;
    surname: string;
    age: number;
    socialStatus: Status;
    gender: Gender
} {
    let person = { name: "new", surname: "new", age: 0, socialStatus: Status.UNKNOWN, gender: Gender.UNKNOWN };
    person.name = config.name;
    person.surname = config.surname;
    person.age = 34;
    person.socialStatus = config.socialStatus;
    person.gender = config.gender;

    return person;
}

//Returns the age of a User
function ageOfUser(person: UserConfig) {
    return "Age is: " + person.age;
}

//Returns the status of a USer
function statusOfUser(person: UserConfig) {
    return "Status is: " + person.socialStatus;
}

//Array of users, type is UserConfig
let allUsers: UserConfig[];
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
]

//Arrays that will be returned to the frontend containing the married/single people
let marriedUsers: UserConfig[] = new Array();
let availableUsers: UserConfig[] = new Array();

//Creates all te users and push them in the right array, depending on their status
allUsers.forEach(charachter => {
    let newUser = createNewUser(charachter);
    if (newUser.socialStatus === Status.MARRIED) {
        marriedUsers.push(newUser);
    } else {
        availableUsers.push(newUser);
    }
});

//Gets the max age among the charachters
function getMaxAge(age: number, maxAge: number) {
    if (age > maxAge) {
        maxAge = age;
        return true;
    }
    return false;
}

//Finds the oldest charachter within the array of characters
function findOldest(charachters: UserConfig[]) {
    let maxAge = 0;
    let oldestCharachter: UserConfig;
    charachters.forEach(charachter => {
        let greaterAge = getMaxAge(charachter.age, maxAge);
        if (greaterAge) {
            oldestCharachter = charachter
        }
    });
    return oldestCharachter;
}

//Finds all the women within the array of characters
function findWomen(charachters: UserConfig[]): womenCollection {
    let women: womenCollection;
    women = new Array();
    charachters.forEach(charachter => {
        if (charachter.gender === Gender.FEMALE) {
            women.push([charachter.name, charachter.surname, charachter.age]);
        }
    })
    return women;
}

//Married characters are returned to the front-end element with id="married-people"
let marriedSection = document.getElementById("married-people");

marriedUsers.forEach(married => {
    var innerDiv = document.createElement("div");
    innerDiv.innerHTML = married.name + " " + married.surname;
    marriedSection.append(innerDiv);
});

//Single characters are returned to the front-end element with id="single-people"

let singleSection = document.getElementById("single-people");

availableUsers.forEach(available => {
    var innerDiv = document.createElement("div");
    innerDiv.innerHTML = available.name + " " + available.surname;
    singleSection.append(innerDiv);
});

//Oldest character is returned to the front-end element with id="oldest-person"
let oldCharachter = findOldest(allUsers);
document.getElementById("oldest-person").innerHTML = oldCharachter.name + " " + oldCharachter.surname;
console.log("The oldest charachter among these people is: " + oldCharachter.name);

//Female characters and their age are returned to the front-end element with id="age-of-girls"
let femaleCharacters = findWomen(allUsers);
let girlsAgeSection = document.getElementById("age-of-girls");
let br = document.createTextNode("<br />");
femaleCharacters.forEach(woman => {
    var innerDiv = document.createElement("div");
    innerDiv.innerHTML = woman[0] + " " + woman[1] + " is " + woman[2] + " years old";
    girlsAgeSection.append(innerDiv);
});


