'use strict'


let workingHhours = ['6 am', '7 am', '8 am', '9 am', '10am', '11am', '12pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm','total '];

function randomNumber(min, max) {
    let arr = [];
    for (let i = 0; i < 14; i++) {
        arr[i] = Math.floor(Math.random() * (max - min)) + min;
    };
    return arr;
}

let cookiesSold = function (avgCookie, customers) {
    let avgCookiesSold = [];
    let totalCookiesSold = 0;
    for (let i = 0; i < customers.length; i++) {
        avgCookiesSold[i] = Math.floor(avgCookie * customers[i]);
        totalCookiesSold+=avgCookiesSold[i];
    }
    avgCookiesSold[customers.length]=totalCookiesSold;
    return avgCookiesSold;
}



function renderOutput(location,hours,totalSales){
    let mainElemnt = document.getElementById('mainElement');
    let name = document.createElement('h2');
    mainElemnt.appendChild(name);
    name.textContent = location;
    let ulElement = document.createElement('ul');
    mainElemnt.appendChild(ulElement);
    for(let i=0;i<workingHhours.length;i++){
        let liElement = document.createElement('li');
        liElement.textContent= `${hours[i]}: ${totalSales[i]} cookies`;
        ulElement.appendChild(liElement);
        
    }
}


let seattle = {
    minCustomer: 23,
    maxCustomer: 65,
    avgCookies: 6.3,
    randomCustomerNum: function () {
        return randomNumber(this.minCustomer, this.maxCustomer);
    },
    totalCookiesSold:function(){
        return cookiesSold(this.avgCookies,this.randomCustomerNum());
    }
}
let Tokyo= {
    minCustomer: 3,
    maxCustomer: 24,
    avgCookies: 1.2,
    randomCustomerNum: function () {
        return randomNumber(this.minCustomer, this.maxCustomer);
    },
    totalCookiesSold:function(){
        return cookiesSold(this.avgCookies,this.randomCustomerNum());
    }
}
let dubai = {
    minCustomer: 11,
    maxCustomer: 38,
    avgCookies: 3.7,
    randomCustomerNum: function () {
        return randomNumber(this.minCustomer, this.maxCustomer);
    },
    totalCookiesSold:function(){
        return cookiesSold(this.avgCookies,this.randomCustomerNum());
    }
}
let paris = {
    minCustomer: 20,
    maxCustomer: 38,
    avgCookies: 2.3,
    randomCustomerNum: function () {
        return randomNumber(this.minCustomer, this.maxCustomer);
    },
    totalCookiesSold:function(){
        return cookiesSold(this.avgCookies,this.randomCustomerNum());
    }
}

let lima = {
    minCustomer: 2,
    maxCustomer: 16,
    avgCookies: 4.6,
    randomCustomerNum: function () {
        return randomNumber(this.minCustomer, this.maxCustomer);
    },
    totalCookiesSold:function(){
        return cookiesSold(this.avgCookies,this.randomCustomerNum());
    }
}



renderOutput('seattle',workingHhours,seattle.totalCookiesSold());
renderOutput('Tokyo',workingHhours,Tokyo.totalCookiesSold());
renderOutput('dubai',workingHhours,dubai.totalCookiesSold());
renderOutput('paris',workingHhours,paris.totalCookiesSold());
renderOutput('lima',workingHhours,lima.totalCookiesSold());
