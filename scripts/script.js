document.getElementById('myForm').addEventListener('submit', function(event) {
    // Get form fields
    const firstName = document.getElementById('floatingFname').value.trim();
    const lastName = document.getElementById('floatingLname').value.trim();
    const email = document.getElementById('floatingEmail').value.trim();
    const phone = document.getElementById('floatingPhone').value.trim();
    const checkbox = document.getElementById('exampleCheck1').checked;

    // Validation
    if (!firstName || !lastName || !email || !phone) {
        alert('All input fields must be filled.');
        event.preventDefault(); // Prevent form submission
        return;
    }

    if (!/^\d{10}$/.test(phone)) {
        alert('Phone number must be exactly 10 digits.');
        event.preventDefault(); // Prevent form submission
        return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert('Email must be in a valid format.');
        event.preventDefault(); // Prevent form submission
        return;
    }

    if (firstName.length > 30 || lastName.length > 30) {
        alert('First name and last name must be 30 characters or less.');
        event.preventDefault(); // Prevent form submission
        return;
    }

    // If all validations pass, the form will be submitted
});
a