/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn")
const inputField = document.getElementById("input-field")
const lengthEl = document.getElementById("length")
const volumnEl = document.getElementById("volumn")
const massEl = document.getElementById("mass")

const lengthDescription = `<p class="param-description">Length (Meter/Feet)</p>`
const volumnDescription = `<p class="param-description">Volume (Liters/Gallons)</p>`
const massDescription = `p class="param-description">Mass (Kilograms/Pounds)</p>`

let storeData = {
    feet: 0,
    meter: 0,
    gallon: 0,
    liter: 0,
    pound: 0,
    kilogram: 0
}

convertBtn.addEventListener("click", function() {

    if(inputField.value) {
        let inputData = Number(inputField.value)

        storeData.feet = (inputData * 3.281).toFixed(3)
        storeData.meter = (inputData / 3.281).toFixed(3)

        storeData.gallon = (inputData * 0.264).toFixed(3)
        storeData.liter = (inputData / 0.264).toFixed(3)

        storeData.pound = (inputData * 2.204).toFixed(3)
        storeData.kilogram = (inputData / 2.204).toFixed(3)

        render(inputData, storeData)
    }
})

function render (input, data) {
    lengthEl.innerHTML = lengthDescription + `<p class="calculate-result">${input} meters = ${data.feet} feet | ${input} feet = ${data.meter} meters</p>`
    volumnEl.innerHTML = lengthDescription + `<p class="calculate-result">${input} liters = ${data.gallon} gallons | ${input} gallons = ${data.liter} liters</p>`
    massEl.innerHTML = lengthDescription + `<p class="calculate-result">${input} kilos = ${data.pound} pounds | ${input} pounds = ${data.kilogram} kilos</p>`
}
