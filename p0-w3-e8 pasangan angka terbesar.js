function pasanganTerbesar(num) {
  // you can only write your code here!
  
  var strNum = String(num);
  var biggestPair = '0';
  
  for (let i = 0; i < strNum.length; i++) {
    if(biggestPair < strNum[i] + strNum[i + 1]) {
      biggestPair = strNum[i] + strNum[i + 1];
    }
  }
  
  return Number(biggestPair);
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
