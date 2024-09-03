const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    //********************/ form handle /***********

    const form = document.querySelector('#appointment-form');
const messageContainer = document.querySelector('.message-container'); // Element to show messages

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const userName = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const date = form.date.value.trim();
    const message = form.message.value.trim();

    let errors = [];

    // Validate the name
    if (!userName) {
        errors.push('Please enter your full name.');
    } else if (userName.length <= 3) {
        errors.push('Your name must be longer than 3 characters.');
    }

    // Validate the phone number
    if (!phone) {
        errors.push('Please enter your phone number.');
    } else if (phone.length < 9) {
        errors.push('Your phone number must be at least 9 digits long.');
    }

    // Validate the date
    if (!date) {
        errors.push('Please select a date.');
    }

    // Clear previous messages
    messageContainer.innerHTML = '';

    if (errors.length > 0) {
        // Display error messages
        messageContainer.innerHTML = `<p class="error">${errors.join('<br>')}</p>`;
        messageContainer.querySelector('.error').style.color = 'red';
    } else {
        // Prepare message for WhatsApp
        const whatsappNumber = '1234567890'; // Replace with your WhatsApp number
        const whatsappMessage = encodeURIComponent(
            `New appointment request:\nName: ${userName}\nEmail: ${email}\nPhone: ${phone}\nDate: ${date}\nMessage: ${message}`
        );

        // Open WhatsApp chat with pre-filled message
        window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');

        // Display success message
        messageContainer.innerHTML = '<p class="success">Form submitted successfully!</p>';
        messageContainer.querySelector('.success').style.color = 'green';
    }
});
