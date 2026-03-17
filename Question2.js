 const payPal = document.getElementById('paypal');
        const visa = document.getElementById('visa');
        const cardInputs = document.querySelectorAll('#cardFields input');
        const shippingCheckbox = document.getElementById('sameAsBilling');
        const shippingSection = document.getElementById('shippingFields');

        document.getElementsByName('method') .forEach(radio => {
            radio.addEventListener('change', () => {
                const isPaypal = payPal.checked;
                cardInputs.forEach(input => {
                    input.disabled = isPaypal;
                    input.classList.toggle('disabled-field', isPaypal);
                });
            });
        });

        shippingCheckbox.addEventListener('change', () => {
            shippingSection.classList.toggle('hidden', shippingCheckbox.checked);
        });

        document.getElementById('paymentFOrm').addEventListener('submit', (e) => {
            const email = document.getElementById('email');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailRegex.test(email.value)) {
                email.setCustomValidity("Please enter  valid email address.");
            } else {
                email.setCustomValidity("");
            }

        });