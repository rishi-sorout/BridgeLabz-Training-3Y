
"use strict";

// Original function
function outer() {

    console.log(count);

    var count = 5;

    function inner() {

        console.log(count);

        var count = 10;
    }

    inner();
}

console.log("Original Function:");
outer();

// Arrow function version
function outerArrow() {

    console.log(count);

    var count = 5;

    const inner = () => {

        console.log(count);

        var count = 10;
    };

    inner();
}

console.log("\nArrow Function Version:");
outerArrow();

// Closure example
function outerClosure() {

    var count = 5;

    const inner = () => {
        console.log("Closure Count:", count);
    };

    inner();
}

console.log("\nClosure Example:");
outerClosure();

// Debugging:
// 1. Set breakpoint inside outer().
// 2. Press F11 to enter inner().
// 3. Check the Call Stack.
// 4. Add count to Watch.
// 5. Observe separate local variables in outer and inner.
