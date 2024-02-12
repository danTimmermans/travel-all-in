// menutoggle
let menu = document.querySelector(".mobile-screen-nav");
let burger = document.getElementById('mobile-screen-nav__menu-toggle');

burger.addEventListener("click", function() {
    menu.classList.add ("mobile-screen-nav--open");
})
menu.addEventListener("click", function() {
    menu.classList.remove ("mobile-screen-nav--open");
})

// app météo
let villes = ['São Paulo', 'puerto rico','kingston', 'marrakech', 'los angeles', 'tunis', 'ankara', 'mexico', 'guadeloupe', 'Hanoï', 'uruguay', 'new zealand', 'Le cap', 'costa rica'];
let ville = document.querySelector('#ville');
let villeChoisie = 'costa rica';
let imgContainer = document.querySelector('#icone');
recevoirTemperature(villeChoisie);
let dernier = 0;
let nombreAleatoire = 0;

function nombreEntier(max){
    return Math.floor(Math.random()*Math.floor(max));
}

function nouvelleVille(){
    do{
        nombreAleatoire = nombreEntier(villes.length);
    }while (nombreAleatoire == dernier)


   
    ville.textContent = villes[nombreAleatoire];
    villeChoisie = ville.textContent;
    recevoirTemperature(villeChoisie);

    dernier = nombreAleatoire;
    if('myIcon'){
        imageAsupprimer = document.querySelector('#myIcon')
        imgContainer.removeChild(imageAsupprimer)
    }
}


setInterval("nouvelleVille()",5000);

function recevoirTemperature(ville){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=4cb0bfb44a003a013d28f5809a55bef9&units=metric`;


        let requete = new XMLHttpRequest();
        requete.open('GET', url);
        requete.responseType = 'json';
        requete.send();
        requete.onload = function(){
            if(requete.readyState === XMLHttpRequest.DONE) {
                if(requete.status === 200){
                    let reponse = requete.response;
                    let ville = reponse.name
                    let temperature = reponse.main.temp;
                    document.querySelector('#ville').textContent = ville;
                    document.querySelector('#temperature_label').textContent = temperature;

                    // let latitude = reponse.coord.lat;
                    // document.querySelector('#coordonnee_latitude_label').textContent = latitude;
                    // let longitude = reponse.coord.lon;
                    // document.querySelector('#coordonnee_longitude_label').textContent = longitude;


                    let icone = reponse.weather[0].icon;
                    imgUrl = `https://openweathermap.org/img/wn/${icone}@2x.png`
                    let img = document.createElement('img');
                    img.setAttribute('src', imgUrl );
                    img.setAttribute('id', 'myIcon')
                    imgContainer.append(img);
                    // console.log(imgContainer);
                }
                else{
                    alert('un problème est survenu, réessayer plus tard');
                }
            }
        }
}

// date picker
const datePicker = document.querySelector('.date-picker-modal');
const reservationBtn = document.querySelector('#dateReservation');
const closePickerModalBtn = document.querySelector('#dateSaver')

let showDatePicker = () =>{
    datePicker.classList.add('date-picker-visible');
}
reservationBtn.addEventListener('click', showDatePicker);

let closeDatePicker = () =>{
    datePicker.classList.remove('date-picker-visible');
}
closePickerModalBtn.addEventListener('click', closeDatePicker);


const dateInput = document.getElementById('dateInput');
dateInput.addEventListener('change', (event) =>{
    const selectedDate = event.target.value;
    document.getElementById('display').innerHTML = `Selected date : ${selectedDate}`;
})

// durée du séjour 
const HolidayDuration = document.querySelector('.holiday-duration-modal');
const HolidayReservationBtn = document.querySelector('#HolidayDurationBtn');
const HolidayDurationSaverBtn = document.querySelector('#HolidayDurationSaverBtn');

let showHolidayDurationOption = () =>{
    HolidayDuration.classList.add('date-picker-visible');
}
HolidayReservationBtn.addEventListener('click', showHolidayDurationOption);

let closeHolidayDurationOption = () =>{
    HolidayDuration.classList.remove('date-picker-visible');
}
HolidayDurationSaverBtn.addEventListener('click', closeHolidayDurationOption);

// nombre de participants
// calculator
let diminuerLeNombreDeChambresBtn = document.querySelector('.decrease-rooms');
let augmenterLeNombreDeChambresBtn = document.querySelector('.increase-rooms');
let nombreDeChambres = document.querySelector('.number-of-rooms');
let nombreDeChambresSelectionné = 0;

    let augmenterLeNombreDeChambres = ()=>{
        nombreDeChambresSelectionné++;
        nombreDeChambres.innerHTML = `${nombreDeChambresSelectionné}`
    }
    augmenterLeNombreDeChambresBtn.addEventListener('click', augmenterLeNombreDeChambres);
    let diminuerLeNombreDeChambres = ()=>{    
        if(nombreDeChambresSelectionné > 0) {
            nombreDeChambresSelectionné--;
            nombreDeChambres.innerHTML = `${nombreDeChambresSelectionné}`
        }  
    }
    diminuerLeNombreDeChambresBtn.addEventListener('click', diminuerLeNombreDeChambres);

// open close modal
let numberOfPeopleModal = document.querySelector('.number-of-people-modal');
let NumberOfPeopleBtn = document.querySelector('#number-of-people-btn');
let NumberOfPeopleSaverBtn = document.querySelector('#NumberOfPeopleSaverBtn')

let showNumberOfPeopleModal = () =>{
    numberOfPeopleModal.classList.add('date-picker-visible');
}
NumberOfPeopleBtn.addEventListener('click',  showNumberOfPeopleModal);

let closeNumberOfPeopleModal = () =>{
    numberOfPeopleModal.classList.remove('date-picker-visible');
}
NumberOfPeopleSaverBtn.addEventListener('click', closeNumberOfPeopleModal);


let destinationModal = document.querySelector('.destinations-modal');
let destinationBtn = document.querySelector('#destination-btn');


let showDestinationModal = () =>{
    destinationModal.classList.add('date-picker-visible');
}
destinationBtn.addEventListener('click', showDestinationModal);

let closeDestinationModal = () =>{
    destinationModal.classList.remove('date-picker-visible');
}
destinationModal.addEventListener('click', closeDestinationModal);