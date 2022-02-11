function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputAmountText = inputField.value;
  const amountValue = parseFloat(inputAmountText);
  //   !Clear Input Field
  inputField.value = "";
  return amountValue;
}

function updateTotalField(newDepositAmount) {
  //   !Get and update current deposit
  const depositTotal = document.getElementById("deposit-total");
  const depositTotalText = depositTotal.innerText;
  const newDepositTotal = parseFloat(depositTotalText);
  depositTotal.innerText = newDepositAmount + newDepositTotal;
}

const depositButton = document.getElementById("deposit-button");

depositButton.addEventListener("click", function () {
  const newDepositAmount = getInputValue("deposit-input");
  //   !Get and update current deposit
  updateTotalField(newDepositAmount);
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
  //   !Update withdraw Total
  const withdrawTotal = document.getElementById("withdraw-total");
  const withdrawTotalText = withdrawTotal.innerText;

  withdrawTotal.innerText = newWithdrawInput;
  const newWithdrawTotal = parseFloat(withdrawTotalText);

  const totalWithdraw = newWithdrawInput + newWithdrawTotal;
  withdrawTotal.innerText = totalWithdraw;
  //   !Update balance
  const balanceTotal = document.getElementById("balance-total");
  const balanceTotalText = balanceTotal.innerText;
  const newBalanceTotal = parseFloat(balanceTotalText);
  const totalBalance = newBalanceTotal - newWithdrawInput;
  balanceTotal.innerText = totalBalance;
});
