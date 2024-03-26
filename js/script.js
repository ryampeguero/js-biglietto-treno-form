//Variabili globali
let price;

//Raccolta dati
const fullname = document.getElementById("fullname"); // string | null
const kilometer = document.getElementById("kilometer");  // number | null
const age = document.getElementById("age"); // number | null

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
        
        if (ageInt < 18) {
            discount = 0.20;
            // document.getElementById("age").innerHTML = "Minorenne:"
        } else if (ageInt >= 65) {
            discount = 0.40;
            // document.getElementById("age").innerHTML = "Over 65:" 
        }

        price = price - (price * discount);
        //Output
        console.log("discount:", discount)
        console.log("price:", price)
        // document.getElementById("biglietto").innerHTML = price.toFixed(2);
    } else {
        alert ("Dati errati!!")
    }
})
