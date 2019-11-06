'use strict';

var tableReference = document.getElementById('store-sales');
var storeHours = ['6 am.', '7 am.', '8 am.', '9 am.', '10 am.', '11 am.', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];
var allStoreData = [];


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
  for (var hoursIndex = 0; hoursIndex < storeHours.length; hoursIndex++) {
    var hourlyCookieSales = Math.ceil(this.customersPerHour() * this.avgCookies);
    this.cookiesSoldPerHour.push(hourlyCookieSales);
    this.totalCookies += hourlyCookieSales;
  }
  renderTableData(this);
  allStoreData.push(this);
  // renderColumnTotals(this);
};

// render header row; start by creating a blank cell first column the cycle through hours
function renderHours(domReference) {
  var tr = document.createElement('tr');
  var th = document.createElement('th');
  th.textContent = '';
  tr.appendChild(th);
  
  for (var hoursIndex = 0; hoursIndex < storeHours.length; hoursIndex++) {
    th = document.createElement('th');
    th.textContent = storeHours[hoursIndex];
    tr.append(th);
  }
  th = document.createElement('th');
  th.textContent = 'Totals';
  tr.appendChild(th);
  domReference.append(tr);
}

// render table data and totals for rows
function renderTableData(object) {
  var tr =document.createElement('tr');
  var th = document.createElement('th');
  th.textContent = object.storeName;
  tr.appendChild(th);

  for (var hoursIndex = 0; hoursIndex < storeHours.length; hoursIndex++) {
    var td = document.createElement('td');
    td.textContent = object.cookiesSoldPerHour[hoursIndex];
    tr.appendChild(td);
  }
  th = document.createElement('th');
  th.textContent = object.totalCookies;
  tr.appendChild(th);
  tableReference.appendChild(tr);
}

// // create column total for all hourly sales
function renderColumnTotals(object) {
  var tr = document.createElement('tr');
  var th = document.createElement('th');
  th.textContent = 'test';
  tr.appendChild(th);

  var hourlyTotalStoreSales = 0
  for (var hoursIndex = 0; hoursIndex < storeHours.length; hoursIndex++) {
    for(var storeIndex = 0; storeIndex < allStoreData.length; storeIndex++) {
      hourlyTotalStoreSales = allStoreData.cookiesSoldPerHour[storeIndex];
      // hourlyTotalStoreSales +=
    }
  }
}

// calliong header row
renderHours(tableReference);

// create an Instance for each store
var seattle = new Store('Seattle', 23, 65, 6.3);
var tokyo = new Store('Tokyo', 3, 24, 1.2);
var dubai = new Store('Dubai', 11, 38, 3.7);
var paris = new Store('Paris', 20, 38, 2.3);
var lima = new Store('Lima', 2, 16, 4.6);
