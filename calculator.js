export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function divide(a, b) {
  return a / b;
}

export function multiply(a, b) {
  return a * b;
}

export function analyzeArray(array = []) {
  return {
    average: getAverage(array),
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
}

function getAverage(array = []) {
  let sum = array.reduce((prev, curr) => {
    return prev + curr;
  }, 0);
  return sum / array.length;
}
