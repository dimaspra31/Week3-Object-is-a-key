//TIPS: gunakan method toUpperCase() dan toLowerCase()
function tukarBesarKecil(kalimat) {
let hasil = '';
  for (let i = 0; i < kalimat.length; i++) {
    const huruf = kalimat[i];
    if (huruf === huruf.toUpperCase()) {
      hasil += huruf.toLowerCase();
    } else {
      hasil += huruf.toUpperCase();
    }
  }
  return hasil;
}

// TEST CASES
console.log(tukarBesarKecil("Hello World")); // "hELLO wORLD"
console.log(tukarBesarKecil("I aM aLAY")); // "i Am Alay"
console.log(tukarBesarKecil("My Name is Bond!!")); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil("IT sHOULD bE me")); // "it Should Be ME"
console.log(tukarBesarKecil("001-A-3-5TrdYW")); // "001-a-3-5tRDyw"
