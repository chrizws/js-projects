const metersToFeet = document.querySelector("#metersToFeet");
const feetToMeters = document.querySelector("#feetToMeters");
const litersToGallons = document.querySelector("#litersToGallons");
const gallonsToLiters = document.querySelector("#gallonsToLiters");
const kilogramToPounds = document.querySelector("#kilosToPounds");
const poundsToKilogram = document.querySelector("#poundsToKilos");

const btn = document.getElementById("convert-btn");

btn.addEventListener("click", () => {

    const num = document.getElementById("input-box");
    convert(Number(num.value));
    
});

function convert(num) {
    const mToFt = (num * 3.28084).toFixed(3);
    const ftToM = (num * 0.3048).toFixed(3);

    const lToGallons = (num * 0.264172).toFixed(3);
    const gToLiters = (num * 3.78541).toFixed(3);

    const kgToPounds = (num * 2.20462).toFixed(3);
    const poundsToKg = (num * 0.453592).toFixed(3);


    //calculate length - meter <--> feet
    metersToFeet.textContent = `${num} meters = ${mToFt} feet`;
    feetToMeters.textContent = `${num} feet = ${ftToM} meters`;

    //calculate volume
    litersToGallons.textContent = `${num} liters = ${lToGallons} gallons`;
    gallonsToLiters.textContent = `${num} gallons = ${gToLiters} liters`;

    //calculate mass
    kilogramToPounds.textContent = `${num} kilos = ${kgToPounds} pounds`;
    poundsToKilogram.textContent = `${num} pounds = ${poundsToKg} kilos`;

}