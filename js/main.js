let elForm = document.querySelector('.form');
let elInput = document.querySelector('.input');
let elManHour = document.querySelector('.man__hour');
let elBikeHour = document.querySelector('.bike__hour');
let elCarHour = document.querySelector('.car__hour');
let elPlaneHour = document.querySelector('.plane__hour');


elForm.addEventListener('submit', function (evt){
    evt.preventDefault()
    
    let inputValue = elInput.value;
    let manSpeed = 3.6;
    let bikeSpeed = 20.1;
    let carSpeed = 70;
    let planeSpeed = 800;

    function passenger(passengerSpeed) {
        return inputValue / passengerSpeed;
    }
    elManHour.textContent = Math.floor(passenger(3.6)) + "soat"+ " " +Math.ceil((passenger(3.6) - Math.floor(passenger(3.6)))*60) + "daqiqa";

    function bike(bikeSpeed) {
        return inputValue / bikeSpeed;
    }
    elBikeHour.textContent = Math.floor(bike(20.1)) + "soat"+ " " +Math.ceil((passenger(20.1) - Math.floor(passenger(20.1)))*60) + "daqiqa";

    function car(carSpeed) {
        return inputValue / carSpeed;
    }
    elCarHour.textContent = Math.floor(passenger(70)) + "soat"+ " " +Math.ceil((passenger(70) - Math.floor(passenger(70)))*60) + "daqiqa";

    function plane(planeSpeed) {
        return inputValue / planeSpeed;
    }
    elPlaneHour.textContent = Math.floor(passenger(800)) + "soat"+ " " +Math.ceil((passenger(800) - Math.floor(passenger(800)))*60) + "daqiqa";
})

