let myName = "Bintang GP";
const myAge = 17;

console.log(myName);
console.log(myAge);

document.getElementById("nama-saya").innerHTML = "Halo, Saya " + myName;
document.getElementById("info-diri").innerHTML = "Saya berusia " + myAge + " tahun dan suka belajar pemrograman.";

function showAlert() {
    alert("Anda telah mengklik tombol!");
}