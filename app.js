// Task 1: Show Fruits
var Fruits = ["Apple", "Mango", "Banana", "Grapes"];

function showFruits() {
  var list = document.getElementById("fruitlist");
  list.innerHTML = "";
  for (var i = 0; i < Fruits.length; i++) {
    var li = document.createElement("li");
    li.textContent = Fruits[i];
    list.appendChild(li);
  }
}

// Task 2: Fruits Starting with A
var Names_With_A = ["Apple", "Mango", "Avocado", "Banana", "Apricot"];

function findA() {
  var foundFruits = [];
  for (var i = 0; i < Names_With_A.length; i++) {
    var firstLetter = Names_With_A[i].charAt(0).toLowerCase();
    if (firstLetter === "a") {
      foundFruits.push(Names_With_A[i]);
    }
  }

  var result = document.getElementById("results");
  if (foundFruits.length === 0) {
    result.textContent = " No fruit starts with 'A'";
  } else {
    result.innerHTML = ` ${foundFruits.length} fruit(s) found: <strong>${foundFruits.join(", ")}</strong>`;
  }
}

// Task 3: Find Largest Number
function findLargest() {
  var input = prompt("Enter comma-separated numbers (e.g. 23,1,54,12)");
  if (!input) return;
  var numbers = input.split(",").map(Number);
  var max = numbers[0];

  for (var i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  document.getElementById("largestResult").textContent = " Largest Number is: " + max;
}

// Task 4: Names longer than 5 letters
function showLongNames() {
  var names = ["Ali", "Fardeen", "Aans", "Hassan", "Murtaza", "Zeeshan"];
  var result = "";
  for (var i = 0; i < names.length; i++) {
    if (names[i].length > 5) {
      result += names[i] + "<br>";
    }
  }
  document.getElementById("longNamesResult").innerHTML = result || " No names longer than 5 letters.";
}

// Task 5: Search Name (Case-insensitive)
function searchName() {
  var names = ["Ali", "Fardeen", "Sana", "Usman", "Laiba"];
  var input = document.getElementById("searchName").value.trim().toLowerCase();
  var found = false;

  for (var i = 0; i < names.length; i++) {
    if (names[i].toLowerCase() === input) {
      found = true;
      break;
    }
  }

  var result = document.getElementById("searchResult");
  if (found) {
    result.textContent = " Name Found: " + input;
  } else {
    result.textContent = " Name Not Found: " + input;
  }
}
