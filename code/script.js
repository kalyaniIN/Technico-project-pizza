// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)
const customerName = prompt("please enter your Name?") // Ask user for their name, store in variable "name"
alert(`Hi ${customerName} !`)
// Step 2 - Food choice
// Your code goes here
const typeOfFood = prompt(
  `What type of food would you like to order?
  Please enter a number:
  1-Pizza
  2-Pasta
  3-Salad`
)

const selectedFood = " " ;
if (typeOfFood === "1"){
  selectedFood = "Pizza";
} else if (typeOfFood === "2"){
  selectedFood = "Pasta";
} else if (typeOfFood === "3"){
  selectedFood = "Salad";
}else{
alert("Invalid choice,Please start again");
exit(1);
}

alert(`you have chosen ${selectedFood} !`);
// Step 3 - Subtype choice
// Your code goes here

const subtypeChoice = "";
const subtypeNames = [];

switch(selectedFood){
  case "Pizza" :
    subtypeChoice = prompt(`Select a pizza type:
      Enter a number:
      1-Napolitana
      2-Hawaian
      3-pepparoni`);
      subtypeNames =["Napolitana","Hawaian","pepparoni"];
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

const selectedSubtypeIndex = parseInt(subtypeChoice) - 1;

if (selectedSubtypeIndex >= 0 && selectedSubtypeIndex < subtypeNames.length) {
  const selectedSubtype = subtypeNames[selectedSubtypeIndex];
  alert(`You have chosen ${selectedSubtype}`);
} else {
  alert("Invalid subtype choice. Please start again.");
  throw new Error("Invalid subtype choice. Script terminated.");
}

// Step 4 - Age
// Your code goes here

const ageChoice = prompt("Is this food intended for a child or an adult?\nEnter 'child' or 'adult'");

let orderMessage = "";
let cost = 0;

if (ageChoice.toLowerCase() === "child") {
  cost = 5;
  orderMessage = `You've ordered a child's ${selectedFood} (${subtypeNames[selectedSubtypeIndex]}). The cost is $${cost}.`;
} else if (ageChoice.toLowerCase() === "adult") {
  cost = 10;
  orderMessage = `You've ordered an adult's ${selectedFood} (${subtypeNames[selectedSubtypeIndex]}). The cost is $${cost}.`;
} else {
  alert("Invalid choice. Please enter 'child' or 'adult'.");
  throw new Error("Invalid choice. Script terminated.");
}

alert(orderMessage);


// Step 5 - Order confirmation
// Your code goes here
const confirmation = prompt("Confirm your order by typing 'yes' or 'no'.");

if (confirmation.toLowerCase() === "yes") {
  alert(`Thank you, ${customerName}! Your meal will be prepared.`);
} else if (confirmation.toLowerCase() === "no") {
  alert(`Thank you for considering us, ${customerName}! Please feel free to return for future orders.`);
} else {
  alert("Invalid input. Your order has not been confirmed.");
}


