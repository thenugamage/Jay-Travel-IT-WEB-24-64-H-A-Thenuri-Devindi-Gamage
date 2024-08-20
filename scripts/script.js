<script>
        document.addEventListener('DOMContentLoaded', function () {
            const form = document.querySelector('form');
            form.addEventListener('submit', function (event) {
                const fname = document.getElementById('floatingFname').value;
                const lname = document.getElementById('floatingLname').value;
                const email = document.getElementById('floatingEmail').value;
                const phone = document.getElementById('floatingPhone').value;
                const isChecked = document.getElementById('exampleCheck1').checked;

                // Validation
                let errors = [];

                if (!fname || !lname || !email || !phone) {
                    errors.push('All fields must be filled.');
                }

                if (!/^\d+$/.test(phone)) {
                    errors.push('Phone number can only contain numbers.');
                }

                if (!/\S+@\S+\.\S+/.test(email)) {
                    errors.push('Email should be in correct format.');
                }

                if (fname.length > 30) {
                    errors.push('First name cannot exceed 30 characters.');
                }

                if (lname.length > 30) {
                    errors.push('Last name cannot exceed 30 characters.');
                }

                if (errors.length > 0) {
                    event.preventDefault(); // Prevent form submission
                    alert(errors.join('\n')); // Display errors
                }
            });
        });
    </script>