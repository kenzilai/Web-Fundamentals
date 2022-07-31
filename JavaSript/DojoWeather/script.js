// function city(button) {
//     console.log("Change city button is pressed:", button);
//     var location = button.innerText;
//     alert("Loading weather report: " + location)
// }

// function dismissCookie() {
//     var cookieElement = document.querySelector('.cookie');
//     cookieElement.remove();
// }

function changeTemperature(selectElement) {
    var fOc = selectElement.value;
    for(let i=1; i<=8; i++) {
        var tempElement = document.querySelector('#temp'+i);
        var temperature = parseInt(tempElement.innerText);

        if(fOc == "°C"){
            //F -> C
            tempElement.innerText = Math.round((temperature - 32) * 5 / 9);
        } else{
            //C -> F
            tempElement.innerText = Math.round((temperature * 9 / 5) + 32);
        }
    }
}
