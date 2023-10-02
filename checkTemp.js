// võimalus lisada temp, prog et külm - paras - kuum, väljastada

temp = prompt("Sisesta temperatuur"); // <- prompt("Sisesta temperatuur")
cel = temp; // cel = mis sisestub temp-ist / näide 19

// kui sisetatud nr väiksem/võrdne kui 20 käivita funkt // kui nr on suurem kui 20 liigu edasi
if (cel <= 20) {
  console.log("-1"); // funkt utleb teha : näita con.log ("-1")
}
// või siis kui sisestatud nr väiksem võrdne 40 kui nr on suurem kui 40 liigu edasi
else if (cel <= 40) {
  console.log("0"); // siis näita con.log ("0")
}
else if (cel >= 41) {
  console.log("1");
}
else if (cel != "") {
  console.log("Sisesta number!");
}
