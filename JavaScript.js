document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("آپ کا پیغام موصول ہو گیا ہے۔ شکریہ!");
        form.reset();
    });