const burgerMenu = document.querySelector(".burgerMenu")
const burgerNav = document.querySelector(".burgerNav")
burgerMenu.addEventListener("click", ()=> {
    burgerNav.classList.toggle("toggle");
});

const themeBtn = document.querySelector("#themeChangeBtn");
const savedTheme = localStorage.getItem("theme") || "light";
document.documentElement.setAttribute("data-theme", savedTheme);
if(savedTheme === "light") {
    themeBtn.innerHTML = '<svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64.00 64.00" enable-background="new 0 0 64 64" xml:space="preserve" fill="#ffc400" stroke="#ffc400" stroke-width="0.00064"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <circle fill-rule="evenodd" clip-rule="evenodd" fill="#ffc400" cx="32.003" cy="32.005" r="16.001"></circle> <path fill-rule="evenodd" clip-rule="evenodd" fill="#ffc400" d="M12.001,31.997c0-2.211-1.789-4-4-4H4c-2.211,0-4,1.789-4,4 s1.789,4,4,4h4C10.212,35.997,12.001,34.208,12.001,31.997z"></path> <path fill-rule="evenodd" clip-rule="evenodd" fill="#ffc400" d="M12.204,46.139l-2.832,2.833c-1.563,1.562-1.563,4.094,0,5.656 c1.562,1.562,4.094,1.562,5.657,0l2.833-2.832c1.562-1.562,1.562-4.095,0-5.657C16.298,44.576,13.767,44.576,12.204,46.139z"></path> <path fill-rule="evenodd" clip-rule="evenodd" fill="#ffc400" d="M32.003,51.999c-2.211,0-4,1.789-4,4V60c0,2.211,1.789,4,4,4 s4-1.789,4-4l-0.004-4.001C36.003,53.788,34.21,51.999,32.003,51.999z"></path> <path fill-rule="evenodd" clip-rule="evenodd" fill="#ffc400" d="M51.798,46.143c-1.559-1.566-4.091-1.566-5.653-0.004 s-1.562,4.095,0,5.657l2.829,2.828c1.562,1.57,4.094,1.562,5.656,0s1.566-4.09,0-5.656L51.798,46.143z"></path> <path fill-rule="evenodd" clip-rule="evenodd" fill="#ffc400" d="M60.006,27.997l-4.009,0.008 c-2.203-0.008-3.992,1.781-3.992,3.992c-0.008,2.211,1.789,4,3.992,4h4.001c2.219,0.008,4-1.789,4-4 C64.002,29.79,62.217,27.997,60.006,27.997z"></path> <path fill-rule="evenodd" clip-rule="evenodd" fill="#ffc400" d="M51.798,17.859l2.828-2.829c1.574-1.566,1.562-4.094,0-5.657 c-1.559-1.567-4.09-1.567-5.652-0.004l-2.829,2.836c-1.562,1.555-1.562,4.086,0,5.649C47.699,19.426,50.239,19.418,51.798,17.859z"></path> <path fill-rule="evenodd" clip-rule="evenodd" fill="#ffc400" d="M32.003,11.995c2.207,0.016,4-1.789,4-3.992v-4 c0-2.219-1.789-4-4-4c-2.211-0.008-4,1.781-4,3.993l0.008,4.008C28.003,10.206,29.792,11.995,32.003,11.995z"></path> <path fill-rule="evenodd" clip-rule="evenodd" fill="#ffc400" d="M12.212,17.855c1.555,1.562,4.079,1.562,5.646-0.004 c1.574-1.551,1.566-4.09,0.008-5.649l-2.829-2.828c-1.57-1.571-4.094-1.559-5.657,0c-1.575,1.559-1.575,4.09-0.012,5.653 L12.212,17.855z"></path> </g> </g></svg>'
} else {
    themeBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M18 2.75C17.5858 2.75 17.25 2.41421 17.25 2C17.25 1.58579 17.5858 1.25 18 1.25H22C22.3034 1.25 22.5768 1.43273 22.6929 1.71299C22.809 1.99324 22.7449 2.31583 22.5304 2.53033L19.8107 5.25H22C22.4142 5.25 22.75 5.58579 22.75 6C22.75 6.41421 22.4142 6.75 22 6.75H18C17.6967 6.75 17.4232 6.56727 17.3071 6.28701C17.191 6.00676 17.2552 5.68417 17.4697 5.46967L20.1894 2.75H18ZM13.5 8.75C13.0858 8.75 12.75 8.41421 12.75 8C12.75 7.58579 13.0858 7.25 13.5 7.25H16.5C16.8034 7.25 17.0768 7.43273 17.1929 7.71299C17.309 7.99324 17.2449 8.31583 17.0304 8.53033L15.3107 10.25H16.5C16.9142 10.25 17.25 10.5858 17.25 11C17.25 11.4142 16.9142 11.75 16.5 11.75H13.5C13.1967 11.75 12.9232 11.5673 12.8071 11.287C12.691 11.0068 12.7552 10.6842 12.9697 10.4697L14.6894 8.75H13.5Z" fill="#aab5da"></path> <path d="M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#aab5da"></path> </g></svg>'
}

themeBtn.addEventListener('click', ()=>{
    const currentTheme = document.documentElement.getAttribute("data-theme");
    let newTheme;
    if(currentTheme === "dark") {
        newTheme = "light";
        themeBtn.innerHTML = '<svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64.00 64.00" enable-background="new 0 0 64 64" xml:space="preserve" fill="#ffc400" stroke="#ffc400" stroke-width="0.00064"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <circle fill-rule="evenodd" clip-rule="evenodd" fill="#ffc400" cx="32.003" cy="32.005" r="16.001"></circle> <path fill-rule="evenodd" clip-rule="evenodd" fill="#ffc400" d="M12.001,31.997c0-2.211-1.789-4-4-4H4c-2.211,0-4,1.789-4,4 s1.789,4,4,4h4C10.212,35.997,12.001,34.208,12.001,31.997z"></path> <path fill-rule="evenodd" clip-rule="evenodd" fill="#ffc400" d="M12.204,46.139l-2.832,2.833c-1.563,1.562-1.563,4.094,0,5.656 c1.562,1.562,4.094,1.562,5.657,0l2.833-2.832c1.562-1.562,1.562-4.095,0-5.657C16.298,44.576,13.767,44.576,12.204,46.139z"></path> <path fill-rule="evenodd" clip-rule="evenodd" fill="#ffc400" d="M32.003,51.999c-2.211,0-4,1.789-4,4V60c0,2.211,1.789,4,4,4 s4-1.789,4-4l-0.004-4.001C36.003,53.788,34.21,51.999,32.003,51.999z"></path> <path fill-rule="evenodd" clip-rule="evenodd" fill="#ffc400" d="M51.798,46.143c-1.559-1.566-4.091-1.566-5.653-0.004 s-1.562,4.095,0,5.657l2.829,2.828c1.562,1.57,4.094,1.562,5.656,0s1.566-4.09,0-5.656L51.798,46.143z"></path> <path fill-rule="evenodd" clip-rule="evenodd" fill="#ffc400" d="M60.006,27.997l-4.009,0.008 c-2.203-0.008-3.992,1.781-3.992,3.992c-0.008,2.211,1.789,4,3.992,4h4.001c2.219,0.008,4-1.789,4-4 C64.002,29.79,62.217,27.997,60.006,27.997z"></path> <path fill-rule="evenodd" clip-rule="evenodd" fill="#ffc400" d="M51.798,17.859l2.828-2.829c1.574-1.566,1.562-4.094,0-5.657 c-1.559-1.567-4.09-1.567-5.652-0.004l-2.829,2.836c-1.562,1.555-1.562,4.086,0,5.649C47.699,19.426,50.239,19.418,51.798,17.859z"></path> <path fill-rule="evenodd" clip-rule="evenodd" fill="#ffc400" d="M32.003,11.995c2.207,0.016,4-1.789,4-3.992v-4 c0-2.219-1.789-4-4-4c-2.211-0.008-4,1.781-4,3.993l0.008,4.008C28.003,10.206,29.792,11.995,32.003,11.995z"></path> <path fill-rule="evenodd" clip-rule="evenodd" fill="#ffc400" d="M12.212,17.855c1.555,1.562,4.079,1.562,5.646-0.004 c1.574-1.551,1.566-4.09,0.008-5.649l-2.829-2.828c-1.57-1.571-4.094-1.559-5.657,0c-1.575,1.559-1.575,4.09-0.012,5.653 L12.212,17.855z"></path> </g> </g></svg>'
    } else {
        newTheme = "dark";
        themeBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M18 2.75C17.5858 2.75 17.25 2.41421 17.25 2C17.25 1.58579 17.5858 1.25 18 1.25H22C22.3034 1.25 22.5768 1.43273 22.6929 1.71299C22.809 1.99324 22.7449 2.31583 22.5304 2.53033L19.8107 5.25H22C22.4142 5.25 22.75 5.58579 22.75 6C22.75 6.41421 22.4142 6.75 22 6.75H18C17.6967 6.75 17.4232 6.56727 17.3071 6.28701C17.191 6.00676 17.2552 5.68417 17.4697 5.46967L20.1894 2.75H18ZM13.5 8.75C13.0858 8.75 12.75 8.41421 12.75 8C12.75 7.58579 13.0858 7.25 13.5 7.25H16.5C16.8034 7.25 17.0768 7.43273 17.1929 7.71299C17.309 7.99324 17.2449 8.31583 17.0304 8.53033L15.3107 10.25H16.5C16.9142 10.25 17.25 10.5858 17.25 11C17.25 11.4142 16.9142 11.75 16.5 11.75H13.5C13.1967 11.75 12.9232 11.5673 12.8071 11.287C12.691 11.0068 12.7552 10.6842 12.9697 10.4697L14.6894 8.75H13.5Z" fill="#aab5da"></path> <path d="M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#aab5da"></path> </g></svg>'
    }
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
});


const cities = document.querySelector(".cities");
if(cities) {
    const citiesAPI = 'https://hotelbooking.stepprojects.ge/api/Hotels/GetCities';
    fetch(citiesAPI).then(response => response.json()).then(array => {
        array.forEach(city => {
            cities.innerHTML += `<div class="city">${city}</div>`
        });
    });
}
const types = document.querySelector(".types");
if(types) {
    const roomtypeAPI = 'https://hotelbooking.stepprojects.ge/api/Rooms/GetRoomTypes';
    fetch(roomtypeAPI).then(response => response.json()).then(array => {
        array.forEach(type => {
            types.innerHTML += `<div class="roomType" onclick="filterByRoomType(${type.id})">${type.name}</div>`
        });
    });
}

const hotels = document.querySelector("#hotelsID");
if(hotels) {
    const hotelsAPI = 'https://hotelbooking.stepprojects.ge/api/Hotels/GetHotels?city=tbilisi';
    fetch(hotelsAPI).then(response => response.json()).then(info => {
        hotels.innerHTML = ``;
        info.forEach(obj => {
                hotels.innerHTML += `<div class="card">
                                        <img src="${obj.featuredImage}" alt="">
                                        <div class="info">
                                            <p>${obj.name}</p>
                                        </div>
                                        <a href="rooms.html"><button>VIEW ROOMS</button></a>
                                    </div>`
        })
    }).catch(e => {
        hotels.innerHTML = `<span>Failed to load hotels. Please try again later.</span>`;
    });
}

const favoriteRooms = document.querySelector("#favoriteRooms");
if(favoriteRooms){
const API_URL = 'https://hotelbooking.stepprojects.ge/api/Rooms/GetAll';
async function getFavRooms(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        const rooms = data.slice(0, 6);
        favoriteRooms.innerHTML = "";
        rooms.forEach(room => {
            favoriteRooms.innerHTML += `<div class="card">
                                    <img src="${room.images[0].source}" alt="${room.name}">
                                    <div class="info">
                                        <p>${room.name}</p>
                                        <div class="price">
                                            <h5>€ ${room.pricePerNight}</h5>
                                            <h6>a night</h6>
                                        </div>
                                    </div>
                                    <button>BOOK NOW</button>
                                </div>`
        }); 
    } catch (e) {
        console.log(e)
        favoriteRooms.innerHTML = `<span>Failed to load favorite rooms. Please try again later.</span>`;
    }
}
getFavRooms(API_URL);
}

function deleteBooking(id){
    console.log(id)
    fetch(`https://hotelbooking.stepprojects.ge/api/Booking/${id}`, {
    method: 'DELETE',
    header: 'application/json'}) .then(response => {
    if(response.ok) {
        console.log('deleted'); 
    } else {
        console.error('delete failed');
    }
    })
    .catch(e => console.error('error:', e));
}

const bookedRooms = document.querySelector(".bookedRooms");     
if(bookedRooms) {
    async function getBookedRooms(url) {
        try {
            const response = await fetch(url);
            const bookings = await response.json();
            
            bookedRooms.innerHTML = '';
            
            for (const booking of bookings) {
                try {
                    const roomResponse = await fetch(`https://hotelbooking.stepprojects.ge/api/Rooms/GetRoom/${booking.roomID}`);
                    const room = await roomResponse.json(); 
                    
                    const hotelResponse = await fetch(`https://hotelbooking.stepprojects.ge/api/Hotels/GetHotel/${room.hotelId}`);
                    const hotel = await hotelResponse.json(); 
                    
                    bookedRooms.innerHTML += `
                    <tr>
                        <td class="Hotel">
                            <div class="hotel-content">
                                <img src="${hotel.featuredImage}" alt="${hotel.name}">
                                <div>
                                    <h5>${hotel.name}</h5>
                                    <p>${hotel.city}</p>
                                </div>
                            </div>
                        </td>
                        <td class="Room">
                            <div class="room-content">
                                <img src="${room.images?.[0]?.source}" alt="${room.name}">
                                <div>
                                    <h5>${room.name}</h5>
                                    <h5>${room.pricePerNight}€</h5>
                                </div>
                            </div>
                        </td>
                        <td class="Customer">
                            <div>
                                <h5>Name: ${booking.customerName }</h5>
                                <p>Phone: ${booking.customerPhone }</p>
                            </div>
                        </td>
                        <td class="Status">
                            <span class="status-badge">
                                ${booking.isConfirmed ? "Booked" : "Not Booked"}
                            </span>
                        </td>
                        <td class="Checkin">
                            <h5>${new Date(booking.checkInDate).toLocaleDateString()}</h5>
                        </td>
                        <td class="Checkout">
                            <h5>${new Date(booking.checkOutDate).toLocaleDateString()}</h5>
                        </td>
                        <td class="TotalPrice">
                            <h5>${booking.totalPrice}€</h5>
                        </td>
                        <td class="Actions">
                            <button onClick="deleteBooking(${booking.id})">CANCEL BOOKING</button>
                        </td>
                    </tr>`;
                    
                } catch (error) {
                    console.error(`Error processing booking #${booking.id}:`, error);
                    bookedRooms.innerHTML += `<tr><td colspan="8">Failed to load booking #${booking.id}</td></tr>`;
                }
            }
            
        } catch (error) {
            console.error('Failed to load bookings:', error);
            bookedRooms.innerHTML = '<tr><td colspan="8">Failed to load bookings. Please try again later.</td></tr>';
        }
    }
    
    getBookedRooms("https://hotelbooking.stepprojects.ge/api/Booking");
}

const roomsContainer = document.querySelector(".roomsContainer");
const roomsPage = document.querySelector("#roomsPage");
if(roomsPage){
    getRoomAll();

    window.onload = function () {
        slideOne();
        slideTwo();
    };

    let sliderOne = document.getElementById("slider-1");
    let sliderTwo = document.getElementById("slider-2");
    let valOne = document.getElementById("valOne");
    let valTwo = document.getElementById("valTwo");
    let minGap = 0;
    let sliderTrack = document.querySelector(".slider-track");
    let sliderMaxValue = document.getElementById("slider-1").max;

    function slideOne() {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
        sliderOne.value = parseInt(sliderTwo.value) - minGap;
    }
    valOne.value = sliderOne.value;
    fillColor();
    }
    function slideTwo() {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
        sliderTwo.value = parseInt(sliderOne.value) + minGap;
    }
    valTwo.value  = sliderTwo.value;
    fillColor();
    }
    function fillColor() {
    percent1 = (sliderOne.value / sliderMaxValue) * 100;
    percent2 = (sliderTwo.value / sliderMaxValue) * 100;
    sliderTrack.style.background = `linear-gradient(to right, var(--borders) ${percent1}% , var(--accent) ${percent1}% , var(--accent) ${percent2}%, var(--borders) ${percent2}%)`;
    }
    const roomType = document.querySelector("#roomType");
    const Checkin = document.querySelector("#Checkin");
    const Checkout = document.querySelector("#Checkout");
    const guests = document.querySelector("#guest");
    const apply = document.querySelector("#APPLY");
    const reset = document.querySelector("#RESET");
    
    let dateIn = 0;
    let dateOut = 0;
    Checkin.addEventListener("change", ()=>{dateIn++});
    Checkout.addEventListener("change", ()=>{dateOut++});

    apply.addEventListener("click", ()=>{
        if(dateIn === 0 || dateOut === 0) return;

        roomsContainer.innerHTML = '';
        
        let filtered = {
            "roomTypeId": Number(roomType.value),
            "priceFrom": Number(valOne.value),
            "priceTo": Number(valTwo.value),
            "maximumGuests": Number(guests.value),
            "checkIn": Checkin.value + "T00:00:00",
            "checkOut": Checkout.value + "T00:00:00"
        };
        
        if(roomType.value === "0") {
            Promise.all([
                filterRoom({...filtered, roomTypeId: 1}, false),
                filterRoom({...filtered, roomTypeId: 2}, false),
                filterRoom({...filtered, roomTypeId: 3}, false)
            ]).then(allRooms => {
                const combinedRooms = allRooms.flat();
                roomsContainer.innerHTML = '';
                combinedRooms.forEach(room => {
                    roomsContainer.innerHTML += `<div class="card">
                                                    <img src="${room.images[0].source}" alt="${room.name}">
                                                    <div class="info">
                                                        <p>${room.name}</p>
                                                        <div class="price">
                                                            <h5>€ ${room.pricePerNight}</h5>
                                                            <h6>a night</h6>
                                                        </div>
                                                    </div>
                                                    <button>BOOK NOW</button>
                                                </div>`;
                });
            });
        } else {
            filterRoom(filtered, true);
        }
    });
    reset.addEventListener("click", ()=>{
        sliderOne.value = 0
        sliderTwo.value = 1000
        fillColor();
        valOne.value = "0"
        valTwo.value = "1000"
        roomType.value = "0"
        Checkin.value = ""
        Checkout.value = ""
        guests.value = "0"
        dateIn = 0;
        dateOut = 0;
    });
    function filterByRoomType(roomTypeId) {
        const date = new Date();
        const formattedDate = date.toISOString().split('T')[0] + 'T00:00:00';
        
        let filterObj = {
            "roomTypeId": roomTypeId,
            "priceFrom": 0,
            "priceTo": 1000,
            "maximumGuests": 0,
            "checkIn": formattedDate,
            "checkOut": formattedDate
        };

        filterRoom(filterObj, true);
    }
}

async function getRoomAll() {
    try {
        const response = await fetch("https://hotelbooking.stepprojects.ge/api/Rooms/GetAll");
        const rooms = await response.json();
        
        roomsContainer.innerHTML = '';
        rooms.forEach(room => {
            roomsContainer.innerHTML += `<div class="card">
                                    <img src="${room.images[0].source}" alt="${room.name}">
                                    <div class="info">
                                        <p>${room.name}</p>
                                        <div class="price">
                                            <h5>€ ${room.pricePerNight}</h5>
                                            <h6>a night</h6>
                                        </div>
                                    </div>
                                    <button>BOOK NOW</button>
                                </div>`
        }); 
    } catch (e) {
        console.log(e)
        roomsContainer.innerHTML = `<span>Failed to load favorite rooms. Please try again later.</span>`;
    }
}
async function filterRoom(obj, doReset) {
    try {
        const response = await fetch("https://hotelbooking.stepprojects.ge/api/Rooms/GetFiltered", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj),
        });
        const data = await response.json();
        let rooms = data;
        if (doReset) {
            roomsContainer.innerHTML = '';
        }
        rooms.forEach(room => {
            roomsContainer.innerHTML += `<div class="card">
                                            <img src="${room.images[0].source}" alt="${room.name}">
                                            <div class="info">
                                                <p>${room.name}</p>
                                                <div class="price">
                                                    <h5>€ ${room.pricePerNight}</h5>
                                                    <h6>a night</h6>
                                                </div>
                                            </div>
                                            <button>BOOK NOW</button>
                                        </div>`;
        });
        
        return rooms;
        
    } catch (e) {
        console.log('Filter error:', e);
        roomsContainer.innerHTML = `<span>Failed to load rooms. Please try again later.</span>`;

        return [];
    }
}

