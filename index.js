// Get the menu toggle and close buttons
const menuToggle = document.getElementById('menuToggle');
const closeMenu = document.getElementById('closeMenu');
const mobileMenu = document.getElementById('mobileMenu');

// Function to open the mobile menu
menuToggle.addEventListener('click', function () {
  mobileMenu.classList.remove('hidden');
});

// Function to close the mobile menu
closeMenu.addEventListener('click', function () {
  mobileMenu.classList.add('hidden');
});

console.log("Hello");

//  vehicle booking
let selectedVehicle = 'Motorbike';
function selectVehicle(vehicle) {
  selectedVehicle = vehicle;
  const bookButton = document.getElementById('bookButton');
  bookButton.innerText = `Book For ${vehicle}`;
}

function bookNow() {
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  const name = document.getElementById('name').value;

  if (!date || !time || !name) {
    alert('Please fill all the fields!');
    return;
  }

  const message = `${name}, Hello! %0AI would like to make a booking. %0AVehicle Type:- ${selectedVehicle}%0ADate: ${date}%0ATime: ${time}`;

  const whatsappURL = `https://wa.me/916267363477?text=${message}`;
  window.open(whatsappURL, '_blank');
}

//  Room Booking
document.getElementById('bookingForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('fullName').value;
  const phone = document.getElementById('phone').value;
  const checkInDate = document.getElementById('checkInDate').value;
  const roomType = document.getElementById('roomType').value;
  const guests = document.getElementById('guests').value;

  const message = `Hello, I would like to book a room with the following details:%0AName: ${name}%0APhone: ${phone}%0ACheck-in Date: ${checkInDate}%0ARoom Type: ${roomType}%0AGuests: ${guests}`;

  const whatsappURL = `https://wa.me/916267363477?text=${message}`;

  window.open(whatsappURL, '_blank');
});


// slider section


