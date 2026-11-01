function makeMultiplier(multiplier) {

    return function(number) {
        return number * multiplier;
    };
}

const triple = makeMultiplier(3);
const double = makeMultiplier(2);

console.log("Triple:", triple(5));
console.log("Double:", double(5));