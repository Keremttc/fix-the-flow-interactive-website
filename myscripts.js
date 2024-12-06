// Selecteer de knop (header-image)
// const headerButton = document.querySelector('.header-image');

// Selecteer alle round-image-afbeeldingen
// const roundImages = document.querySelectorAll('.round-image');

// Voeg een click event toe aan de header-image
// headerButton.addEventListener('click', () => {
    // Loop door alle afbeeldingen en voeg de hidden-klasse toe
//     roundImages.forEach((img) => {
//         img.classList.add('hidden');
//     });
// });

function deleteProfile() {
    // Selecteer het eerste HTML-element met de klasse 'profielen'
    const profielen = document.querySelector('.profielen');
    
    // Verberg het element door de CSS-display eigenschap op 'none' te zetten
    profielen.style.display = 'none';
}
