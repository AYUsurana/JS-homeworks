// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;

  // Мой код  
  min = arr[0];
  max = arr[0];
  sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    
    if (arr[i] > max) {
      max = arr[i];
    }

    sum = sum + arr[i];
  }

  avg = parseFloat((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum;

  // Мой код
  sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max;

  // мой код
  max = 0;
  for (let i = 0; i < arrOfArr.length; i++) {
    
    let warray = func(arrOfArr[i]);
    
    if (warray > max) 
    {
      max = warray;
    }

    warray = 0;
  }
  
  return max;
}

// Задание 3
function worker2(arr) {
  // Мой код

  let max = arr[0];
  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }

    if (arr[i] < min) {
      min = arr[i];
    }
  }
  
  return let summ = Math.abs(max - min);;
}
