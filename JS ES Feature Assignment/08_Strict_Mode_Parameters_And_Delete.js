// without strict mode 

function demo(a, a) {

    total = 10;

    console.log("Parameter:", a);
    console.log("Total:", total);

    const result = delete total;

    console.log("Delete result:", result);
}

demo(5, 10);



//with strict mode 

"use strict";

function demo(a, a) {
    total = 10;
    delete total;
}

demo(5, 10);


// correct ES6 version


"use strict";

function demo(firstNumber, secondNumber) {

    const total = 10;

    console.log("First:", firstNumber);
    console.log("Second:", secondNumber);
    console.log("Total:", total);
}

demo(5, 10);
