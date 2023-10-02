// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)
const customerName = prompt("please enter your Name?") // Ask user for their name, store in variable "name"
alert(`Hi ${customerName} !`);
// Step 2 - Food choice
// Your code goes here
const typeOfFood = prompt(
  `What type of food would you like to order?
  Please enter a number:
  1 - Pizza
  2 - Pasta
  3 - Salad`
);

let selectedFood = " " ;
if (typeOfFood === "1"){
  selectedFood = "Pizza";
} else if (typeOfFood === "2"){
  selectedFood = "Pasta";
} else if (typeOfFood === "3"){
  selectedFood = "Salad";
}else{
alert(`Invalid choice,Please start again`);
throw new Error("Invalid choice.");
}

alert(`you have chosen ${selectedFood} !`);
// Step 3 - Subtype choice
// Your code goes here

let subtypeChoice = "";
let subtypeNames = [];

switch(selectedFood){
  case "Pizza" :
    subtypeChoice = prompt(`Select a pizza type:
      Enter a number:
      1-Napolitana
      2-Hawaian
      3-Pepparoni`);
    subtypeNames =["Napolitana", "Hawaian", "Pepparoni"];
    break;
  case "Pasta" :
    subtypeChoice = prompt(`Select a pasta type:
          Enter a number:
          1 - Spaghetti Carbonara
          2 - Fettuccine Alfredo
          3 - Cheesy Tortellini`);
    subtypeNames =["Spaghetti Carbonara","Fettuccine Alfredo","Cheesy Tortellini"];
    break;
  case "Salad" :
            subtypeChoice = prompt(`Select a salad type:
              Enter a number:
              1 - Caesar Salad 
              2 - Caprese Salad
              3 - Greek Salad`);
            subtypeNames =["Caesar Salad","Caprese Salad","Greek Salad"];
            break;
  default:
    alert("Invalid choice,Please start again");
    throw new Error("Invalid choice.");
}

if (subtypeChoice === "1"){
    alert(`You have choosen ${subtypeNames[0]}`)
}else if(subtypeChoice === "2"){
  alert(`You have choosen ${subtypeNames[1]}`);
}else if(subtypeChoice === "3"){
  alert(`You have choosen ${subtypeNames[2]}`);
} else {
  throw new Error ("invalid choice") ;   // step4 - Add to cart
}



// Step 4 - Age
// Your code goes here

let ageChoice = prompt("Would you like to order for a child or an adult?\nType your age:");

let age = parseInt(ageChoice); // Parse the input to get an integer value
let cost = 0;

if (isNaN(age)) {
  alert("Invalid input. Please enter a valid age.");
  throw new Error("Invalid input. Script terminated.");
} else if (age >= 18) {
  cost = 15;

  // // Step 5 - Order confirmation
// // Your code goes here
  let selectChoice = prompt(`One adult sized (${subtypeNames[subtypeChoice - 1]} ${selectedFood}) for you. That'll be $${cost}.Are yo sure you want to order this?
  Enter a number to confirm:
  1 - Yes
  2 - No`);

  
  if (selectChoice === "1"){
    alert(`Thank you for your order! Your delicious meals will be ready.See you soon!`)
  }else if(selectChoice === "2"){
    alert (`We are sorry that we can't serve you at this time.`);
  } else{
    alert(`invalid choice`);
    throw new Error("Invalid input. Your order has not been confirmed.");
  }
} else {
  cost = 10;
  prompt(`One child sized (${subtypeNames[subtypeChoice - 1]} ${selectedFood} for you. That'll be $${cost}.Are yo sure you want to order this?
  Enter a number to confirm:
  1 - Yes
  2 - No`);
}







