'use strict'


let workingHhours = ['6 am', '7 am', '8 am', '9 am', '10am', '11am', '12pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];
let myObject =[];
//create the object template
function Shop(name,minCustomer,maxCustomer,avgCookies){
    this.locationName=name;
    this.minCustomer=minCustomer;
    this.maxCustomer=maxCustomer;
    this.avgCookies=avgCookies;
    this.randCustomers=[];
    this.cookiesSoldPerHour = [];
    myObject.push(this);
}
//calculate random customer number
Shop.prototype.randomNumber= function() {
    let arr=[];
    for (let i = 0; i < workingHhours.length; i++) {
       this.randCustomers.push(Math.floor(Math.random()*(this.maxCustomer-this.minCustomer+1)+this.minCustomer));
    };
    return arr;
}

// calculate avg cookies sold per hour and store in array
Shop.prototype.cookiesSold = function () {

  
    for (let i = 0; i <14; i++) {
        this.cookiesSoldPerHour[i]= Math.floor(this.avgCookies * this.randCustomers[i]);
    }
}


//rendering output
Shop.prototype.renderOutput=function (hours){
    hours = workingHhours;
    let mainElemnt = document.getElementById('mainElement');
    let name = document.createElement('h2');
    mainElemnt.appendChild(name);
    name.textContent = this.locationName;
    let ulElement = document.createElement('ul');
    mainElemnt.appendChild(ulElement);
    for(let i=0;i<workingHhours.length;i++){
        let liElement = document.createElement('li');
        liElement.textContent= `${hours[i]}: ${this.cookiesSoldPerHour[i]} cookies`;
        ulElement.appendChild(liElement);
    }
}


// let seattle = {
//     locationName:'seattle',
//     minCustomer: 23,
//     maxCustomer: 65,
//     avgCookies: 6.3,
//     randomCustomerNum: function () {
//         return randomNumber(this.minCustomer, this.maxCustomer);
//     },
//     totalCookiesSold:function(){
//         return cookiesSold(this.avgCookies,this.randomCustomerNum());
//     }
// }
// let Tokyo= {
//     locationName:'tokyo',
//     minCustomer: 3,
//     maxCustomer: 24,
//     avgCookies: 1.2,
//     randomCustomerNum: function () {
//         return randomNumber(this.minCustomer, this.maxCustomer);
//     },
//     totalCookiesSold:function(){
//         return cookiesSold(this.avgCookies,this.randomCustomerNum());
//     }
// }
// let dubai = {
//     locationName:'dubai',
//     minCustomer: 11,
//     maxCustomer: 38,
//     avgCookies: 3.7,
//     randomCustomerNum: function () {
//         return randomNumber(this.minCustomer, this.maxCustomer);
//     },
//     totalCookiesSold:function(){
//         return cookiesSold(this.avgCookies,this.randomCustomerNum());
//     }
// }
// let paris = {
//     locationName:'paris',
//     minCustomer: 20,
//     maxCustomer: 38,
//     avgCookies: 2.3,
//     randomCustomerNum: function () {
//         return randomNumber(this.minCustomer, this.maxCustomer);
//     },
//     totalCookiesSold:function(){
//         return cookiesSold(this.avgCookies,this.randomCustomerNum());
//     }
// }

// let lima = {
//     locationName:'lima',
//     minCustomer: 2,
//     maxCustomer: 16,
//     avgCookies: 4.6,
//     randomCustomerNum: function () {
//         return randomNumber(this.minCustomer, this.maxCustomer);
//     },
//     totalCookiesSold:function(){
//         return cookiesSold(this.avgCookies,this.randomCustomerNum());
//     }
// }



// renderOutput(seattle.locationName,workingHhours,seattle.totalCookiesSold());
// renderOutput(Tokyo.locationName,workingHhours,Tokyo.totalCookiesSold());
// renderOutput(dubai.locationName,workingHhours,dubai.totalCookiesSold());
// renderOutput(paris.locationName,workingHhours,paris.totalCookiesSold());
// renderOutput(lima.locationName,workingHhours,lima.totalCookiesSold());
