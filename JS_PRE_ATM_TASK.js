// Create a function(s) that fulfills array with 10 random integer values and returns a multiply of 3 greatest values. 

function randomInteger(min, max) {
    let arr = [];
    let i = 0;
    while (i < 10) {
        arr.push(Math.floor(min + Math.random() * (max - min + 1)));
        i++;
    }
    let num = arr.sort((a, b) => a - b).reverse().slice(0, 3).reduce((acc, curr) => acc * curr);
    return num;
}

//Create a function(s) that returns total amount of seconds starting from the beginning of today and till now.

function getSeconds() {
    let now = new Date();
    return now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
}

/**
 * Define an object happiness within 5 properties. Each property should have default integer value, representing its priority. 
 * Then create a function that returns a list of property names sorted by priority (highest is on top).
*/

let hapiness = {
    wealth: 2,
    health: 5,
    love: 4,
    friends: 1,
    success: 3
};

function objectProcessor(obj) {
    return Object.fromEntries(Object.entries(obj).sort((a, b) => a[1] - b[1]).reverse());
}

/**
 * Implement a function addWithDelay() which will work with parameters according to the conditions below:
 * If all parameters are positive numbers, it should return within 1000ms timeframe a Promise containing a sum of all the numbers provided as parameters
 * If any parameter is represented by a negative number, function should return an error message “Error! Some parameter is a negative number!" using “reject()” option
*/

let addWithDelay = (...params) => {
    return new Promise((resolve, reject) => {
        let sum = 0;
        for (let i = 0; i < params.length; i++) {
            if (params[i] < 0) reject('Error! Some parameter is a negative number!');
            sum = sum + params[i];
        }
        setTimeout(() => resolve(sum), 1000);
    });
};

addWithDelay(800, 9200, 100)
    .then(
        result => console.log(result),
        error => console.log(error)
    );