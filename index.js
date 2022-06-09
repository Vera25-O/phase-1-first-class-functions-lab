const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = (drivers) => {
 return   drivers.slice(0,2);
}
const returnLastTwoDrivers = (drivers) => {
    return   drivers.slice(-2);
   }
 const  selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
   
 const createFareMultiplier = function (multiplier){
return function(price){
return multiplier*price;
}
} 
function fareDoubler(fare){
    return fare*2;
}
function fareTripler(fare){
    return fare*3;
}
function selectDifferentDrivers(arrayOfDrivers, funct){
    return funct(arrayOfDrivers);
}




