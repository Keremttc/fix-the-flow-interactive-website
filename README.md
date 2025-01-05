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

## ontwerpkeuzes 

Voor mijn ontwerpkeuze heb ik een uitgebreide breakdownschets gemaakt van de log-in pagina. Deze schets laat niet alleen de visuele indeling van de pagina zien, maar ook de functionaliteit en een idee te geven van bepaalde elementen. Ik heb ervoor gekozen om bij elk profiel een delete-knop te plaatsen. Dit biedt gebruikers de mogelijkheid om een profiel te verwijderen als dat nodig is. De pagina is opgebouwd uit drie hoofdonderdelen: een **header**, een **main** en een **footer**. In de header worden bijvoorbeeld het logo en een eventuele navigatie weergegeven. De main-sectie is het centrale deel van de pagina en bevat de lijst met profielen. Hier heb ik ook laten zien wat er gebeurt als je op de delete-knop klikt. Hiervan heb ik opok een breakdownschets gemaakt.

Daarnaast heb ik ook een Javascript-functie geschetst die de functionaliteit van de delete-knop ondersteunt. In mijn schets wordt duidelijk hoe deze functie werkt, bijvoorbeeld door het profiel uit de lijst te verwijderen. Door deze functie alvast uit te werken, krijg ik een goed beeld van de technische kant en weet ik zeker dat het ontwerp niet alleen mooi is, maar ook praktisch en functioneel.  

![Breakdown-schets](https://github.com/user-attachments/assets/3a6243d3-7f53-40b0-abe6-8af03e50dbeb)


## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
