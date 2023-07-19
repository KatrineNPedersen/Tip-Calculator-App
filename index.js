"use strict";
const billAmount = document.querySelector("#bill-amount");
const tipAmount = document.querySelectorAll(".tip");
const numberOfPeople = document.querySelector("#number-of-people");
const customTip = document.querySelector("#custom");
const tipAmountPerPerson = document.querySelector(".tip-per-person-amount");
const totalAmountPerPerson = document.querySelector(".total-per-person-amount");
const error = document.querySelector(".error");
const errorForm = document.querySelector(".form");

document.querySelector("main").addEventListener("click", function (e) {
  let currentBill;
  let currentTip;
  let currentNumberOfPeople;
  let tipPerPerson;
  let totalPerPerson;

  //Bill Amount:
  if (!+billAmount.value == 0) currentBill = +billAmount.value;

  //Tip Amount
  if (!+customTip.value == 0) {
    tipAmount.forEach((tip) => tip.classList.remove("tip-selected"));
    currentTip = +customTip.value;
  } else if (e.target.classList[0] == "tip") {
    tipAmount.forEach((tip) => tip.classList.remove("tip-selected"));
    e.target.classList.add("tip-selected");
    currentTip = e.target.value;
    if (currentTip.length <= 2) {
      currentTip = +e.target.value.slice(0, 1);
    } else {
      currentTip = +e.target.value.slice(0, 2);
    }
  } else {
    tipAmount.forEach((tip) => tip.classList.remove("tip-selected"));
  }

  //People Amount
  if (!+numberOfPeople.value == 0) {
    error.classList.add("hidden");
    errorForm.classList.remove("error-form");
    currentNumberOfPeople = +numberOfPeople.value;
  } else {
    error.classList.remove("hidden");
    errorForm.classList.add("error-form");
  }

  //Calculations - TIP
  tipPerPerson = (currentBill / currentNumberOfPeople / 100) * currentTip;
  if (!tipPerPerson == 0)
    tipAmountPerPerson.textContent = `$${Number(tipPerPerson).toFixed(2)}`;

  //Calculations - TOTAL
  totalPerPerson = currentBill / currentNumberOfPeople + tipPerPerson;
  if (!totalPerPerson == 0)
    totalAmountPerPerson.textContent = `$${Number(totalPerPerson).toFixed(2)}`;

  //Reset
  reset();
});

function reset() {
  document.querySelector("button").addEventListener("click", function () {
    location.reload();
  });
}
