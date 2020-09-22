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