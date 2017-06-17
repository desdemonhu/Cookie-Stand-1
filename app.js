'use strict';
// // need to use object constructors to replace literals for 5! stores
// //then dynamically build html page using selectors
// //containing data for hourly sales at each location
// //reference book and lecture on youtube for review
//
// // //object constructors
function Location(shop, min, max, avgc) {
  this.location = shop;
  this.min = min;
  this.max = max;
  this.avgc = avgc;
  this.hourlySales = cookiesPerHour(this);
  //this.dailyTotal = dailytotal;
}
function hourlysale(min, max, avgc){
  var customers = Math.floor(Math.random() * (max - min + 1) + min);
  var cookiesPerHour = Math.ceil(customers * avgc);
  return cookiesPerHour;
}

function cookiesPerHour(location){
  var cookiePower = [];
  for(var i = 0; i < 15; i++){
    cookiePower.push(hourlysale(location.min, location.max, location.avgc));
  }
  console.log(cookiePower);
  return cookiePower;
}

Location.protoype.makeRow = function(){
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
};

var pike = new Location('pike', 23, 65, 6.3);

// var alki = new Location('alki','hourlysales','dailytotal');
// var pike = new Location('pike','hourlysales','totalsales');
// var seacenter = new Location('seacenter','hourlysales','totalsales');
// var caphill = new Location('caphill','hourlysales','totalsales');
// var seatac = new Location('seatac','hourlysales','totalsales');
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
