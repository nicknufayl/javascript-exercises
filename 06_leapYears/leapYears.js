const leapYears = function(year) {
    
    if (year%100 === 0)
    {
        if (year%400 === 0) return true
        else return false
    } else if (year%4 === 0) return true
    else return false
};

// Do not edit below this line
module.exports = leapYears;

/*

if year%4 = 0 then leap year return true
if year%100 > 0 then not leap year return false
if year%400 = 0 then leap year return true

*/