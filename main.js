// Array of phrases chosen by creator
arrayofPhrases = ["winter is coming", "valar morghulis"];      
    console.log(arrayofPhrases)

// Splits each phrase (index) into separate string letters (to be looped thru later)
phrases = arrayofPhrases[0].split("");                   
    console.log(phrases);
    console.log(phrases[0][0]);


wordToGuess = document.querySelector('#phrase');
    console.log(wordToGuess);

// Loops through a phrase and creates as many divs as there are letters in the phrase
// Adds a class to div in order to style as desired
// Adds letters of the phrase to the divs
// Also creates underlines (hr) under each div element (would not append to letters)
for (var i =0; i < phrases.length; i++) {         
    let divForLetter = document.createElement('div')
        divForLetter.className = "letter";
        document.querySelector('#phrase').appendChild(divForLetter)

    let letters = document.createTextNode(phrases[i])
        console.log(letters)
        divForLetter.appendChild(letters)
        console.log(divForLetter)

    let lineAsLetterPlaceholder = document.createElement('hr')
        lineAsLetterPlaceholder.className = "line"
        divForLetter.appendChild(lineAsLetterPlaceholder)
}


//  Adding event listener to listen for click on buttons

// Reference: https://stackoverflow.com/questions/40956717/how-to-addeventlistener-to-multiple-elements-in-a-single-line

// ==> ARE WE NOT ABLE TO LISTEN ON MULTIPLE LEMENTS AT ONCE?? (ie could not get the quearySelectorAll to work with a click function, until I added a forEach function)

let selectAllLetters = document.querySelectorAll('.button')
console.log(selectAllLetters)


selectAllLetters.forEach(function(userClicksOnLetter) {
    userClicksOnLetter.addEventListener("click", function() {
        console.log("test");
        //this function does stuff
    });
});


// On start, shuffle array of phrases
// Hide phrase at START
// visibility: hidden;


// let userClicksOnLetter = selectAllLetters.addEventListener("click", function() {
//     console.log("test");
// });
    // for (var i = 0; i < phrases.length; i++) {
    //     if (selectAllLetters[0].dataset.letter  == answerPhrases[i]) {  // OR selectAllLetters.innerText
    //         document.querySelectorAll(`[data-letter=${i}]`)[i].innerHTML = selectAllLetters[0].dataset.letter
    // }
    
    // }
  

// for (let i = 0; i < phrases.length; i++) {
//     phrases[i].addEventListener('click', function(evt) {    
//       evt.preventDefault();

// })
// }
