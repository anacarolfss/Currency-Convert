const buttonConvert=document.querySelector("#button-convert")
const currencySelect= document.querySelector("#input-select-to-convert")


function convertValues(){ //logica da mudança do "converter PARA"
    const inputValue= document.querySelector("#input-currency").value
    const valueToConvert=document.querySelector("#currency-value-to-convert")
    const valueConverted=document.querySelector("#currency-value-converted") //dolar-euro

    const dolarToday= 5.58
    const euroToday= 6.2
    const libraEtoday= 7.3
    const clpToday= 168.99

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

    if(currencySelect.value=="libra"){
        valueConverted.innerHTML=new Intl.NumberFormat("en-GB" , {
            style: "currency",
            currency: "GBP"
        }).format (inputValue/libraEtoday)


    }


}


function changeCurrency(){ //muda a foto do projeto
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

    if(currencySelect.value=="libra"){
        currencyName.innerHTML= "LIBRA ESTERLINA"
        currencyImgConverted.src= "./assets/libra-logo.png"
    }


    convertValues() 
}


currencySelect.addEventListener("change", changeCurrency)
buttonConvert.addEventListener ("click", convertValues)