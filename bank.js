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

// !Handle Withdraw
const withdrawButton = document.getElementById("withdraw-button");

withdrawButton.addEventListener("click", function () {
  const withdrawInput = document.getElementById("withdraw-input");
  const withdrawTotal = document.getElementById("withdraw-total");
  const withdrawTotalText = withdrawTotal.innerText;
  withdrawTotal.innerText = withdrawInput.value;
  console.log(withdrawInput.value);
  const newWithdrawTotal = parseFloat(withdrawTotalText);
  const newWithdrawInput = parseFloat(withdrawInput.value);
  const totalWithdraw = newWithdrawInput + newWithdrawTotal;
  withdrawTotal.innerText = totalWithdraw;
  //   !Update balance
  const balanceTotal = document.getElementById("balance-total");
  const balanceTotalText = balanceTotal.innerText;
  const newBalanceTotal = parseFloat(balanceTotalText);
  const totalBalance = newBalanceTotal - totalWithdraw;
  balanceTotal.innerText = totalBalance;
});
