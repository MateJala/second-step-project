const burgerMenu = document.querySelector(".burgerMenu")
const burgerNav = document.querySelector(".burgerNav")
burgerMenu.addEventListener("click", ()=> {
    burgerNav.classList.toggle("toggle");
});

const themeBtn = document.querySelector("#themeChangeBtn");
const savedTheme = localStorage.getItem("theme");
if(savedTheme){
    document.documentElement.setAttribute("data-theme", savedTheme);
    if(savedTheme === "light") {
        themeBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 2V3" stroke="#ffea00" stroke-width="1.5" stroke-linecap="round"></path> <path d="M12 21V22" stroke="#ffea00" stroke-width="1.5" stroke-linecap="round"></path> <path d="M22 12L21 12" stroke="#ffea00" stroke-width="1.5" stroke-linecap="round"></path> <path d="M3 12L2 12" stroke="#ffea00" stroke-width="1.5" stroke-linecap="round"></path> <path d="M19.0708 4.92969L18.678 5.32252" stroke="#ffea00" stroke-width="1.5" stroke-linecap="round"></path> <path d="M5.32178 18.6777L4.92894 19.0706" stroke="#ffea00" stroke-width="1.5" stroke-linecap="round"></path> <path d="M19.0708 19.0703L18.678 18.6775" stroke="#ffea00" stroke-width="1.5" stroke-linecap="round"></path> <path d="M5.32178 5.32227L4.92894 4.92943" stroke="#ffea00" stroke-width="1.5" stroke-linecap="round"></path> <path d="M6.34141 10C6.12031 10.6256 6 11.2987 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C11.2987 6 10.6256 6.12031 10 6.34141" stroke="#ffea00" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>'
    } else {
        themeBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M18 2.75C17.5858 2.75 17.25 2.41421 17.25 2C17.25 1.58579 17.5858 1.25 18 1.25H22C22.3034 1.25 22.5768 1.43273 22.6929 1.71299C22.809 1.99324 22.7449 2.31583 22.5304 2.53033L19.8107 5.25H22C22.4142 5.25 22.75 5.58579 22.75 6C22.75 6.41421 22.4142 6.75 22 6.75H18C17.6967 6.75 17.4232 6.56727 17.3071 6.28701C17.191 6.00676 17.2552 5.68417 17.4697 5.46967L20.1894 2.75H18ZM13.5 8.75C13.0858 8.75 12.75 8.41421 12.75 8C12.75 7.58579 13.0858 7.25 13.5 7.25H16.5C16.8034 7.25 17.0768 7.43273 17.1929 7.71299C17.309 7.99324 17.2449 8.31583 17.0304 8.53033L15.3107 10.25H16.5C16.9142 10.25 17.25 10.5858 17.25 11C17.25 11.4142 16.9142 11.75 16.5 11.75H13.5C13.1967 11.75 12.9232 11.5673 12.8071 11.287C12.691 11.0068 12.7552 10.6842 12.9697 10.4697L14.6894 8.75H13.5Z" fill="#aab5da"></path> <path d="M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#aab5da"></path> </g></svg>'
    }
}

themeBtn.addEventListener('click', ()=>{
    const currentTheme = document.documentElement.getAttribute("data-theme");
    let newTheme;
    if(currentTheme === "dark") {
        newTheme = "light";
        themeBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 2V3" stroke="#ffea00" stroke-width="1.5" stroke-linecap="round"></path> <path d="M12 21V22" stroke="#ffea00" stroke-width="1.5" stroke-linecap="round"></path> <path d="M22 12L21 12" stroke="#ffea00" stroke-width="1.5" stroke-linecap="round"></path> <path d="M3 12L2 12" stroke="#ffea00" stroke-width="1.5" stroke-linecap="round"></path> <path d="M19.0708 4.92969L18.678 5.32252" stroke="#ffea00" stroke-width="1.5" stroke-linecap="round"></path> <path d="M5.32178 18.6777L4.92894 19.0706" stroke="#ffea00" stroke-width="1.5" stroke-linecap="round"></path> <path d="M19.0708 19.0703L18.678 18.6775" stroke="#ffea00" stroke-width="1.5" stroke-linecap="round"></path> <path d="M5.32178 5.32227L4.92894 4.92943" stroke="#ffea00" stroke-width="1.5" stroke-linecap="round"></path> <path d="M6.34141 10C6.12031 10.6256 6 11.2987 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C11.2987 6 10.6256 6.12031 10 6.34141" stroke="#ffea00" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>'
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
    })
}
const types = document.querySelector(".types");
if(types) {
    const roomtypeAPI = 'https://hotelbooking.stepprojects.ge/api/Rooms/GetRoomTypes';
    fetch(roomtypeAPI).then(response => response.json()).then(array => {
        array.forEach(type => {
            types.innerHTML += `<div class="roomType">${type.name}</div>`
        });
    })
}

const hotels = document.querySelector("#hotelsID");
if(hotels) {
    const hotelsAPI = 'https://hotelbooking.stepprojects.ge/api/Hotels/GetHotels?city=tbilisi';
    fetch(hotelsAPI).then(response => response.json()).then(info => {
        info.forEach(obj => {
            hotels.innerHTML += `<div class="card">
                                    <img src="${obj.featuredImage}" alt="">
                                    <div class="info">
                                        <p>${obj.name}</p>
                                    </div>
                                    <a href="rooms.html"><button>VIEW ROOMS</button></a>
                                </div>`
        })
    })
}

const bookedRooms = document.querySelector(".bookedRooms");     
if(bookedRooms) {
    const bookedRoomsAPI = "https://hotelbooking.stepprojects.ge/api/Booking";
    fetch(bookedRoomsAPI)
        .then(response => response.json())
        .then(data => {
            data.forEach(obj => {
                const roomsbyIDApi = `https://hotelbooking.stepprojects.ge/api/Rooms/GetRoom/${obj.roomID}`;
                fetch(roomsbyIDApi)
                    .then(response =>  response.json())
                    .then(roomArray => {
                        const room = roomArray[0];
                        const hotelbyidAPI = `https://hotelbooking.stepprojects.ge/api/Hotels/GetHotel/${room.hotelId}`;
                        fetch(hotelbyidAPI)
                            .then(response => response.json())
                            .then(hotel => {
                                const hotelImage = hotel.images[0].source;
                                const roomImage = room.images[0].source; 
                                bookedRooms.innerHTML += `<tr>
                                    <td class="Hotel">
                                        <img src="${hotelImage}" alt="${hotel.name}">
                                        <div>
                                            <h5>${hotel.name}</h5>
                                            <p>${hotel.city}</p>
                                        </div>
                                    </td>
                                    <td class="Room">
                                        <img src="${roomImage}" alt="${room.name}">
                                        <div>
                                            <h5>${room.name}</h5>
                                            <h5>$${room.pricePerNight}</h5>
                                        </div>
                                    </td>
                                    <td class="Customer">
                                        <h5>Name: ${obj.customerName}</h5>
                                        <p>Phone: ${obj.customerPhone}</p>
                                    </td>
                                    <td class="Status">
                                        <div>${obj.isConfirmed ? "Booked" : "Not Booked"}</div>
                                    </td>
                                    <td class="Checkin">
                                        <h5>${new Date(obj.checkInDate).toLocaleDateString()}</h5>
                                    </td>
                                    <td class="Checkout">
                                        <h5>${new Date(obj.checkOutDate).toLocaleDateString()}</h5>
                                    </td>
                                    <td class="TotalPrice">
                                        <h5>$${obj.totalPrice}</h5>
                                    </td>
                                    <td class="Actions">
                                        <button data-booking-id="${obj.id}">CANCEL BOOKING</button>
                                    </td>
                                </tr>`;
                            });
                    })
                    .catch(e => {
                        bookedRooms.innerHTML += `<tr><td colspan="8">Failed to load booking #${obj.id}</td></tr>`;
                    });
            });
        })
        .catch(e => {
            bookedRooms.innerHTML = '<tr><td colspan="8">Failed to load bookings. Please try again later.</td></tr>';
        });
}