// Task 1 //

function printName() {
    console.log("Abdullah Alenezi");
  }
  printName();

  // Task 2 //
function printAge(birthYear) {
console.log (2024 - birthYear);
}

printAge(1991);


// Task 3 //

function printAgeAndName(birthYear, name) {
    console.log(`Hello ${name}, you are ${2024 - birthYear} years old`);
}

printAgeAndName(1991, "Abdullah");

// Task 4 //

function printHello(name, language) {

    if (language === "en") {
        console.log(`Hello ${name}`); 
    } else if (language === "es") {
        console.log(`Hola ${name}`);
    }
    else if (language === "fr") {
        console.log(`Bonjour ${name}`);
    }
    else if (language === "tr") {
        console.log(`Merhaba ${name}`);
    }
}

    printHello("Abdullah", "fr");

    // Task 5 //

    function printMax(a, b) {
        if (a > b) {
            console.log(a);
        } else { console.log(b);
        }
    }

    printMax(10, 5);




