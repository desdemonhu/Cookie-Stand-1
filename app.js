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

Location.prototype.makeRow = function(){
  //create element
  var newRowEl = document.createElement('tr');
  var locationDataEl = document.createElement('td');
  locationDataEl.textContent = this.location;
  newRowEl.appendChild(locationDataEl);

  var dailyTotalEL = document.createElement ('td');
  //Configure "mutate"
  // locationDataEl.textContent = this.shop;

  for(var i = 0; i < this.hourlySales.length; i++){
    var hourlySalesEl = document.createElement('td');
    hourlySalesEl.textContent = this.hourlySales[i];
    newRowEl.appendChild(hourlySalesEl);
  }

  // dailyTotalEL.textContent = this.dailytotal;
  //append to child
  // newRowEl.appendChild(dailyTotalEL);
  tableEl.appendChild(newRowEl);
};

var pike = new Location('pike', 23, 65, 6.3);
console.log(pike);

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

var tableEl = document.getElementById('x');
// var newRowEl = document.createElement('tr');
// tableEl.appendChild(newRowEl);
// var tableBodyEl = document.createElement('tbody');
//tableEl.appendChild(newRowEl);

pike.makeRow();

var formEl = document.getElementById('form');
formEl.addEventListener('submit', handleSubmit);

function handleSubmit(event){
  event.preventDefault();
  console.log(event.target.newStore.value);

  var location = event.target.newStore.value;
  var min = event.target.min.value;
  var max = event.target.max.value;
  var avgc = event.target.avgc.value;

  var newStore = new Location(location,min,max,avgc);
  var newStoreRowEl = document.createElement('tr');
  tableEl.appendChild(newStoreRowEl);

  newStore.makeRow();
}

// pike.makeRow(); //If I get it correctly each function call requires specifying the name of the Variable in the configuration(?)
