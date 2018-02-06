function dataHandling2(input) {
  // SPLICE UNTUK MERUBAH NILAI ARRAY 2 DIMENSI
  input.splice(1, 4, 'Roman Alamsyah Elsharawy', 'Provinsi Bandar Lampung', '21/05/1989', 'Pria', 'SMA International Metro');
  
  console.log(input);
  
  // SWITCH CASE UNTUK MENCARI NAMA BULAN
  var dateArray1 = input[3].split('/');
  var bulan = parseInt(dateArray1[1]);
  
  switch(bulan) {
    case 1: bulan = 'Januari'; break;
    case 2: bulan = 'Februari'; break;
    case 3: bulan = 'Maret'; break;
    case 4: bulan = 'April'; break;
    case 5: bulan = 'Mei'; break;
    case 6: bulan = 'Juni'; break;
    case 7: bulan = 'Juli'; break;
    case 8: bulan = 'Agustus'; break;
    case 9: bulan = 'September'; break;
    case 10: bulan = 'Oktober'; break;
    case 11: bulan = 'November'; break;
    case 12: bulan = 'Desember'; break;
    default: bulan = '';
  }
  console.log(bulan);
  
  // ARRAY DATE SORT DESCENDING
  tanggalInt = parseInt(dateArray1[0]);
  bulanInt = parseInt(dateArray1[1]);
  tahunInt = parseInt(dateArray1[2]);
  dateJoin = tanggalInt + ' ' + bulanInt + ' ' + tahunInt;
  dateArray2 = dateJoin.split(' ');
  dateDesc = dateArray2.sort(function(value1, value2) { return value1 > value2 });
  
  // UNTUK KONDISI AGAR FORMAT TANGGAL 2 DIGIT (01-31)
  dateNormal = dateDesc[2];
  if(String(dateNormal).length === 1) {
    dateNormal = '0' + dateNormal;
    dateDesc.splice(2, 1, dateNormal)
  }
  
  console.log(dateDesc);
  
  // JOIN DATE, PISAHKAN DENGAN '-'
  date = dateArray1.join('-');
  console.log(date);
  
  // LIMIT NAMA 15 KARAKTER
  namaLimit = input[1].slice(0, 15);
  console.log(namaLimit);
}

var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

dataHandling2(input);



/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * [1989, 21, 05]
 * 21-05-1989
 * Roman Alamsyah
 */
 
 
 
 