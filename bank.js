function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputAmountText = inputField.value;
  const amountValue = parseFloat(inputAmountText);
  //   !Clear Input Field
  inputField.value = "";
  return amountValue;
}

function updateTotalField(totalFieldId, newDepositAmount) {
  //   !Get and update current deposit
  const totalElement = document.getElementById(totalFieldId);
  const totalText = totalElement.innerText;
  const previousTotal = parseFloat(totalText);
  totalElement.innerText = newDepositAmount + previousTotal;
}

const depositButton = document.getElementById("deposit-button");

depositButton.addEventListener("click", function () {
  const newDepositAmount = getInputValue("deposit-input");
  //   !Get and update current deposit
  updateTotalField("deposit-total", newDepositAmount);
  //   !Add Balance
  const balanceAmount = document.getElementById("balance-total");
  balanceAmountText = balanceAmount.innerText;
  const previousBalanceAmount = parseFloat(balanceAmountText);
  balanceAmount.innerText = previousBalanceAmount + newDepositAmount;
});

// !Handle Withdraw
const withdrawButton = document.getElementById("withdraw-button");

withdrawButton.addEventListener("click", function () {
  const newWithdrawInput = getInputValue("withdraw-input");
  updateTotalField("withdraw-total", newWithdrawInput);

  //   !Update balance
  const balanceTotal = document.getElementById("balance-total");
  const balanceTotalText = balanceTotal.innerText;
  const newBalanceTotal = parseFloat(balanceTotalText);
  const totalBalance = newBalanceTotal - newWithdrawInput;
  balanceTotal.innerText = totalBalance;
});
