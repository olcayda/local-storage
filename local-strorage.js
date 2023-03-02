// local storage

/** ÇALIŞTIRILABİLEN ÖRNEK 
 * let numara = 0;
setInterval(() => {
  numara++;
  numaraYazisi.textContent = numara;
}, 1000);
 */

/** ÇALIŞTIRILAMAYAN ÖRNEK (YAĞIZIN SORUSU)
 * for (i = 1; i < 4; i++) {
  setTimeout(() => {
    numaraYazisi.textContent = i;
  }, 1000 * i);
}
 */
const numaraYazisi = document.querySelector(".numara");

const numara = 250;

localStorage.setItem("sayi", String(numara));

const deger = localStorage.getItem("sayi");
numaraYazisi.textContent = deger;

setTimeout(function () {
  localStorage.removeItem("sayi");
  numaraYazisi.textContent = 0;
}, 3000);
