// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
var kilometri = parseInt(prompt("Quanti kilometri vuoi percorrere?"));
// console.log(kilometri);

var passengerAge = parseInt(prompt("Quanti anni hai?"));
// console.log(passengerAge);
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km);
var basePrice = 0.21;
// console.log(basePrice);
var ticketPrice = kilometri * basePrice;
// console.log(ticketPrice);
// va applicato uno sconto del 20% per i minorenni;
var minorAge = 18;
var overAge = 65;
var minorsDiscount = (ticketPrice * 20) / 100;
// console.log(minorsDiscount);
// va applicato uno sconto del 40% per gli over 65.
var overDiscount = (ticketPrice * 40) /100;
// console.log(overDiscount);
// var currency = €;

if (passengerAge < minorAge) {
  document.getElementById('showPrice').innerHTML = ticketPrice - minorsDiscount;
} else if (passengerAge > overAge) {
  document.getElementById('showPrice').innerHTML = ticketPrice - overDiscount  ;
}
else {
  document.getElementById('showPrice').innerHTML = ticketPrice;
}
