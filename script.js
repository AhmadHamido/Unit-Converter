const inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn");
const convertLength = document.getElementById("par-el1");
const convertVolume = document.getElementById("par-el2");
const convertMass = document.getElementById("par-el3");
const meterToFoot = 3.281;
const literToGallon = 0.264;
const kilogramToPounds = 2.204;
const footToMeter = 0.304;
const gallonToLiter = 3.785;
const poundToKilogram = 0.453;

convertBtn.addEventListener("click", function () {
  const totalFeet = inputEl.value * meterToFoot;
  const totalMeters = inputEl.value * footToMeter;
  const totalGallons = inputEl.value * literToGallon;
  const totalLiters = inputEl.value * gallonToLiter;
  const totalPounds = inputEl.value * kilogramToPounds;
  const totalKilograms = inputEl.value * poundToKilogram;

  if (inputEl.value === "" || inputEl.value < 0) {
    return;
  } else {
    convertLength.textContent = `
    ${inputEl.value} meters = ${totalFeet.toFixed(3)} feet | ${
      inputEl.value
    } feet = ${totalMeters.toFixed(3)} meters
    `;
    convertVolume.textContent = `
    ${inputEl.value} liters = ${totalGallons.toFixed(3)} gallons | ${
      inputEl.value
    } gallons = ${totalLiters.toFixed(3)} liters
    `;
    convertMass.textContent = `
    ${inputEl.value} kilograms = ${totalPounds.toFixed(3)} pounds | ${
      inputEl.value
    } pounds = ${totalKilograms.toFixed(3)} kilograms
    `;
  }
});
