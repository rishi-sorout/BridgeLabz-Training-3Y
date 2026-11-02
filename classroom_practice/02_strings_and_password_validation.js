// JAVASCRIPT STRINGS, STRING METHODS AND PASSWORD VALIDATION

let username = "  Deepak prasad  ";

console.log(username.trim());
console.log(username.toUpperCase());
console.log(username.toLowerCase());
console.log(username.indexOf("p"));
console.log(username.includes("kumar"));
console.log(username.slice(2, 5));
console.log(username.slice(5));

console.log(username.length);
console.log(username.trim().toUpperCase().split(" "));

let password = "    dDghjio345678@$   ";

function checkPassword(password) {
    // Password requirements:
    // at least 6 characters
    // one uppercase letter
    // one lowercase letter
    // one digit
    // one special symbol

    let checkedPassword = password.trim();

    if (checkedPassword.length < 6) return false;

    let upper = false;
    let lower = false;
    let special = false;
    let digit = false;

    for (let i = 0; i < checkedPassword.length; i++) {
        let ch = checkedPassword.charAt(i);

        if (ch >= "A" && ch <= "Z") {
            upper = true;
        } else if (ch >= "0" && ch <= "9") {
            digit = true;
        } else if (ch >= "a" && ch <= "z") {
            lower = true;
        } else {
            special = true;
        }
    }

    if (lower && upper && digit && special) {
        return true;
    }

    return false;
}

console.log(checkPassword(password));