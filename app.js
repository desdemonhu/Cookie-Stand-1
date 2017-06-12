'use strict';
// // need to use object constructors to replace literals for 5! stores
// //then dynamically build html page using selectors
// //containing data for hourly sales at each location
// //reference book and lecture on youtube for review
//
// // //object constructors
function Location(shop,hourlysales,dailytotal) {
  this.location = shop;
  this.hourlySales = hourlysales;
  this.dailyTotal = dailytotal;
}
function makeRow(Location) {
  //create element
  var newRowEl = document.createElement('tr');
  var locationDataEl = document.createElement('tr');
  var hourlySalesEl = document.createElement('tr');
  var dailyTotalEL = document.createElement ('tr');
  //Configure "mutate"
  locationDataEl.textContent = pike.shop;
  hourlySalesEl.textContent = pike.hourlysales;
  dailyTotalEL.textContent = pike.dailytotal;
  //append to child
  tableBodyEl.appendChild(newRowEl);
}

var alki = new Location('alki','hourlysales','dailytotal');
var pike = new Location('pike','hourlysales','totalsales');
var seacenter = new Location('seacenter','hourlysales','totalsales');
var caphill = new Location('caphill','hourlysales','totalsales');
var seatac = new Location('seatac','hourlysales','totalsales');
// console.log(alki);
// console.log(pike);
// console.log(seacenter); // all of these console's were successfull
// console.log(caphill);
// console.log(seatac);

var tableEl = document.getElementById('dynamic-table');
var newRowEl = document.createElement('tr');
var tableBodyEl = document.createElement('tbody');
tableEl.appendChild(tableBodyEl);

makeRow(pike); //If I get it correctly each function call requires specifying the name of the Variable in the configuration(?)
