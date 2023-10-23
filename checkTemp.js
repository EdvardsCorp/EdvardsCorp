temp = 30; // <- prompt("Sisesta temperatuur")
cel = parseInt (temp); // cel = mis sisestub temp-ist / näide 19

function checkTemp() {
  // kui sisetatud nr väiksem/võrdne kui 20 käivita funkt // kui nr on suurem kui 20 liigu edasi
  if (cel <= 20) {
    return "-1"; // funkt utleb teha : näita con.log ("-1")
  }
  // või siis kui sisestatud nr väiksem võrdne 40 kui nr on suurem kui 40 liigu edasi
  else if (cel <= 40) {
    return "0"; // siis näita con.log ("0")
  } else if (cel >= 41) {
    return "1";
  } else if (cel != "") {
    return "Sisesta number!";
  }
}

console.log(checkTemp()); 
