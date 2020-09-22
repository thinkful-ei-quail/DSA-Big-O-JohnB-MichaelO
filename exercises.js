function countSheep(sheep) {
  for (let i = sheep; i >= 0; i--) {
    if (i === 0) {
      console.log('All sheep jumped over the fence');
    }
    else {
      console.log(`${i}: Another sheep jumps over the fence`);
    }
  }
}
countSheep(5);

function powerCalculator(base, exp) {
  let product = 1;
  for (let i = 0; i < exp; i++) {
    product = product * base;
    console.log('Product:', product);
  }
}
powerCalculator(10, 2);


function reverseString(str) {
  let revStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    revStr = revStr + str[i];
  }
  return revStr;
}
console.log(reverseString('hello'));

function triangleNumber(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = sum + i;
  }
  console.log(sum);
  return sum;
}
triangleNumber(5);
triangleNumber(3);
triangleNumber(10);

//Alternate
function fibonacci(num) {
  if (num === 1 || num === 2) return 1;
  let prevNum1 = 1;
  let prevNum2 = 1;
  let answer = 1;
  let sequence = [prevNum1, prevNum2];
  for (let i = 2; i < num; i++) {
    prevNum2 = prevNum1;
    prevNum1 = answer;
    answer = prevNum1 + prevNum2;
    sequence.push(answer);
  }
  return sequence;
}
console.log(fibonacci(2));

//Alternate
function factorial(num) {
  let current = num;
  let answer = 1;
  while (current > 0) {
    answer *= current;
    current--;
  }
  return answer;
}
console.log(factorial(0));
function stringSplitter(str, separator) {
  let splitStr = [];
  let letterTracker = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === separator) {
      splitStr.push(letterTracker);
      letterTracker = '';
    } else if (i === str.length - 1) {
      letterTracker = letterTracker + str[i];
      splitStr.push(letterTracker);
    } else {
      letterTracker = letterTracker + str[i];
    }
  }
  return splitStr;
}

console.log(stringSplitter('02/20/2020/1234/3234/567/355', '/'));

function makeFibonacci(num) {
  let prevNum1 = 0;
  let prevNum2 = 0;
  let fibArr = [];
  for (let i = 1; i <= num; i++) {
    if (prevNum1 === 0 && prevNum2 === 0) {
      fibArr.push('1');
      prevNum1 = 1;
    } else {
      fibArr.push(prevNum2 + prevNum1);
      let temp = prevNum1;
      prevNum1 = prevNum2 + prevNum1;
      prevNum2 = temp;
    }
  }
  return fibArr.join(',');
}

console.log(makeFibonacci(7));

function calcFactorial(num) {
  let product = 1;
  for (let i = 1; i <= num; i++) {
    product = product * i;
  }
  return product;
}

console.log(calcFactorial(0));
