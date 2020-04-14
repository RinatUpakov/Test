'use strict';

let money = prompt('Ваш бюджет на месяц?');
let time = prompt('Введите дату в формате YYYY-MM-DD');

let appData = {
    money: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let expnss = prompt('Введите обязательную статью расходов в этом месяце');
let expensesPrice = prompt('Во сколько обойдется ' + expnss + '?');

appData.expenses[expnss] = expensesPrice;

let expnss2 = prompt('Введите ещё одну обязательную статью расходов в этом месяце');
let expensesPrice2 = prompt('Во сколько обойдется ' + expnss2 + '?');

appData.expenses[expnss2] = expensesPrice2;

alert(`Ваш бюджет на 1 день составляет: ` + `Доходы: ` + money/30 + ', ' + `Расходы: ` + (+expensesPrice + +expensesPrice2)/30);

console.log(appData);
console.log(expensesPrice);
console.log(expensesPrice2);