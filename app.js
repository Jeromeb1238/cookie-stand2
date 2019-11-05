'use strict';

var storeHours = ['6 am.', '7 am.', '8 am.', '9 am.', '10 am.', '11 am.', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];

// create the SEATTLE store objects
var seattleStore = {
  storeLocation: 'seattle',
  storeMin: 23,
  storeMax: 65,
  avgCookiesPerCustomer: 6.3,
  customersPerHour: function () {
    var randomHourlyCustomers = Math.floor(Math.random() * (this.storeMax - this.storeMin) + this.storeMin);
    return randomHourlyCustomers;
  },
  cookiesSoldPerHour: [],
  totals: 0
};

// calculate cookies sold per hour and push them to the cookies sold per hour array
for (var hoursIndex = 0; hoursIndex < storeHours.length; hoursIndex++) {
  var cookieSales = Math.ceil(seattleStore.customersPerHour() * seattleStore.avgCookiesPerCustomer);
  seattleStore.cookiesSoldPerHour.push(cookieSales);
  seattleStore.totals += cookieSales;

}
console.log('total cookies ' + seattleStore.totals);

// output to document cookies sold per hour by store; time and qty cookies

// first get the reference element
var storeSalesElement = document.getElementById('store-sales');

//  second, create a heading with store location
var storeName = document.createElement('h2');
storeName.textContent = seattleStore.storeLocation;
storeSalesElement.appendChild(storeName);

// third, cycle through array and create unordered list of each hour and # cookies sold
var hourlySales = document.createElement('ul');

for (var hourIndex = 0; hourIndex < storeHours.length; hourIndex++) {
  var storeHourElement = document.createElement('li');
  var currentHour = storeHours[hourIndex];
  storeHourElement.textContent = `${currentHour}: ${seattleStore.cookiesSoldPerHour[hourIndex]} cookies`;
  hourlySales.appendChild(storeHourElement);
}
storeSalesElement.appendChild(hourlySales);

// create a totals line and append to the bottom
var totalsElement = document.createElement('li');
totalsElement.textContent = `Total cookies ${seattleStore.totals}`;
storeSalesElement.appendChild(totalsElement);


// create the TOKYO store objects
var tokyoStore = {
  storeLocation: 'tokyo',
  storeMin: 3,
  storeMax: 24,
  avgCookiesPerCustomer: 1.2,
  customersPerHour: function () {
    var randomHourlyCustomers = Math.floor(Math.random() * (this.storeMax - this.storeMin) + this.storeMin);
    return randomHourlyCustomers;
  },
  cookiesSoldPerHour: [],
  totals: 0
};

// calculate cookies sold per hour and push them to the cookies sold per hour array
for (var hoursIndex = 0; hoursIndex < storeHours.length; hoursIndex++) {
  var cookieSales = Math.ceil(tokyoStore.customersPerHour() * tokyoStore.avgCookiesPerCustomer);
  tokyoStore.cookiesSoldPerHour.push(cookieSales);
  tokyoStore.totals += cookieSales;

}
console.log('total cookies ' + tokyoStore.totals);

// output to document cookies sold per hour by store; time and qty cookies

// first get the reference element
var storeSalesElement = document.getElementById('store-sales');

//  second, create a heading with store location
var storeName = document.createElement('h2');
storeName.textContent = tokyoStore.storeLocation;
storeSalesElement.appendChild(storeName);

// third, cycle through array and create unordered list of each hour and # cookies sold
var hourlySales = document.createElement('ul');

for (var hourIndex = 0; hourIndex < storeHours.length; hourIndex++) {
  var storeHourElement = document.createElement('li');
  var currentHour = storeHours[hourIndex];
  storeHourElement.textContent = `${currentHour}: ${tokyoStore.cookiesSoldPerHour[hourIndex]} cookies`;
  hourlySales.appendChild(storeHourElement);
}
storeSalesElement.appendChild(hourlySales);

// create a totals line and append to the bottom
var totalsElement = document.createElement('li');
totalsElement.textContent = `Total cookies ${tokyoStore.totals}`;
storeSalesElement.appendChild(totalsElement);


// create the DUBAI store objects
var dubaiStore = {
  storeLocation: 'dubai',
  storeMin: 11,
  storeMax: 38,
  avgCookiesPerCustomer: 3.7,
  customersPerHour: function () {
    var randomHourlyCustomers = Math.floor(Math.random() * (this.storeMax - this.storeMin) + this.storeMin);
    return randomHourlyCustomers;
  },
  cookiesSoldPerHour: [],
  totals: 0
};

// calculate cookies sold per hour and push them to the cookies sold per hour array
for (var hoursIndex = 0; hoursIndex < storeHours.length; hoursIndex++) {
  var cookieSales = Math.ceil(dubaiStore.customersPerHour() * dubaiStore.avgCookiesPerCustomer);
  dubaiStore.cookiesSoldPerHour.push(cookieSales);
  dubaiStore.totals += cookieSales;

}
console.log('total cookies ' + dubaiStore.totals);

// output to document cookies sold per hour by store; time and qty cookies

// first get the reference element
var storeSalesElement = document.getElementById('store-sales');

//  second, create a heading with store location
var storeName = document.createElement('h2');
storeName.textContent = dubaiStore.storeLocation;
storeSalesElement.appendChild(storeName);

// third, cycle through array and create unordered list of each hour and # cookies sold
var hourlySales = document.createElement('ul');

for (var hourIndex = 0; hourIndex < storeHours.length; hourIndex++) {
  var storeHourElement = document.createElement('li');
  var currentHour = storeHours[hourIndex];
  storeHourElement.textContent = `${currentHour}: ${dubaiStore.cookiesSoldPerHour[hourIndex]} cookies`;
  hourlySales.appendChild(storeHourElement);
}
storeSalesElement.appendChild(hourlySales);

// create a totals line and append to the bottom
var totalsElement = document.createElement('li');
totalsElement.textContent = `Total cookies ${dubaiStore.totals}`;
storeSalesElement.appendChild(totalsElement);


// create the PARIS store objects
var parisStore = {
  storeLocation: 'paris',
  storeMin: 20,
  storeMax: 38,
  avgCookiesPerCustomer: 2.3,
  customersPerHour: function () {
    var randomHourlyCustomers = Math.floor(Math.random() * (this.storeMax - this.storeMin) + this.storeMin);
    return randomHourlyCustomers;
  },
  cookiesSoldPerHour: [],
  totals: 0
};

// calculate cookies sold per hour and push them to the cookies sold per hour array
for (var hoursIndex = 0; hoursIndex < storeHours.length; hoursIndex++) {
  var cookieSales = Math.ceil(parisStore.customersPerHour() * parisStore.avgCookiesPerCustomer);
  parisStore.cookiesSoldPerHour.push(cookieSales);
  parisStore.totals += cookieSales;

}
console.log('total cookies ' + parisStore.totals);

// output to document cookies sold per hour by store; time and qty cookies

// first get the reference element
var storeSalesElement = document.getElementById('store-sales');

//  second, create a heading with store location
var storeName = document.createElement('h2');
storeName.textContent = parisStore.storeLocation;
storeSalesElement.appendChild(storeName);

// third, cycle through array and create unordered list of each hour and # cookies sold
var hourlySales = document.createElement('ul');

for (var hourIndex = 0; hourIndex < storeHours.length; hourIndex++) {
  var storeHourElement = document.createElement('li');
  var currentHour = storeHours[hourIndex];
  storeHourElement.textContent = `${currentHour}: ${parisStore.cookiesSoldPerHour[hourIndex]} cookies`;
  hourlySales.appendChild(storeHourElement);
}
storeSalesElement.appendChild(hourlySales);

// create a totals line and append to the bottom
var totalsElement = document.createElement('li');
totalsElement.textContent = `Total cookies ${parisStore.totals}`;
storeSalesElement.appendChild(totalsElement);


// create the LIMA store objects
var limaStore = {
  storeLocation: 'lima',
  storeMin: 2,
  storeMax: 16,
  avgCookiesPerCustomer: 4.6,
  customersPerHour: function () {
    var randomHourlyCustomers = Math.floor(Math.random() * (this.storeMax - this.storeMin) + this.storeMin);
    return randomHourlyCustomers;
  },
  cookiesSoldPerHour: [],
  totals: 0
};

// calculate cookies sold per hour and push them to the cookies sold per hour array
for (var hoursIndex = 0; hoursIndex < storeHours.length; hoursIndex++) {
  var cookieSales = Math.ceil(limaStore.customersPerHour() * limaStore.avgCookiesPerCustomer);
  limaStore.cookiesSoldPerHour.push(cookieSales);
  limaStore.totals += cookieSales;

}
console.log('total cookies ' + limaStore.totals);

// output to document cookies sold per hour by store; time and qty cookies

// first get the reference element
var storeSalesElement = document.getElementById('store-sales');

//  second, create a heading with store location
var storeName = document.createElement('h2');
storeName.textContent = limaStore.storeLocation;
storeSalesElement.appendChild(storeName);

// third, cycle through array and create unordered list of each hour and # cookies sold
var hourlySales = document.createElement('ul');

for (var hourIndex = 0; hourIndex < storeHours.length; hourIndex++) {
  var storeHourElement = document.createElement('li');
  var currentHour = storeHours[hourIndex];
  storeHourElement.textContent = `${currentHour}: ${limaStore.cookiesSoldPerHour[hourIndex]} cookies`;
  hourlySales.appendChild(storeHourElement);
}
storeSalesElement.appendChild(hourlySales);

// create a totals line and append to the bottom
var totalsElement = document.createElement('li');
totalsElement.textContent = `Total cookies ${limaStore.totals}`;
storeSalesElement.appendChild(totalsElement);
