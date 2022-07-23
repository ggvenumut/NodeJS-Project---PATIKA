/* Ödev 1
 Node.JS Komut Satırı Kullanımı
 Hepimizin Matematik derslerinden bildiği üzere Dairenin Alanı = π x r2 şeklinde hesaplanır. Node.JS Javascript çalışma ortamında yarıçap değerini konsoldan parametre olarak girerek alanı bulmaya çalışacağız. Konsol çıktısı: Yarıçapı (Yarıçap) olan dairenin alanı: (Alan) şeklinde olmalıdır.
*/

const arguments = process.argv.slice(2);

function daireAlani(yaricap) {
  let daireAlan = 3.14 * (yaricap * yaricap);
  console.log(daireAlan);
}
daireAlani(arguments);
