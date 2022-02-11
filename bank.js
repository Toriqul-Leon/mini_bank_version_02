const depositButton = document.getElementById("deposit-button");

depositButton.addEventListener("click", function () {
  const depositInput = document.getElementById("deposit-input");
  const depositAmount = depositInput.value;
  //   !Get current deposit
  const depositTotal = document.getElementById("deposit-total");
  const depositTotalText = depositTotal.innerText;
  depositTotal.innerText = depositAmount;
  //   !Clear Input Field
  depositInput.value = "";
  const newDepositAmount = parseFloat(depositAmount);
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
