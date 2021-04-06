'use strict'


let workingHhours = ['6 am', '7 am', '8 am', '9 am', '10am', '11am', '12pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];
let mainElemnt = document.getElementById('mainElement');
let table = document.createElement('table');
mainElemnt.appendChild(table);
let shopList = [];

function Shop(name, minCustomer, maxCustomer, avgCookies) {
    this.name = name;
    this.minCustomer = minCustomer;
    this.maxCustomer = maxCustomer;
    this.avgCookies = avgCookies;
    this.cookiesSoldPerHour = [];
    shopList.push(this);
}

Shop.prototype.randomNumber = function () {
    let arr = [];
    for (let i = 0; i < workingHhours.length; i++) {
        arr[i]=Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
    };
    return arr;
}


Shop.prototype.cookiesSold = function () {


    for (let i = 0; i < 14; i++) {
        this.cookiesSoldPerHour[i] = Math.floor(this.avgCookies * this.randomNumber()[i]);
    }
}

Shop.prototype.render=function(){
    this.cookiesSold();
    let dailyTotal=0;
    let row =document.createElement('tr');
    table.appendChild(row);
    let cell=document.createElement('td');
    row.appendChild(cell);
    cell.textContent=this.name;
    for(let i=0;i<workingHhours.length;i++){
        cell=document.createElement('td');
        row.appendChild(cell);
        cell.textContent=this.cookiesSoldPerHour[i];
        dailyTotal+=this.cookiesSoldPerHour[i];
    }
    cell=document.createElement('td');
    row.appendChild(cell);
    cell.textContent=dailyTotal;
}


function header(){
    let tableHeader = document.createElement('tr');
    table.appendChild(tableHeader);
    let headerCell=document.createElement('th');
    tableHeader.appendChild(headerCell);
    headerCell.textContent='name';
    for(let i=0;i<workingHhours.length;i++){
        headerCell=document.createElement('th');
        tableHeader.appendChild(headerCell);
        headerCell.textContent=workingHhours[i];
    }
    headerCell = document.createElement('th');
    headerCell.textContent='Total Daily income';
    tableHeader.appendChild(headerCell);
}


function footer(){
    let tableFooter = document.createElement('tr');
    table.appendChild(tableFooter);
    let cell=document.createElement('th');
    tableFooter.appendChild(cell);
    cell.textContent='Total';
    let total;
    let superTotal = 0;
    for(let i=0;i<workingHhours.length;i++){
        total=0
        for(let j=0;j<shopList.length;j++){
            total+=shopList[j].cookiesSoldPerHour[i];
        }
        cell=document.createElement('th');
        tableFooter.appendChild(cell);
        cell.textContent=total;
        superTotal+=total;
    }
    cell=document.createElement('th');
    tableFooter.appendChild(cell);
    cell.textContent=superTotal;
}

let seattle = new Shop('seattle',23,65,6.3);
let tokyo = new Shop('tokyo',3,24,1.2);
let dubai = new Shop('dubai',11,38,3.7);
let paris = new Shop('paris',20,38,2.3);
let lima = new Shop('lima',2,16,4.6);


header();

for(let i=0;i<shopList.length;i++){
    shopList[i].render();
}
footer();
