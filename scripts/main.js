const rngButton = document.getElementById('rng-button');
const rngDisplay = document.getElementById('random-number');

function getRandomNumber() {
    return Math.random();
}

rngButton.addEventListener("click", function() {
    let num = Math.round(getRandomNumber() * 1000000)
    rngDisplay.textContent = numberWithCommas(num);
});

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}