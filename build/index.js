
        // Handling form submission with event listener
        const form = document.querySelector('#contactForm');
        const emailInput = document.querySelector('#email');
        const messageInput = document.querySelector('#message');
        const submitButton = document.querySelector('button[type="submit"]');

        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent form from submitting by default

            // Basic validation
            if (!emailInput.value || !messageInput.value) {
                alert('Please fill out both the email and message fields.');
                return;
            }

            alert('Form submitted successfully!');
            form.reset(); // Reset form after submission
        });

        // Handling input changes with event listener
        emailInput.addEventListener('input', function() {
            console.log('Email field updated: ', emailInput.value);
        });

        messageInput.addEventListener('input', function() {
            console.log('Message field updated: ', messageInput.value);
        });

        // Handling button click events
        submitButton.addEventListener('click', function(event) {
            console.log('Form submit button clicked');
        });

        // Scroll-to-top button functionality
        const scrollToTopBtn = document.querySelector('#scrollToTopBtn');

        // Display the scroll-to-top button after scrolling 300px
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                scrollToTopBtn.style.display = 'block';
            } else {
                scrollToTopBtn.style.display = 'none';
            }
        });

        // Scroll to the top when the button is clicked
        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Handling mouseover and mouseout events for button hover effects
        submitButton.addEventListener('mouseover', function() {
            submitButton.style.backgroundColor = '#45a049';
        });

        submitButton.addEventListener('mouseout', function() {
            submitButton.style.backgroundColor = '#4CAF50';
        });

        // Handling keydown event for any key press
        window.addEventListener('keydown', function(event) {
            console.log('Key pressed: ', event.key);
        });