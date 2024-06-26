//Variabili globali
let price;

//Raccolta dati
const fullname = document.getElementById("fullname"); // string | null
const kilometer = document.getElementById("kilometer");  // number | null
const age = document.getElementById("age"); // number | null

//Variabili secondarie
const passenger = document.getElementById("name");
const offert = document.getElementById("offert");
const cabin = document.getElementById("cabin");
const code = document.getElementById("code");
const ticketPrice = document.getElementById("price");

const btnForm = document.getElementById("invia");

btnForm.addEventListener("click", function(){
    console.log(parseInt(age.value));
    console.log(parseInt(kilometer.value));
    
    const kilometerInt = parseInt(kilometer.value);
    const ageInt = parseInt(age.value);
    if (!isNaN(kilometerInt) && !isNaN(ageInt) && ageInt > 0 && kilometerInt > 0 && ageInt < 110) {
    
        //Esecuzione logica
        price = kilometerInt * 0.21; // number
        console.log(price);
        let discount = 0;
        let offertInfo = "Biglietto Standard";
        if (ageInt < 18) {
            discount = 0.20;
            offertInfo= "Biglietto Ridotto minorenne";
        } else if (ageInt >= 65) {
            discount = 0.40;
            offertInfo= "Biglietto Ridotto over 65";
        }

        
        price = price - (price * discount);
        const rndCabin = Math.floor(Math.random() * 10) + 1;
        const rndCode = Math.floor(Math.random() * (99999 - 11111)) + 11111;
        //Output
        console.log("discount:", discount)
        console.log("price:", price)

        offert.innerHTML = offertInfo;
        passenger.innerHTML = fullname.value;
        cabin.innerHTML = rndCabin;
        code.innerHTML = rndCode;
        ticketPrice.innerHTML = price.toFixed(2) + "&euro;";
    } else {
        alert ("Dati errati!!")
    }
})

const cancelBtn = document.getElementById("cancel");

if (cancelBtn !== null ) {
    cancelBtn.addEventListener("click", function(){
        // Ripulire valori
        fullname.value = "";
        kilometer.value = "";
        age.value = "";
        
        // Ripulire biglietto
        offert.innerHTML = "";
        passenger.innerHTML = "";
        cabin.innerHTML = "";
        code.innerHTML = "";
        ticketPrice.innerHTML = "";
    })
}