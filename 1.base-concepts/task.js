"use strict"

function solveEquation(a, b, c) {
  let arr;

  // мой код
  let root1, root2;
  let D = Math.round((Math.pow(b, 2) - 4*a*c));

  if (D > 0) {
    root1 = Number(((-b + Math.sqrt(D)) / (2*a)).toFixed(3));
    root2 = Number(((-b - Math.sqrt(D)) / (2*a)).toFixed(3));
    arr = [root1, root2];
  } else if (D === 0) {
    root1 = -b / (2*a);
    arr = [root1];
  } else if (D < 0) {
    arr = [];
  }

  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
   
  // мой код
  
  let today = new Date();  
  let P = percent / 100 / 12;

  if (isNaN(percent)) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  }
  
  if (isNaN(contribution)) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  }
  
  if (isNaN(amount)) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  }
  
  let credit = Number(amount) - Number(contribution);
  let NumMonth = LoanPeriod(today, date);

  let Payment = credit * (P + (P / ((1 + P) ** NumMonth - 1)));
  totalAmount = Number((Payment * NumMonth).toFixed(2));  

  console.log(totalAmount);
  return totalAmount;
  
}

function LoanPeriod(startDate, endDate) {

  let mounth = endDate.getMonth() - startDate.getMonth() + (endDate.getFullYear() - startDate.getFullYear()) * 12;

  return mounth;
}
