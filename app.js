'use strict';
// dclate some mathy stuff for the properties?

function CookieShop(hourlySales,dailySales) {
  this.location = location;
  this.dailySales = dailySales;
  this.hourlySales = hourlySales;
}
//this is constructor function now we set up the table
 //Step 1 - create element
function makeRow(cookieShop) {
  var newRowEl = document.createElement('tr');
    //Step 2 - Configure/Mutate the ROW element
  var cookieShopDataEl = document.createElement('td');
  cookieShopDataEl.textContent = cookieshop.location;
  newRowEl.appendChild(cookieShopDataEl);

  var dailySales = document.createElement('td');
  dailySalesDataEl.textContent = cookieShop.dailySales;
  newRowEl.appendChild(dailySalesDataEl);

  var hourlySales = document.createElement('td');
  hourlySalesDataEl.textContent = cookieShop.hourlySales;
  newRowEl.appendChild(hourlySalesDataEl);

  //Step 3 Append to the document

  tableBodyEl.appendChild(newRowEl);
}

function test( test) {
  console.log('it lives!');
  console.log('but will it dynamically render?');
}

test();
var pike = new cookieShop('Pike', hourlySalesPike, dailySalesPike);
var alki = new cookieShop('Alki', hourlySalesAlki,dailySalesAlki);
var SeaCenter = new cookieShop('SeaCenter', hourlySalesSeacenter,dailySalesSeaCenter);
var capHill = new cookieShop('capHill', hourlySalesCapHill,dailySalesCapHill);
var seaTac = new cookieShop('seaTac', hourlySalesseaTac,dailySalesseaTac);

var hourlySalesPike;
var dailySalesPike;
var hourlySalesseaTac;
var dailySalesseaTac;
var hourlySalesCapHill;
var dailySalesCapHill;
var hourlySalesSeacenter;
var dailySalesSeaCenter;

// var alki = new Location('alki','hourlysales','dailytotal');
// var pike = new Location('pike','hourlysales','totalsales');
// var seacenter = new Location('seacenter','hourlysales','totalsales');
// var caphill = new Location('caphill','hourlysales','totalsales');
// var seatac = new Location('seatac','hourlysales','totalsales');
// // console.log(alki);
// // console.log(pike);
// // console.log(seacenter); // all of these console's were successfull
// // console.log(caphill);
// // console.log(seatac);
//
// var tableEl = document.getElementById('dynamic-table');
// var newRowEl = document.createElement('tr');
// var tableBodyEl = document.createElement('tbody');
// tableEl.appendChild(tableBodyEl);
//
// makeRow(pike); //If I get it correctly each function call requires specifying the name of the Variable in the configuration(?)
