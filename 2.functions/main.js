console.log(getArrayParams([100, -100, 50]));
console.log(getArrayParams([10, 20, 30]));
console.log(getArrayParams([1, -4, 7]));

//console.log(makeWork([[10,10,20],[20,19,10]],worker));
//console.log(makeWork([[12,23,31],[41,5,61]],worker));
//console.log(makeWork([[14,21,36],[15,26,39]],worker));

//
//worker
console.log(worker([1, 2, 3])); // 6
console.log(worker([4, 5, 6])); // 15
let arrOfArr = [[1, 2, 3], [4, 5, 6]];
makeWork(arrOfArr, worker); // 15

console.log(worker([10, 10, 11])); // 31
console.log(worker([20, 10])); // 30
arrOfArr = [[10, 10, 11], [20, 10]];
makeWork(arrOfArr, worker); // 31

console.log(worker([0, 0, 0])); // 0
console.log(worker([-1, -100])); // -101
arrOfArr = [[0, 0, 0], [-1, -100]];
makeWork(arrOfArr, worker); // 0

//worker2
console.log(worker2([10, 20, 30])); // 
console.log(worker2([-40, -50, -65])); // 
arrOfArr = [[10, 20, 30], [-40, -50, -65]];
makeWork(arrOfArr, worker2); // 25

console.log(worker2([10, 10, 11])); //  
console.log(worker2([20, 10])); //
arrOfArr = [[10, 10, 11], [20, 10]];
makeWork(arrOfArr, worker2); // 10

console.log(worker2([0, 1, 2])); //  
console.log(worker2([-1, -100])); //
arrOfArr = [[0, 1, 2], [-1, -100]];
makeWork(arrOfArr, worker2); // 99