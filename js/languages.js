const translations = {
    en : {
        navHome : "Home",
        navRooms : "Rooms",
        navHotels : "Hotels",
        navBookedRooms : "Booked Rooms",
        starHotel : "Five Star Hotels",
        keepTheRaiting : "And we like to keep it that way!",
        seeHotels : "SEE HOTELS",
        FavoriteRooms : "Guests Favorite Rooms",
        USP : "USP section",
        beverages : "Beverages included",
        readMore : "Read More >",
        stayPay : "Stay First, Pay After!",
        hour24: "24 Hour Restaurant",
        spa : "Spa Included!",
        hotel: "Hotel",
        room: "Room",
        customer: "Customer",
        status: "Status",
        checkIn: "Check in",
        checkOut: "Check out",
        total: "Total Price",
        actions: "Actions",
    },

    ka : {
        navHome : "მთავარი გვერდი",
        navRooms : "ოთახები",
        navHotels : "სასტუმროები",
        navBookedRooms : "დაჯავშნილი ოთახები",
        starHotel : "ხუთვარსკვლავიანი სასტუმროები",
        keepTheRaiting : "და ჩვენ გვიყვარს ასე შენარჩუნება!",
        seeHotels : "ნახე სასტუმროები",
        FavoriteRooms : "სტუმრების საყვარელი ოთახები",
        USP : "უნიკალური გაყიდვების წინადადება",
        beverages : "სასმელები შედის",
        readMore : "მეტის წაკითხვა >",
        stayPay : "ჯერ დარჩი, გადაიხადე მერე!",
        hour24: "24 საათიანი რესტორანი",
        spa : "სპა შედის!",
        hotel: "სასტუმრო",
        room: "ოთახი",
        customer: "მომხმარებელი",
        status: "სტატუსი",
        checkIn: "შესვლა",
        checkOut: "გასვლა",
        total: "მთლიანი ფასი",
        actions: "მოქმედებები",
    },

    ru : {
        navHome : "Главная",
        navRooms : "Номера",
        navHotels : "Отели",
        navBookedRooms : "Забронированные номера",
        starHotel : "Пятизвездочные отели",
        keepTheRaiting : "И мы любим сохранять это так!",
        seeHotels : "СМОТРЕТЬ ОТЕЛИ",
        FavoriteRooms : "Любимые номера гостей",
        USP : "УТП раздел",
        beverages : "Напитки включены",
        readMore : "Читать далее >",
        stayPay : "Сначала останься, заплати потом!",
        hour24: "Ресторан круглосуточно",
        spa : "Спа включено!",
        hotel: "Отель",
        room: "Номер",
        customer: "Клиент",
        status: "Статус",
        checkIn: "Заезд",
        checkOut: "Выезд",
        total: "Общая стоимость",
        actions: "Действия",
    },

    sp : {
        navHome : "Inicio",
        navRooms : "Habitaciones",
        navHotels : "Hoteles",
        navBookedRooms : "Habitaciones reservadas",
        starHotel : "Hoteles de cinco estrellas",
        keepTheRaiting : "¡Y nos gusta mantenerlo así!",
        seeHotels : "VER HOTELES",
        FavoriteRooms : "Habitaciones favoritas de los huéspedes",
        USP : "Sección de propuesta única de venta",
        beverages : "Bebidas incluidas",
        readMore : "Leer más >",
        stayPay : "¡Quédate primero, paga después!",
        hour24: "Restaurante 24 horas",
        spa : "¡Spa incluido!",
        hotel: "Hotel",
        room: "Habitación",
        customer: "Cliente",
        status: "Estado",
        checkIn: "Entrada",
        checkOut: "Salida",
        total: "Precio total",
        actions: "Acciones",
    }
};


const elements = document.querySelectorAll("[data-language]");
function applyLanguage(lang){
    elements.forEach(el => {
        const key = el.getAttribute("data-language");
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