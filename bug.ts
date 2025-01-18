function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(10); // Works fine

function printEvenNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

printEvenNumbers(10); // Works fine

function printOddNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    } else {
      // this is the bug 
      console.log("BUG!!!");
    }
  }
}

printOddNumbers(10); // BUG!!! is printed even when the number is odd