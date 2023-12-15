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


function countCode(täht) {
  var vastus = 0;
  var vastussõnad = [];

  for (var i = 0; i < data.length; i++) {
      if (data[i][0] === täht) {
          vastus++;
          vastussõnad.push(data[i]);
      }
  }

  return {
      vastus: vastus,
      vastussõnad: vastussõnad
  };
}

var result = countCode("a");
console.log(result.vastussõnad);
console.log("Selle tähega on leitud " + result.vastus + " vastavat koodi, need koodid on : " + result.vastussõnad);
