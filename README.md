# The Client - Website

Ontwerp en maak een website voor een opdrachtgever en bespreek het resultaat tijdens de Sprint Review.

De instructie van deze leertaak staan in de [INSTRUCTIONS.md](https://github.com/fdnd-task/the-client-website/blob/main/docs/INSTRUCTIONS.md)



## Inhoudsopgave Readme

  * [Beschrijving](#beschrijving)
  * [Kenmerken](#kenmerken)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
<!-- In de Beschrijving staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->
Ik heb de opdracht gekregen om een kinderlijk project maken, genaamd TumiMundo. In het kort is TumiMundo een project om kinderen van 1 tm 5 ondersteuning te geven om twee talen te leren. Ik heb deze sprint verder gewerkt aan de log-in pagina. De pagina is ervoor bedoelt om je account te kiezen en te kunnen editen. Deze sprint is gefocust op Javascript. We hebben informatie gekregen over feedforward en feedback. Denk hierbij aan een zoekbalk, dat is feedfoward. Als je op de zoekbalk typed dan kom je op een ander pagina, dat is feedback.  

Dit project is gemaakt met HTML, javascript en CSS. Verder staat hieronder nog een korte lijst met gebruikte tools en middelen.
 
**Tools** 
- 🖥️ VSCode
- ✍️ Figma
 
**Methodes en Technieken**
- 🚀 HTML
- 💅🏼 CSS
- ⚙️ Javascript


<!-- Voeg een mooie poster visual toe 📸 -->

![image](https://github.com/user-attachments/assets/a47072a3-e69c-42cb-9867-e401c45d6133)

De knoppen onder de profielen kan je verwijderen dat is feedforward. Drie belangrijke buttons bepalen de interactie tussen de gebruiker en de site.


![image](https://github.com/user-attachments/assets/accdc914-c5b5-44bc-a812-4523e722dd6a)


Vervolgens zijn de knoppen weg dat is de feedback. 






  ## Github

https://keremttc.github.io/look-and-feel-corporate-identity/<!-- Voeg een link toe naar Github Pages 🌐-->
## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met Javascript gedaan en hoe? Misschien heb je een framwork of library gebruikt? -->

Deze sprint heb ik knoppen gevoegd aan mijn profielen, om ze een voor een te kunnen verwijderen. Dit heb ik gedaan met Javascript. Hiervoor heb ik de verschillende codes gebruikt. Hierbij een voorbeeld code:
"const profile1 = document.querySelector('.DeleteProfile1')
const profile1Button = document.querySelector('.DeleteProfile1-button')


profile1Button.addEventListener('click' , deleteProfile1)

function deleteProfile1() {
    profile1.classList.toggle('hidden');
}"



## User-Test
         
Een kleine tip tijdens de user-test: Ik kreeg als feedback om de profielen een voor een te kunnen verwijderen in plaats van alles in een keer.


## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
