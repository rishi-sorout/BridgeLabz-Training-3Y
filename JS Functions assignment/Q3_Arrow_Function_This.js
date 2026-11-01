const user = {
    name: "Rishi",

    showName: () => {
        console.log("Name:", this.name);
    }
};

user.showName();

// Fix using normal function
const userFixed = {
    name: "Rishi",

    showName: function() {
        console.log("Name:", this.name);
    }
};

userFixed.showName();