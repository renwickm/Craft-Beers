// let yellow = "Yellow";
// let otherYellow = "yellow";

// let favColor = yellow;

// console.log(yellow)
// console.log(otherYellow);

// console.log(yellow == otherYellow);

// let usersColor = prompt("What is your favorite color")
// console.log(usersColor);
// let x = 5;
// let y = "5";

// console.log(x, y); // number, string
// console.log(x == y); // equals
// console.log(x === y); // STRICTLY equals

// if the user's fav color is yellow, say "mine too!"
// otherwise say "That's a good color"


// if (usersColor == "YELLOW"){
//    document.write("I also like YELLOW!");
//} else if (usersColor.toLowerCase == "yellow"){
 //   document.write("Mine Too!");
//} else {
 //   document.write("That's still a nice color.")
//}


function askDrink(){
    let yes = "y";
    let no = "n";

    let favAnswer = "y";

    console.log(yes);
    console.log(no);

    let userAnswer = prompt ("Do you like beer (y/n)")
    console.log(userAnswer);

    if (userAnswer == "y"){
        document.write("Good Answer!")
    } else if (userAnswer == "n"){
        document.write("What ARE YOU..., a WINE DRINKER!")
    }
}

let message = askDrink
console.log("LINE 52", message)

function askBeertype(){
    let Beer = "IPA";
    let otherBeer = "Lager";

    let favBeer = "IPA";

    console.log(Beer);
    console.log(otherBeer);

    let userBeer = prompt ("What style of beer is better...IPA, or Lager")
    console.log(userBeer);

    if (userBeer == "IPA"){
        document.write("Stay thirsty my friend!")
    } else if (userBeer == "Lager"){
        document.write("How about NOOO SHCOTTY!")
    }
}
let choice = askBeertype
console.log("LINE 73", choice)


//              (parameters)
function addNumbers(x, y){
    return x + y;
}

//             (arguments)
addNumbers(5, 3);

let classGreeting = addNumbers("Hello", "Class");
console.log("LINE 86", classGreeting);

document.write(addNumbers("Hello", "Class"));