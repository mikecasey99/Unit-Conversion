const length = document.getElementById("length-convert");
const volume = document.getElementById("volume-convert");
const mass = document.getElementById("mass-convert");

const userInput = document.getElementById("user-input");
const button = document.getElementById("convert");

let number, feet, meters, gallons, liters, pounds, kilos;

//SAVED FROM BEFORE
if(localStorage.getItem(userInput.value) != undefined && userInput.value != ""){
    localStorage.clear();
    calculate(Number(userInput.value));
}

button.addEventListener("click", function(){
    number = userInput.value;
    calculate(number);
    if(userInput.value === ""){
        length.textContent = "";
        volume.textContent = "";
        mass.textContent = "";
    }
})

userInput.addEventListener("keypress", (event)=>{
    if(event.key === "Enter"){
        number = userInput.value;
        calculate(number);
        if(userInput.value === ""){
            length.textContent = "";
            volume.textContent = "";
            mass.textContent = "";
        }
    }
})

function calculate(number){
    localStorage.setItem(userInput.value, JSON.stringify(number))
    //BOX 1
    feet = (number * 3.28084).toFixed(3);
    meters = (number / 3.28084).toFixed(3);
    length.textContent = `${number} meters = ${feet} feet | ${number} feet = ${meters} meters`;
    //BOX 2
    gallons = (number * 0.264172).toFixed(3);
    liters = (number / 0.264172).toFixed(3);
    volume.textContent = `${number} liters = ${gallons} gallons | ${number} gallons = ${liters} liters`;
    //BOX 3
    kilos = (number / 0.45359237).toFixed(3);
    pounds = (number * 0.45359237).toFixed(3);
    mass.textContent = `${number} liters = ${kilos} pounds | ${number} gallons = ${pounds} kilos`;
}

