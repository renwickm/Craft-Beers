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