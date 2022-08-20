// Input Fields
let income = document.getElementById("income");
let food = document.getElementById("Food");
let rent = document.getElementById("Rent");
let clothes = document.getElementById("Clothes");
let savings = document.getElementById("savings");
// Text Fields
const totalExpenses = document.getElementById("totalExpenses");
const balance = document.getElementById("balance");
const savingAmount = document.getElementById("savingAmount");
const remainingBalance = document.getElementById("remainingBalance");
// Buttons
const calculateBtn = document.getElementById("calculate");
const percentageBtn = document.getElementById("percentage");

// Functions

function ifEmptyReturnZero(IDvariable) {
  return isNaN(parseFloat(IDvariable.value)) ? 0 : parseFloat(IDvariable.value);
}
// Event Listeners
calculateBtn.addEventListener("click", function () {
  const incomeValue = ifEmptyReturnZero(income);
  const foodValue = ifEmptyReturnZero(food);
  const rentValue = ifEmptyReturnZero(rent);
  const clothesValue = ifEmptyReturnZero(clothes);
  // calculate

  const totalExpensesValue = parseFloat(foodValue + rentValue + clothesValue);
  const balanceValue = incomeValue - totalExpensesValue;
  if (balanceValue < 0) {
    alert("Your Income is less than your Expenses");
    return;
  }
  //   set value
  totalExpenses.innerText = totalExpensesValue.toFixed(2);
  balance.innerText = balanceValue.toFixed(2);
});

percentageBtn.addEventListener("click", function () {
  const percentageValue = ifEmptyReturnZero(savings);
  const balanceValue = parseFloat(balance.innerText);
  //   calculate
  const savingsAmount = (balanceValue * percentageValue) / 100;
  const balanceLeft = balanceValue - savingsAmount;
  console.log(percentageValue, balanceValue, savingsAmount, balanceLeft);
  //   display values
  savingAmount.innerText = savingsAmount.toFixed(2);
  remainingBalance.innerText = balanceLeft.toFixed(2);
});
