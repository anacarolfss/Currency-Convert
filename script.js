const buttonConvert=document.querySelector("#button-convert")
const currencySelect= document.querySelector("#input-select-to-convert")


function convertValues(){
    const inputValue= document.querySelector("#input-currency").value
    const valueToConvert=document.querySelector("#currency-value-to-convert")
    const valueConverted=document.querySelector("#currency-value-converted") //dolar-euro

    const dolarToday= 5.6
    const euroToday= 6.2

    if(currencySelect.value== "dolar"){
        valueConverted.innerHTML= new Intl.NumberFormat("en-US" , {
            style: "currency",
            currency: "USD"
        }).format (inputValue/dolarToday)
    }

    
    if(currencySelect.value== "euro"){
        valueConverted.innerHTML= new Intl.NumberFormat("de-DE" , {
            style: "currency",
            currency: "EUR"
        }).format (inputValue/euroToday)
    }

    valueToConvert.innerHTML= new Intl.NumberFormat("pt-BR" , {
        style: "currency",
        currency: "BRL"
    }).format (inputValue)

}

function changeCurrency(){
    const currencyName= document.getElementById("currency-name")
    const currencyImgConverted= document.getElementById("img-converted")
    
    if(currencySelect.value=="dolar"){
        currencyName.innerHTML= "DÓLAR AMERICANO"
        currencyImgConverted.src= "./assets/dolar-logo.png"

    }

    if(currencySelect.value=="euro"){
        currencyName.innerHTML= "EURO"
        currencyImgConverted.src= "./assets/euro-logo.png"
    }

    convertValues() 
}


currencySelect.addEventListener("change", changeCurrency)
buttonConvert.addEventListener ("click", convertValues)