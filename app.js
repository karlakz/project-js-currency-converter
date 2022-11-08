//  Process user input
const prompt = require("prompt-sync")();

const apikey = prompt("Your API key: ");
const convertFrom = prompt("Convert from: ");
const convertTo = prompt("Convert to: ");
const amount = prompt("Amount: ");
const date = prompt("Date YYYY-MM-DD: ");

//  Set API headers and send the request
const myHeaders = new Headers();
// Fake API key
// myHeaders.append("apikey", "UqoSJSyI8Ut4Ll04nN0L7mmG4OuLjCTG");
myHeaders.append("apikey", `${apikey}`);

const requestOptions = {
  method: "GET",
  redirect: "follow",
  headers: myHeaders,
};

fetch(
  `https://api.apilayer.com/exchangerates_data/convert?to=${convertTo}&from=${convertFrom}&amount=${amount}&date=${date}`,
  requestOptions
)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));
