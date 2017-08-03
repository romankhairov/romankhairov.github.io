// Features of application:
// 1) Summ all income money. Possibility to add more input fields.
// 2) Summ all monthly payments and minus from total 15% for savings
// 3) Split the rest of the money to ammount days in picked month
// 4) Possibility to add expenses to picked day. After that daily summ
// for the rest days recalculates.

// 1) input
/*var monthlySalaryForm = document.getElementById('monthlySalary-form');
monthlySalaryForm.onsubmit = function(event) {
  event.preventDefault();
  console.log(monthlySalaryForm.fullName);
};*/

var monthlySalary = document.getElementById('monthly-salary');
monthlySalary.onsubmit = function(e) {
  e.preventDefault();
  console.log(monthlySalary.fullName.value);

}

var additionalMoney = document.getElementById('additional-money');
additionalMoney.onsubmit = function(e) {
  e.preventDefault();
  console.log(additionalMoney.fullName.value);

}
