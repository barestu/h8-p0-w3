function angkaPalindrome(num) {
  // you can only write your code here!
  if(num < 10) {
    return num+1;
  } else {
    for (let i = 0; i < num * 2; i++) {
      if (String(num) === String(num).split('').reverse().join('')) {
        return num;
      }
      num++;
    }
  }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001