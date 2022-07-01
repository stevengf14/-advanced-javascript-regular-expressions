$(function () {
    var contactForm = document.getElementById('contactForm');

    contactForm.onsubmit = function (e) {
        e.preventDefault();

        console.log('Is valid the email?', isValidEmail());
    }

    var isValidEmail = function () {
        var email = document.getElementById('email');
        return /^\w+([\.\+\-]?\w+)*@([\.-]?\w+)*(\.\w{2,4})+$/.test(email.value)
    }

});