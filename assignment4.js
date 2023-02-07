// Problem -1: This is a function which name is mindGame.This function take some input like postive numbers and return different type of operation value. 

function mindGame (num) {
    let operation1 = num * 3;
    let operation2 = operation1 + 10;
    let operation3 = operation2 / 2;
    let finalResult = operation3 - 5;
    return finalResult;
}
// const bejal = mindGame(33);
// console.log(bejal);

//Problem -2: This function name is evenOdd.This function take a string input and opeartion how many characters in this string and return this character is even or odd.

function evenOdd (string) {
    const stringAllCharacters = string.length;
    if(stringAllCharacters % 2 !== 0 ) {
        return "odd";
    }
    else {
        return "even";
    }
}

// const setInput = evenOdd ("Batch7");
// console.log(setInput);


//Problem -3: This function name is isLGSeven.This function take a input like number and the difference between the input value 7. If this difference is less than 7, then return the difference. Otherwise, return double of the input value.

function isLGSeven (input) {
    let difference = input - 7;
    if(difference < 7) {
        return difference;
    }
    else if(difference >= 7){
        return input * 2;
    }
}

// const myValue = isLGSeven(15);
// console.log(myValue);

// Problem -4: This function name is findingBadData.This function takes a array as input and return how many bad data are availave in this function.

function findingBadData (array) {
    let badData = [];
    for(let i = 0; i <array.length; i++) {
        const element = array[i];
        if(element < 0) {
            badData.push(element);
        }
    }
    return badData.length;
}

// const inputData = findingBadData( [ -4, -9, -5, -33, -55 ]);
// console.log(inputData);

// Problem -5: This function name is gemsToDiamond.This function takes three parameters as input and return total remaining diamonds.

function gemsToDiamond (gems1, gems2, gems3) {
    const firstFriendGems = gems1 * 21;
    const secondFriendGems = gems2 * 32;
    const lastFriendGems = gems3 * 43;

    const totalDiamonds = firstFriendGems + secondFriendGems + lastFriendGems;
    if(totalDiamonds > 1000*2) {
        const total = totalDiamonds - 2000;
        return total;
    }
    else{
        return totalDiamonds;
    }
}

// const friendsAllGems = gemsToDiamond(100, 5, 1);
// console.log(friendsAllGems);
