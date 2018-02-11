function mengelompokkanAngka(arr) {
  // you can only write your code here!
  
  // array angka genap
  let angkaGenap = [];
  // array angka ganjil
  let angkaGanjil = [];
  // array angka kelipatan 3
  let angkaKelipatan3 = [];
  // array hasil, gabungan ketiga array sebelumnya
  let hasil = [];
  
  // perulangan sesuai jumlah indeks array inputan
  for (let i = 0; i < arr.length; i++) {
    // jika angka mod 3 = 0, berarti angka tersebut kelipatan 3
    if (arr[i] % 3 === 0) {
      // push angka tsb ke array kelipatan 3
      angkaKelipatan3.push(arr[i]);
    // jika angka mod 2 = 0, berarti angka tersebut genap  
    } else if (arr[i] % 2 === 0) {
      // push angka tsb ke array genap
      angkaGenap.push(arr[i]);
    // jika angka mod 2 = 1, berarti angka tersebut ganjil
    } else if (arr[i] % 2 === 1) {
      // push angka tsb ke array ganjil
      angkaGanjil.push(arr[i]);
    }
  }
  
  // gabungkan masing2 array ke dalam array baru: hasil
  hasil.push(angkaGenap, angkaGanjil, angkaKelipatan3);
  // return output fungsi array hasil
  return hasil;
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]