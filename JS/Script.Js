// Smooth Scrolling....
document.addEventListener("DOMContentLoaded", function () {
    var links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            var targetId = this.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Toggle Password Visibility
const togglePassword = document.getElementById('toggle-password');
const passwordInput = document.getElementById('password');

togglePassword.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        togglePassword.classList.replace('bx-hide', 'bx-show');
    } else {
        passwordInput.type = 'password';
        togglePassword.classList.replace('bx-show', 'bx-hide');
    }
});

// Form Submission
const form = document.getElementById('signup-form');
const messageBox = document.getElementById('message-box');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    messageBox.textContent = 'Form submitted successfully!';
    messageBox.style.display = 'block';
    messageBox.style.backgroundColor = '#d4edda';
    messageBox.style.color = '#155724';
    form.reset();
});