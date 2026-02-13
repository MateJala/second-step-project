const translations = {
    en : {
        navHome : "Home",
        navRooms : "Rooms",
        navHotels : "Hotels",
        navBookedRooms : "Booked Rooms"
    },

    ka : {
        navHome : "მთავარი გვერდი",
        navRooms : "ოთახები",
        navHotels : "სასტუმროები",
        navBookedRooms : "დაჯავშნილი ოთახები"
    },

    ru : {
        navHome : "Главная",
        navRooms : "Номера",
        navHotels : "Отели",
        navBookedRooms : "Забронированные номера"
    },

    sp : {
        navHome : "Inicio",
        navRooms : "Habitaciones",
        navHotels : "Hoteles",
        navBookedRooms : "Habitaciones reservadas"
    }
};


const elements = document.querySelectorAll("[data-language]");
function applyLanguage(lang){
    elements.forEach(el => {
        const key = el.getAttribute("data-language");
        console.log(key, translations[lang][key]);
        el.textContent = translations[lang][key];
    });

    localStorage.setItem("language", lang);
}
const savedLanguage = localStorage.getItem("language") || "en";
applyLanguage(savedLanguage);

const languageSwitcher = document.querySelector("#lang");
languageSwitcher.value = savedLanguage;

languageSwitcher.addEventListener("change", function(){
    applyLanguage(this.value);
});