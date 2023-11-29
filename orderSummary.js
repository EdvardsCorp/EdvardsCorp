var tellimus = {
  id: 2113,
  orderNumber: "E210126001",
  createdAt: "2021-01-26 16:04:24",
  clientName: "Kalle Tali",
  deliveryType: "Omniva smartpost",
  deliveryValue: 178,
  rows: [
    {
      article_id: 31,
      name: "Kohvimasin De'Longhi Dolce Gusto Piccolo EDG100.W",
      product_code: "257549",
      price: 49.1666666667,
      amount: 1,
      vat: 0.2,
    },
    {
      article_id: 23420,
      name: "Kohvikapslid Nescafe Dolce Gusto Espresso Intenso, 128 g, 16 tk",
      product_code: "355836",
      price: 5.0666666667,
      amount: 2,
      vat: 0.2,
    },
    {
      article_id: 23421,
      name: "Kohvikapslid Nescafe Dolce Gusto Latte Macchiato, 194 g, 16 tk",
      product_code: "000000000501267301",
      price: 5.825,
      amount: 1,
      vat: 0.2,
    },
  ],
};



// Arvutame toote kogu hinna koos KM ja kogusega
// funktsiooni saab kirjutada väljaspoole forEach mapingut kuna andmed tulevad ikka forEach mappingut
function calculateItemTotal(item) {
  return ((item.price * Käibemaks) + item.price) * item.amount;
}

// vormistame tellimuse kokkuvõtte
// forEach lubab võtta kõik rows sees olevate objektide andmed ja mapib need item-ga, ehk esimese objekti name ei ole rows[0].name vaid lisab iga kolme objekti price ühte ehk item.["name", "name", "name"]
tellimus.rows.forEach(function (item) {
    Käibemaks = item.vat; 
    const itemTotal = calculateItemTotal(item);
  console.log("Nimi: " + item.name);
  console.log("Kogus: " + item.amount);
  console.log("Ostuhind: " + item.price.toFixed(2));
  console.log("Müügihind: " + itemTotal.toFixed(2));
  console.log("");
});// siin sulgudes on kõik andmed mapitud ja väljaspoole seda on kõik tavaline ehk kui kirjutada väljaspoole seda sulgu siis enam ei ole (item) ja seda kasutada ei saa

// Arvuta tellimuse kogusumma
// .reduce annab võimaluse töödata suurtemate andmebaasiga
// saab ka nii var total = 0;
//for (var i = 0; i < rows.length; i++) { total += rows[i].price; }
// console.log(total);
//see käib iga rows mis on võtab sealt igalt price ja liidab kokku

// Mida teeb reduce teeb lihtsalt kompaktseks
const orderTotal = tellimus.rows.reduce(function (total, item) {
  return total + calculateItemTotal(item);
}, 0);

console.log("Tellimuse kogusumma: " + orderTotal.toFixed(2));