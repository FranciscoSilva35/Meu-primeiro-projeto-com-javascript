const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
  const inputCurrecyValue = document.querySelector(".input-currency").value
  const currencyValueToConvert = document.querySelector(".currecy-value-to-convert")//Valor em Real
  const currencyValueConverted = document.querySelector(".currecy-value")// outras moedas 

  console.log(currencySelect.value)
  const dolarToday = 5.2

  const euroToday = 6.2


  if (currencySelect.value == "dolar") {

    currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
      style: "currency",
      currency: "USD"
    }).format(inputCurrecyValue / dolarToday)

  }

  if (currencySelect.value == "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"
    }).format(inputCurrecyValue / euroToday)
  }
  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {

    style: "currency",
    currency: "BRL"
  }).format(inputCurrecyValue)


}



function changeCurrency(){
const currencyName = document.getElementById("currency-name")
const currencyImg = document.querySelector(".currency-img")
if (currencySelect.value == "dolar") {
currencyName.innerHTML = "Dólar americano"
currencyImg.src = "./assets/dollar.png"
}


if (currencySelect.value == "euro") {
  currencyName.innerHTML = "Euro"
  currencyImg.src = "./assets/euro.png"
  }


convertValues()
}



currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
