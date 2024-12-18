// delete all profiles function

// const DeleteButton = document.querySelector('.DeleteButton');
// DeleteButton.addEventListener('click', deleteProfile);


// function deleteProfile() {
//     const profielen = document.querySelector('.profielen');   
//     profielen.classList.toggle('hidden');
// }


const profile1 = document.querySelector('.DeleteProfile1')
const profile1Button = document.querySelector('.DeleteProfile1-button')


profile1Button.addEventListener('click' , deleteProfile1)

function deleteProfile1() {
    profile1.classList.toggle('hidden');
}




const profile2 = document.querySelector('.DeleteProfile2')
const profile2Button = document.querySelector('.DeleteProfile2-button')


profile2Button.addEventListener('click' , deleteProfile2)

function deleteProfile2() {
    profile2.classList.toggle('hidden');
}


const profile3 = document.querySelector('.DeleteProfile3')
const profile3Button = document.querySelector('.DeleteProfile3-button')


profile3Button.addEventListener('click' , deleteProfile3)

function deleteProfile3() {
    profile3.classList.toggle('hidden');
}










// zet alle labels in een variabele (querySelectorAll)
// loop door alle label elementen (forEach)
// voeg aan de button in de label een eventlistener toe
// roep de deleteFunctie aan met het label als parameter






// // bibber functie
// let bibberLink = document.querySelector('a:nth-of-type(3)')

// bibberLink.addEventListener('dblclick', bibberen)

// function bibberen( ){ 
//   bibberLink.classList.toggle('bibber')
// }

// bibberLink.addEventListener('animationend',bibberen)