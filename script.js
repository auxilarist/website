window.addEventListener('scroll', function() {
    const bannerText = document.getElementById('bannerText');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 1) { // Change color after scrolling 100px
        bannerText.style.color = 'blue'; // Change to desired color
    } else {
        bannerText.style.color = 'white'; // Original color
    }
});
