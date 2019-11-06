'use strict';

var storeHours = ['6 am.', '7 am.', '8 am.', '9 am.', '10 am.', '11 am.', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];
var allStoreData = [];
var tableReference = document.getElementById('store-sales');


// create the Store object
function Store(storeName, customerMin, customerMax, avgCookies) {
  this.storeName = storeName;
  this.customerMin = customerMin;
  this.customerMax = customerMax;
  this.avgCookies = avgCookies;
  this.customersPerHour = function () {
    var randomHourlyCustomers = Math.floor(Math.random() * (this.customerMax - this.customerMin) + this.customerMin);
    return randomHourlyCustomers;
  }
  this.cookiesSoldPerHour = [];
  this.totalCookies = 0;

  // calculate cookies sold per hour and push them to the cookies sold per hour array
  for (var cookieHourIndex = 0; cookieHourIndex < storeHours.length; cookieHourIndex++) {
    var hourlyCookieSales = Math.ceil(this.customersPerHour() * this.avgCookies);
    this.cookiesSoldPerHour.push(hourlyCookieSales);
    this.totalCookies += hourlyCookieSales;
  }
  renderTableData(this);
  allStoreData.push(this);
};

// render header row; start by creating a blank cell first column the cycle through hours
function renderHours(domReference) {
  var tr = document.createElement('tr');
  var th = document.createElement('th');
  th.textContent = '';
  tr.appendChild(th);

  for (var cookieHourIndex = 0; cookieHourIndex < storeHours.length; cookieHourIndex++) {
    th = document.createElement('th');
    th.textContent = storeHours[cookieHourIndex];
    tr.append(th);
  }
  th = document.createElement('th');
  th.textContent = 'Totals';
  tr.appendChild(th);
  domReference.append(tr);
}

// render table data and totals for rows
function renderTableData(object) {
  var tr = document.createElement('tr');
  var th = document.createElement('th');
  th.textContent = object.storeName;
  tr.appendChild(th);

  for (var cookieHourIndex = 0; cookieHourIndex < storeHours.length; cookieHourIndex++) {
    var td = document.createElement('td');
    td.textContent = object.cookiesSoldPerHour[cookieHourIndex];
    tr.appendChild(td);
  }
  th = document.createElement('th');
  th.textContent = object.totalCookies;
  tr.appendChild(th);
  tableReference.appendChild(tr);
}

renderHours(tableReference);


// create Column Totals for ALL hourly sales

function renderAllHourlyTotals(domReference) {
  var tr = document.createElement('tr');
  var th = document.createElement('th');
  th.textContent = 'Total';
  tr.appendChild(th);
  var totalTotal = 0;

  for (var cookieTotalIndex = 0; cookieTotalIndex < storeHours.length; cookieTotalIndex++) {
    console.log('cookie total indes ', cookieTotalIndex);
    var cookieStoreTotals = 0;
    for (var storeIndex = 0; storeIndex < allStoreData.length; storeIndex++) {
      cookieStoreTotals += allStoreData[storeIndex].cookiesSoldPerHour[cookieTotalIndex];
    }
    console.log(`Cookie store totals by hour ${cookieStoreTotals}`);
    var td = document.createElement('td');
    td.textContent = cookieStoreTotals;
    tr.appendChild(td);
    totalTotal += cookieStoreTotals;
  }
  
  th = document.createElement('th');
  th.textContent = totalTotal;
  tr.appendChild(th);
  domReference.appendChild(tr);
}

// create an Instance for each store
var seattle = new Store('Seattle', 23, 65, 6.3);
var tokyo = new Store('Tokyo', 3, 24, 1.2);
var dubai = new Store('Dubai', 11, 38, 3.7);
var paris = new Store('Paris', 20, 38, 2.3);
var lima = new Store('Lima', 2, 16, 4.6);

renderAllHourlyTotals(tableReference);
// function cleanScreenAndRenderAll() {

//   tableReference.innerHTML = "";

// }

// // forms; 
// var form = document.getElementById('add-store');
// form.addEventListner('submit', function(event) {
//   event.preventDefault();
//   alert('I am watching');
//   alert(event.target.name.value);
// }
