const data = [
  "FWmcfgAWxe",
  "KnFJXGcACq",
  "cCYApSPiX0",
  "iHwbq2giBx",
  "X5Ebl6sjLf",
  "Rxc2oFCgI4",
  "jFtFONF7NK",
  "b8iIhVOJl6",
  "aGlxlytbic",
  "30e8YSgLzd",
  "0oj65bHiHZ",
  "NtykZPC0DH",
  "qgj6THRgT0",
  "rFM7G7SJbB",
  "lcu5UKrj7w",
  "xurxryxn5u",
  "7XDXFJ8Axh",
  "RuQU6EeJyi",
  "go3SD5CYYT",
  "c8sOoXTa59",
  "Vh0QfTkdKk",
  "rrYBTg4sWc",
  "CmeWiA73ig",
  "iM8MD2IXle",
  "SQk4WlTLiE",
  "wn3JhYo93i",
  "Hlh1Amt1jo",
  "Rd6hiOekcE",
  "LMKIBsBBmQ",
  "nb72pL5LKQ",
  "8GufbXPMRb",
  "OO5OnLzsdP",
  "hLddf4izXl",
  "6x8suntNs6",
  "8VATvVOQZR",
  "jxL8zSOcZN",
  "87YqnuB6Mc",
  "sqr1WbVsWv",
  "fLC17MbW59",
  "tJ6Z5r6mDd",
  "iiEffxACk7",
  "C6w4k9AS2N",
  "9rQTNM8xmG",
  "x4JQLDr6hd",
  "3bYXSm7Zgo",
  "phTYCmMxOW",
  "isl31Fd0SN",
  "CZItvlfdqW",
];

var vastus = 0;
var vastussõnad = [];

otsi = prompt("sisesta otsingu parameeter (täht või number)"); //prompt("sisesta täht või number");
täht = otsi; // näide täht = "t"

//  data.lenght = kõik sõnad mis seal = 50 sõna
// kuna i = 0 siis 0 < 10 siis i++ (0+1)
// ja siis i = 1 siis 1 < 10 siis i++ JNE.
// ja kuna data [i = 0], data[FWmcfgAWxe]["F""W"] === <- see equal value and equal type täht näiteks(promnt "F") see on true ja funkt läheb edasi

// if (data[FWmcfgAWxe]["F""W"] === "f" <- ei lähe edasi kuna esimene täht suur F siis läheb vaatab edasi nimekirjas kuni tuleb algustähega "f"
//funkt läheb edasi ja vastus ++ ehk vastus + 1 ehk 1 sõna on olemas millel on algustäht f

for (var i = 0; i < data.length; i++) {
    if (data[i][0] === täht) {
      // if data [ i = 0 siis 0 datas on "FWmcfgAWxe"  ] ja järgmine [ 0 <- esimene täht "F"]
        vastus++;
        vastussõnad.push(data[i])
    }
}

return("selle tähega on leitud " + vastus + " vastavat koodi, need koodid on : " + vastussõnad);

