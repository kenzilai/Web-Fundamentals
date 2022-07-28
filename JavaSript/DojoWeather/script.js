function city(button) {
    console.log("Change city button is pressed:", button);
    var location = button.innerText;
    alert("Loading weather report: " + location)
}

function dismissCookie() {
    var cookieElement = document.querySelector('.cookie');
    cookieElement.remove();
}

function changeTemperature(selectElement) {
    var fOc = selectElement.value;
    console.log(fOc);

    for(let i=1; i<=8; i++){
        var tempElement = document.querySelector('#temp'+i);
        var temperature = tempElement.innerText;
        temperature = parseInt(temperature); //Transforms text to int
        console.log(temperature);

        var newTemp = 0;
        if(fOc === "C"){
            //F -> C
            newTemp = Math.round((temperature - 32) * 5 / 9);
        } else{
            //C -> F
            newTemp = Math.round((temperature * 9 / 5) + 32);
        }

        tempElement.innerText = newTemp;        
    }
}
