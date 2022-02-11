function getInputValue(inputId) {
  const depositInput = document.getElementById(inputId);
  const depositAmount = depositInput.value;
  const newDepositAmount = parseFloat(depositAmount);
  //   !Clear Input Field
  depositInput.value = "";
  return newDepositAmount;
}

const depositButton = document.getElementById("deposit-button");

depositButton.addEventListener("click", function () {
  //   const depositInput = document.getElementById("deposit-input");
  //   const depositAmount = depositInput.value;
  //   const newDepositAmount = parseFloat(depositAmount);

  const depositAmount = getInputValue("deposit-input");
  //   !Get current deposit
  const depositTotal = document.getElementById("deposit-total");
  const depositTotalText = depositTotal.innerText;
  depositTotal.innerText = depositAmount;
  const newDepositTotal = parseFloat(depositTotalText);
  const newTotalDeposit = newDepositAmount + newDepositTotal;
  depositTotal.innerText = newTotalDeposit;

  //   !Add Balance
  const balanceAmount = document.getElementById("balance-total");
  balanceAmountText = balanceAmount.innerText;
  const previousBalanceAmount = parseFloat(balanceAmountText);
  const newBalanceAmount = previousBalanceAmount + newTotalDeposit;
  balanceAmount.innerText = newBalanceAmount;
});

// !Handle Withdraw
const withdrawButton = document.getElementById("withdraw-button");

withdrawButton.addEventListener("click", function () {
  //   const withdrawInput = document.getElementById("withdraw-input");
  //   const withdrawAmountText = withdrawInput.value;
  //   const newWithdrawInput = parseFloat(withdrawAmountText);
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
