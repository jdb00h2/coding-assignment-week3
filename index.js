// /*  */Coding Steps:

//1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

var ages = [3, 9, 23, 64, 2, 8, 28, 93];

    //a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array (do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the console.

var newElement = ages[ages.length - 1] - ages[0];
console.log(newElement); 
    
    //b.	Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).

ages.push(105);
newElement = ages[ages.length - 1] - ages[0];
console.log(newElement);

    //c.	Use a loop to iterate through the array and calculate the average age. Print the result to the console.

var sum = 0
for(let i = 0; i < ages.length; i++){
    sum += ages[i];
};
var mean = sum / ages.length;
console.log(mean);

// //2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.

var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

//     //a.	Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.

var total = 0
for(let i = 0; i < names.length; i++){
    total += names[i].length;
}
var mean = total / names.length;
console.log(mean);

//     //b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.

newString = ''
for (let i = 0; i < names.length; i++){
    newString += names[i] + ' ';
}
console.log(newString);

// //3.	How do you access the last element of any array?

// // arrayName[arrayName.length - 1]

// //4.	How do you access the first element of any array?
 
// // arrayName[0]

// //5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
// //For example:
// // namesArray = ["Kelly", "Sam", "Kate"] //given this array
// // nameLengths = [5, 3, 4] //create this new array

var nameLengths = [];
for (let i = 0; i < names.length; i++){
    nameLengths.push(names[i].length);
}

// // 6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.

var sum = 0
for(let i = 0; i < nameLengths.length; i++){
    sum += nameLengths[i];
};
console.log(sum);

// // 7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).

function concat(word, n){
    let output = '';
    for (let i = 0; i < n; i++){
        output += word;
    }
    return output;
}


// // 8.	Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).

function fullName(firstName, lastName){
    return(firstName + ' ' + lastName);
}

// // 9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

function greaterThan(inputArray){
    let sum = inputArray.reduce(function (previousValue, currentValue){
        return previousValue + currentValue
    })
    if (sum > 100){
        return true;
    }
}

// // 10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.

function average(inputArray){
    let sum = inputArray.reduce(function (previousValue, currentValue){
        return previousValue + currentValue;
    })
    return sum/inputArray.length;
}

// // 11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

function largerAverage(inputArray1, inputArray2){
    let sum1 = inputArray1.reduce(function (previousValue, currentValue){
        return previousValue + currentValue;
    })
    let mean1 = sum1/inputArray1.length;
    let sum2 = inputArray2.reduce(function(previousValue, currentValue){
        return previousValue + currentValue;
    })
    let mean2 = sum2/inputArray2.length;
    if(mean1 > mean2){
        return true
    }
}

// // 12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink(isHotOutside, moneyInPocket){
    if (isHotOutside && moneyInPocket > 10.50){
        return true
    }
}


// // 13.	Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

// This function compares the scorecards from two players after a round of mini golf. It accepts the input as arrays with 18 values
// to represent the eighteen holes played. I created this function because I have fun memories of playing mini golf and it seemed 
// like a reasonable way to test what I've learned this week. 

playerOneScores = [3, 4, 3, 5, 8, 2, 4, 4, 5, 3, 6, 4, 5, 5, 3, 4, 2, 5]
playerTwoScores = [2, 3, 4, 3, 5, 6, 4, 6, 5, 2, 6, 6, 4, 6, 1, 5, 5, 4]

playerOne = 'Jeffery'
playerTwo = 'Marina'
function whoWins(player1, player2){
    if(player1.length !== 18 || player2.length !== 18){
        return 'Invalid scorecard.'
    }
    let sum1 = player1.reduce(function(previousValue, currentValue){
        return previousValue + currentValue;
    })
    let sum2 = player2.reduce(function(previousValue, currentValue){
        return previousValue + currentValue;
    })
    if(sum1 == sum2){
        return 'Its all knotted up, into the playoff you go!'
    } else if(sum1 < sum2){
        let win = sum2 - sum1
        return `${playerOne} wins by ${win}!`
    } else {
        let win = sum1 - sum2
        return `Player Two wins by ${win}!`
    }
}

let finalTest = whoWins(playerOneScores, playerTwoScores);
console.log(finalTest);