const length = document.getElementById("length-convert");
const volume = document.getElementById("volume-convert");
const mass = document.getElementById("mass-convert");

const userInput = document.getElementById("user-input");
const button = document.getElementById("convert");

let number, feet, meters, gallons, liters, pounds, kilos;

//SAVED FROM BEFORE
if(localStorage.getItem(userInput.value) != undefined){
    localStorage.clear();
    calculate(Number(userInput.value));
}

button.addEventListener("click", function(){
    number = userInput.value;
    calculate(number);
})

function calculate(number){
    localStorage.setItem(userInput.value, JSON.stringify(number))
    //BOX 1
    feet = (number * 3.28084).toFixed(3);
    meters = (number / 3.28084).toFixed(3);
    length.textContent = `${number} meters = ${feet} | ${number} feet = ${meters} meters`;
    //BOX 2
    gallons = (number * 0.264172).toFixed(3);
    liters = (number / 0.264172).toFixed(3);
    volume.textContent = `${number} liters = ${gallons} | ${number} gallons = ${liters} liters`;
    //BOX 3
    kilos = (number / 0.45359237).toFixed(3);
    pounds = (number * 0.45359237).toFixed(3);
    mass.textContent = `${number} liters = ${kilos} | ${number} gallons = ${pounds} kilos`;
}

