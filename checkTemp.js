Temp = 40;

function checkTemp(Temp) {
  // kui sisetatud nr väiksem/võrdne kui 20 käivita funkt // kui nr on suurem kui 20 liigu edasi
  if (Temp <= 20) {
    return -1; // funkt utleb teha : näita con.log ("-1")
  }
  // või siis kui sisestatud nr väiksem võrdne 40 kui nr on suurem kui 40 liigu edasi
  else if (Temp <= 40) {
    return 0; // siis näita con.log ("0")
  } else if (Temp >= 41) {
    return 1;
  } else if (Temp != "") {
    return "Sisesta number!";
  }
}

console.log(checkTemp(Temp));
