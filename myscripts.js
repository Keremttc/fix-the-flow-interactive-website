// Selecteer de knop (header-image)
const headerButton = document.querySelector('.header-image');

// Selecteer alle round-image-afbeeldingen
const roundImages = document.querySelectorAll('.round-image');

// Voeg een click event toe aan de header-image
headerButton.addEventListener('click', () => {
    // Loop door alle afbeeldingen en voeg de hidden-klasse toe
    roundImages.forEach((img) => {
        img.classList.add('hidden');
    });
});
