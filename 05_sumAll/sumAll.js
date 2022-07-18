const sumAll = function(num, num2) {
    var totalNum = 0;

        
    if (num < 0 || num2 < 0) {
        return 'ERROR'
    }

    if (!Number.isInteger(num) || !Number.isInteger(num2)) {
        return 'ERROR'
    }

    if (num < num2) {
        for (i = num; i <= num2; i++) {
        totalNum += i;
        }
    } else if (num > num2) {
        for (i = num; i >= num2; i--) {
            totalNum += i;
        }
    } 
    return totalNum;
};

// Do not edit below this line
module.exports = sumAll;

/* 

1, 4

num = 1
num2 = 4

totalNum = 0

i = num; i <= num2; i++ 

totalNum += num

it 1 ... 0 + 1
it 2 ... 1 + 2
it 3 ... 3 + 3
it 4 ... 6 + 4


*/