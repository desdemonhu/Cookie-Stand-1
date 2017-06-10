'use strict';

function getNumber() {
var ranNumb = Math.random (0-10);//generate random numbers
var roundNumb = Math.floor(((Math.random()*10)+1)) //rounds the result of ranNumb, multiplies by 10 and adds 1. This is to avoid decimals and returns of "1" or "0"
  return roundNumb + ranNumb; //returns the result
  }

getNumber();//used this function to generate the random numbers for the min and max values below I could not figure out how to get them to work inside the object




var pike = {      //object for location, supposed to store minimum and maximum customers
                  //calculate the average of cookies sold per hour and update on the front facing page, using a method that is taking me longer to sort out than planned
                  //These comments apply to every object-in progress- on this page
min:3,
max:10,
getAverage: function(){
  return this.min + this.max/2; // this is the method I am trying to use to calculate average then store it into an array, not sure how to get this up and running still working on it
}
};


var seaTac = {
  var minCust:2,
  var maxCust:6,
  getAverage: function(){
    return this.min + this.max/2;

};

var seaCenter= {
  var minCust:2,
  var maxCust:9,
  getAverage: function(){
    return this.min + this.max/2;
};

var capHill = {
  var minCust:4,
  var maxCust:9,
  getAverage: function(){
    return this.min + this.max/2;
};

var alki = {
  var minCust:8,
  var maxCust:10,
  getAverage: function(){
    return this.min + this.max/2;
};
