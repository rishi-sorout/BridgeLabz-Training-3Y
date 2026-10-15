
 // Define the smart home security conditions
const isDoorLocked = true;
const isWindowClosed = true;
const isAlarmOn = true;
const isOwnerInside = true;

// Check whether all required security conditions are satisfied
const isSecure =
    isDoorLocked &&
    isWindowClosed &&
    isAlarmOn &&
    isOwnerInside;

// Display the security status
if (isSecure) {
    console.log("Secure");
} else {
    console.log("Unsafe");
}

// Demonstrate the NOT (!) operator
console.log(`Alarm is off: ${!isAlarmOn}`);

// Demonstrate the OR (||) operator
if (!isDoorLocked || !isWindowClosed) {
    console.log("Warning: A door or window is open or unlocked.");
}
