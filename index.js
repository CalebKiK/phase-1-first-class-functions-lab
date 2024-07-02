// Code your solution in this file!

const drivers = ["Antonia", "Nuru", "Amari", "Mo"];


const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0,2);
}


const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
}


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier (multiplier) {
    return (fare) => fare * multiplier;
   
}


const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMulitplier(3);


function selectDifferentDriver(drivers, selectionFunction) {
    return selectionFunction(drivers.slice());
}


