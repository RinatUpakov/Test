'use strict';

let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?');
    time = prompt('Введите дату в формате YYYY-MM-DD');

    while (isNaN(money) || money == null || money == "") {
        money = +prompt('Ваш бюджет на месяц?');
    }
    appData.budget = money;
    appData.timeData = time;
}

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Введите обязательную статью расходов  в этом месяце');
        let b = prompt('Во сколько обойдется ' + a + '?');
    
        console.log(typeof(a));
        console.log(typeof(b));
    
        if ((typeof(a)) === 'string' && 
            (a != null) && 
            (b != null) && 
            a.length < 50) {
            appData.expenses[a] = b;
            console.log('Done');
        }
        else {
            i = i - 1;
            console.log('Некорректный ввод');
        }
    }
}

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

start();
chooseExpenses();

function detectDayBudget() {
    appData.moneyPerDay = ((+appData.budget)/30).toFixed();
    alert("Ваш бюджет на день составляет: " + (+appData.moneyPerDay));
}

detectDayBudget();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Введите сумму накоплений"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = save/100/12*percent;
        alert("Ваш ежемесячный доход с вклада: " + appData.monthIncome);
    }
}

checkSavings();

function detectLevel() {
   if (appData.moneyPerDay < 500) {
       console.log("Минимальный уровень достатка");
   } else if (appData.moneyPerDay >= 500 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
   } else if (appData.moneyPerDay >= 2000) {
    console.log("Высокий уровень достатка");
   } else console.log("Ошибка расчета уровня достатка");
    
}

detectLevel();

function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        appData.optionalExpenses[i] = prompt("Введите дополнительные траты");
    }
}

chooseOptExpenses();

console.log(appData);
