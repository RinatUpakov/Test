'use strict';

let money = +prompt('Ваш бюджет на месяц?');
let time = prompt('Введите дату в формате YYYY-MM-DD');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

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
        alert('Oops'); 
        console.log('Что то  пошло не так');
    }
}

console.log(appData);
