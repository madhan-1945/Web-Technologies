document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('passwordError').textContent = '';

    let isValid = true;

    const name = document.getElementById('studentName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value;

    if (name.length < 3) {
        document.getElementById('nameError').textContent = 'Full Name must be at least 3 characters.';
        isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById('phoneError').textContent = 'Phone Number must be 10 digits.';
        isValid = false;
    }

    if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters.';
        isValid = false;
    }

    if (isValid) {
        alert('Registration Successful! Thank you for registering.');
        document.getElementById('registrationForm').reset();
    }
});