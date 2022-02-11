function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputAmountText = inputField.value;
  const amountValue = parseFloat(inputAmountText);
  //   !Clear Input Field
  inputField.value = "";
  return amountValue;
}

//   !Get and update current deposit
function updateTotalField(totalFieldId, newDepositAmount) {
  const totalElement = document.getElementById(totalFieldId);
  const totalText = totalElement.innerText;
  const previousTotal = parseFloat(totalText);
  totalElement.innerText = newDepositAmount + previousTotal;
}
// !Get current balance
function getCurrentBalance() {
  const balanceAmount = document.getElementById("balance-total");
  const balanceAmountText = balanceAmount.innerText;
  const previousBalanceAmount = parseFloat(balanceAmountText);
  return previousBalanceAmount;
}
//   !Add Balance
function updateBalance(amount) {
  const balanceAmount = document.getElementById("balance-total");
  const previousBalanceAmount = getCurrentBalance(amount);
  balanceAmount.innerText = previousBalanceAmount + amount;
}
const depositButton = document.getElementById("deposit-button");
depositButton.addEventListener("click", function () {
  const newDepositAmount = getInputValue("deposit-input");
  //   !Get and update current deposit
  if (newDepositAmount > 0) {
    updateTotalField("deposit-total", newDepositAmount);
    updateBalance(newDepositAmount);
  } else {
    alert("Enter Positive Amount");
  }
});

// !Handle Withdraw
const withdrawButton = document.getElementById("withdraw-button");
withdrawButton.addEventListener("click", function () {
  const newWithdrawInput = getInputValue("withdraw-input");
  const rightNow = getCurrentBalance();
  if (newWithdrawInput > 0 && newWithdrawInput < rightNow) {
    updateTotalField("withdraw-total", newWithdrawInput);
    updateBalance(-newWithdrawInput);
  } else {
    alert("Balance Exceeded");
  }
});
