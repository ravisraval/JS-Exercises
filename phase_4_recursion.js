let range = function(start, end) {
  if (start === end) {
    return [start];
  }
  return [start].concat(range(start + 1, end));
};



let sumRec = function(numArr) {
  if (numArr.length === 1) {
    return numArr[0];
  }
  return numArr[0] + sumRec(numArr.slice(1));
};

let exponent = function(base, exp) {
  if (exp === 0) {
    return 1;
  }
  return base * exponent(base, exp - 1);
};

let exponent3 = function(base, exp) {
  if (exp === 0) {
    return 1;
  } else if (exp === 1){
    return base;
  }

  if (exp % 2 === 0) {
    let subAns = exponent3(base, exp / 2);
    return subAns * subAns;
  } else {
    let subAns = exponent3(base, (exp - 1) / 2);
    return base * (subAns * subAns);
  }
};

let fibonacci = function(n) {
  if (n <= 2) {
    return n === 1 ? [1] : [1,1];
  }

  let prev = fibonacci(n - 1);
  console.log(prev);
  prev.push(prev[prev.length - 1] + prev[prev.length - 2]);
  return prev;
};


let bsearch = function(arr, target) {
  
}
