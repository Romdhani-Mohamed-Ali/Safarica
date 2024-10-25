// Get elements
const burgerMenu = document.getElementById('burgerMenu');
const mobileNavItems = document.getElementById('mobileNavItems');
const dropdownButton = document.getElementById('dropdownButton');
const dropdownMenu = document.getElementById('dropdownMenu');
const mobileDropdownButton = document.getElementById('mobileDropdownButton');
const mobileDropdownMenu = document.getElementById('mobileDropdownMenu');
const guestRoomInput = document.getElementById('guestRoomInput');
const guestRoomDropdownContent = document.getElementById('guestRoomDropdownContent');
const applyGuestsButton = document.getElementById('applyGuests');
const paymentbtn = document.querySelector(`#nextPayment`);
const confirmationBtn = document.querySelector(`#Confirmation`);
const link = document.createElement('link');
const bookingBtnSummer = document.querySelector("#Booking_summer_button");
const bookingContainer = document.querySelector("#bookingContainer");

// Toggle mobile navigation visibility
burgerMenu.addEventListener('click', () => {
    mobileNavItems.classList.toggle('hidden');
});

// Close mobile menu when clicking outside of it
document.addEventListener('click', (e) => {
    if (!burgerMenu.contains(e.target) && !mobileNavItems.contains(e.target)) {
        mobileNavItems.classList.add('hidden');
    }
});

// Handle dropdown menu toggles
dropdownButton.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdownMenu.classList.toggle('hidden');
});

mobileDropdownButton.addEventListener('click', (e) => {
    e.stopPropagation();
    mobileDropdownMenu.classList.toggle('hidden');
});

// Close dropdown when clicking outside of it
const closeDropdown = (event) => {
    if (!dropdownMenu.contains(event.target) && !dropdownButton.contains(event.target)) {
        dropdownMenu.classList.add('hidden');
    }
};

window.addEventListener('click', closeDropdown);

// Toggle guest and room dropdown
guestRoomInput.addEventListener('click', () => {
    guestRoomDropdownContent.classList.toggle('hidden');
});

// Apply button updates the text in the input
applyGuestsButton.addEventListener('click', () => {
    const adults = parseInt(document.getElementById('adults').value) || 0;
    const children = parseInt(document.getElementById('children').value) || 0;
    const rooms = parseInt(document.getElementById('rooms').value) || 0;

    guestRoomInput.value = `${adults} adults · ${children} children · ${rooms} room`;
    guestRoomDropdownContent.classList.add('hidden'); // Hide the dropdown after applying
});

// Close the guest room dropdown if clicked outside
document.addEventListener('click', (e) => {
    if (!guestRoomDropdownContent.contains(e.target) && !guestRoomInput.contains(e.target)) {
        guestRoomDropdownContent.classList.add('hidden');
    }
});

// Function to toggle popup visibility
function togglePopup(popupId) {
    const popup = document.getElementById(popupId);
    if (popup) {
        popup.classList.toggle('hidden');
    }
}

// Open payment page
if (paymentbtn) {
    paymentbtn.onclick = function() {
        window.open('CheckoutSummer.html', '_blank');
    };
}

// Open confirmation page
if (confirmationBtn) {
    confirmationBtn.onclick = function() {
        window.open('Payment Confirmation.html', '_blank');
    };
}

// Add favicon to the document head
link.rel = 'icon';
link.href = 'Img/safari logo.png';
document.head.appendChild(link);

// Smooth scroll to booking container
bookingBtnSummer.addEventListener('click', function() {
    bookingContainer.scrollIntoView({ behavior: 'smooth' });
});

// Sample user data
const users = {
    user1: 'password123',
    user2: 'mysecretpassword',
};

// Add event listener to the form
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get user input
    const username = this.username.value;
    const password = this.password.value;
    const messageDiv = document.getElementById('message');

    // Check if username and password match
    if (users[username] && users[username] === password) {
        messageDiv.textContent = 'Login successful!';
        messageDiv.style.color = 'green';
        
        // Redirect to admin.html
        window.location.href = 'admin.html';
    } else {
        messageDiv.textContent = 'Invalid username or password.';
        messageDiv.style.color = 'red';
    }
});
