function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log('Result: ' + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void): void {
  cb(add(n1, n2));
}

let combineValues: (a: number, b: number) => number;
combineValues = add;

addAndHandle(5, 4, printResult);
