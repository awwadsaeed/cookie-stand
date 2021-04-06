'use strict'


let workingHhours = ['6 am', '7 am', '8 am', '9 am', '10am', '11am', '12pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];
let mainElemnt = document.getElementById('mainElement');
let table = document.createElement('table');
mainElemnt.appendChild(table);
let shopList = [];
//create the object template
function Shop(name, minCustomer, maxCustomer, avgCookies) {
    this.name = name;
    this.minCustomer = minCustomer;
    this.maxCustomer = maxCustomer;
    this.avgCookies = avgCookies;
    this.cookiesSoldPerHour = [];
    shopList.push(this);
}
//calculate random customer number
Shop.prototype.randomNumber = function () {
    let arr = [];
    for (let i = 0; i < workingHhours.length; i++) {
        arr[i]=Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
    };
    return arr;
}

// calculate avg cookies sold per hour and store in array
Shop.prototype.cookiesSold = function () {


    for (let i = 0; i < 14; i++) {
        this.cookiesSoldPerHour[i] = Math.floor(this.avgCookies * this.randomNumber()[i]);
    }
}
//rendering the table data
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

//make the table header
// function tableHeaders() {
//     let tableHeader = document.createElement('tr');
//     table.appendChild(tableHeader);
//     for (let i = 0; i <= workingHhours.length; i++) {
//         let headerCell = document.createElement('th');
//         table.appendChild(headerCell);
//         if (i == 0) {
//             headerCell.textContent = '------';
//         } else if(i<=workingHhours.length) {
//             headerCell.textContent = `${workingHhours[i - 1]}`;
//         }
//     }
// }
//making the table footer
// function tablefooters() {
//     let tableFooter = document.createElement('tr');
//     table.appendChild(tableFooter);
//     let footerCell = document.createElement('th');
//     tableFooter.appendChild(footerCell);
//     footerCell.textContent = 'total';
//     let totalSales=0;
//     for (let i = 0; i < workingHhours.length-1; i++) {  
//         let totalEachHour=0;
//         for(let j=0;j<shopList.length;j++){
//             totalEachHour+=shopList[j].cookiesSoldPerHour[i];
//         }
//         let footerdata = document.createElement('th');
//         tableFooter.appendChild(footerdata);
//         footerdata.textContent=`${totalEachHour}`;
//         totalSales=totalSales+totalEachHour; 
//         if(i==(workingHhours.length-2)){
//             let footerdata = document.createElement('th');
//             tableFooter.appendChild(footerdata);
//             footerdata.textContent=`${totalSales}`;
//         } 
//     }
// }
//making the table cells outline and the rendering part
// function renderResult(){

//     for(let i=0; i<shopList.length; i++){
//         let dailyTotal=0
//         let row = document.createElement('tr');
//         table.appendChild(row);
//         let branchName=document.createElement('td');
//         row.appendChild(branchName);
//         branchName.textContent=shopList[i].locationName;
//         for(let j=0;j<workingHhours.length;j++){
//             let cellData=document.createElement('td');
//             row.appendChild(cellData);
//             if(j<workingHhours.length-1){
//             cellData.textContent=`${shopList[i].cookiesSoldPerHour[j]}`;
//             dailyTotal+=shopList[i].cookiesSoldPerHour[j];
//             }else{
//             cellData.textContent=`${dailyTotal}`;       
//             }
//         }
//     }
// }

//getting object properties from the methods
// function getProperty(){
//     for(let i=0;i<shopList.length;i++){
//         shopList[i].cookiesSold();
//     }
// }

//creating objects
let seattle = new Shop('seattle',23,65,6.3);
let tokyo = new Shop('tokyo',3,24,1.2);
let dubai = new Shop('dubai',11,38,3.7);
let paris = new Shop('paris',20,38,2.3);
let lima = new Shop('lima',2,16,4.6);
//getting thier properties
// getProperty();
//creat the table header
header();
//render the tabel contents
for(let i=0;i<shopList.length;i++){
    shopList[i].render();
}
//table footer
// tablefooters();