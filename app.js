'use strict';
// function getNumber() {
//   var ranNumb = Math.random (0-10);
//   var anotherNumber = Math.floor(((Math.random()*10)+1))
//   return anotherNumber + ranNumb;
// }
//
// getNumber();

var hoursOfOperation = ['0600','0700','0800','0900','1000','1100','1200','1300','1400','1500','1600','1700','1800','2000'];

var hourlyCookieSales = [];
var minCustHour = [];
var maxCustHour = [];



        location: function (minCustHour, maxCustHour) {
            for( var i = 0; i< hoursOfOperation.length) {
              this.minCustHour = minCustHour;
              this.maxCustPerHour = maxCustHour;
              this.hourlyCookieSales = hourlyCookieSales;
              this.minCustHour.push(Math.floor(Math.random()* (this.maxCustHour - this.minCustHour +1));
              this.maxCustHour.push(Math.floor(Math.random()* (this.maxCustHour - this.minCustHour +1));
              this.hourlyCookieSales.push(Math.floor(Math.random()* (this.maxCustHour - this.minCustHour +1));
                   console.log(this.minCustPerHour[i]);
                   console.log(this.maxCustHour[i]);
                   console.lof(this.hourlyCookieSales);
       }

var pikeLocation = new location( 'Pike','2','40','75');
var capHillLocation = new location('Capital Hill','4','7','0');
var alkiLocation = new location('Alki','7','12','17');
var seaTcLocation = new location('seaTac','35','27','57');
