function smallestOfThreeNums(x,y,z) {
let smallestNum = Number.MAX_SAFE_INTEGER;

smallestNum = smaller(x, smallestNum);
smallestNum = smaller(y, smallestNum);
smallestNum = smaller(z, smallestNum);

function smaller(num, small) {
    if(num < small) {
        small = num;
    }

    return small;
};

return smallestNum;

}

console.log(smallestOfThreeNums(2,
    5,
    3
    ));