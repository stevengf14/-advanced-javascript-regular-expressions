$(function () {
    var contactForm = document.getElementById('contactForm');

    contactForm.onsubmit = function (e) {
        e.preventDefault();

        console.log('Is valid your twitter?', isValidTwitter());
    }

    var isValidTwitter = function () {
        var twitter = document.getElementById('twitter');
        return /^@(\w+)$/.test(twitter.value)
    }

});