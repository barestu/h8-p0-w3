function targetTerdekat(arr) {
  // you can only write your code here!
  
  let indexO = arr.indexOf('o');
  let jarak = 0;
  let jarakTerdekat = arr.length;
  
  if (arr.indexOf('x') === -1) {
    return 0;
  }
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'x') {
      jarak = Math.abs(i - indexO);
      if (jarak < jarakTerdekat) {
        jarakTerdekat = jarak;
      }
    }
  }
  
  return jarakTerdekat;
}

// TEST CASES
console.log(targetTerdekat(['', '', 'o', '', '', 'x', '', 'x'])); // 3
console.log(targetTerdekat(['o', '', '', '', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', '', '', '', 'x', 'x', 'o', ''])); // 1
console.log(targetTerdekat(['', '', 'o', ''])); // 0
console.log(targetTerdekat(['', 'o', '', 'x', 'x', '', '', 'x'])); // 2