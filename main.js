function gameBoard() {

// Array of phrases chosen by creator
arrayofPhrases = ["winter is coming", "valar morghulis"];      
    console.log(arrayofPhrases)

// Splits each phrase (index) into separate string letters (to be looped thru later)
lettersOfEachPhrase = arrayofPhrases[1].split("");                   
    console.log(lettersOfEachPhrase);
    console.log(lettersOfEachPhrase[0][0]);


wordToGuess = document.querySelector('#phrase');
    console.log(wordToGuess);

// Loops through a phrase and creates as many divs as there are letters in the phrase
// Adds a class to div in order to style as desired
// Adds letters of the phrase to the divs
// Also creates underlines (hr) under each div element (would not append to letters)
for (var i =0; i < lettersOfEachPhrase.length; i++) {       

    let divForLetter = document.createElement('div')
        divForLetter.className = "letter";
        document.querySelector('#phrase').appendChild(divForLetter)

    let letters = document.createTextNode(lettersOfEachPhrase[i])
        // console.log(letters)
        divForLetter.appendChild(letters)
        // console.log(divForLetter)

    // document.querySelectorAll("[data-letter]")[i]
    // document.querySelectorAll("[data-letter]")[0].id.style.visibility = "hidden";

    let lineAsLetterPlaceholder = document.createElement('hr')
        lineAsLetterPlaceholder.className = "line"
        divForLetter.appendChild(lineAsLetterPlaceholder)

      
}
// div.letter.style.visibility = "hidden";  

}
gameBoard()


//  Adding event listener to listen for click on buttons

// Reference: https://stackoverflow.com/questions/40956717/how-to-addeventlistener-to-multiple-elements-in-a-single-line
// selectAllLetters.forEach(function(userClicksOnLetter) {
//     userClicksOnLetter.addEventListener("click", function(event) {
//         console.log("test");
//         //this function does stuff
//     });
// });
//
// ==> ARE WE NOT ABLE TO LISTEN ON MULTIPLE LEMENTS AT ONCE?? (ie could not get the quearySelectorAll to work with a click function, until I added a forEach function)


// 1. Loop through all buttons, listening for a click
// 2. If a button is clicked, check if the button letter (ie "a") equals any letter in the phrase
// 3. If yes, (1) unhide the letter 
//              (2) Disable button from future clicks
//              (3) increase userGuess count
// 4. If no, (1) popup to let used know choice was incorrect
//              (2) Add hangman figure
//              (3) Disable button from future clicks 
//              (4) increase userGuess count


// let startButton = document.getElementById('play-game');
// startButton.addEventListener('click', function playGame(){
// function playGame() {

userGuess = 0;
let allButtons = document.querySelector('.container')
console.log(allButtons)

allButtons.addEventListener('click', function(evt) {
    evt.preventDefault();
    console.log("boom");
    console.log(evt.target.id)

    for (var i =0; i < lettersOfEachPhrase.length; i++) { 
        if (evt.target.id == lettersOfEachPhrase[i]) {  //check
            console.log("yes")
            // evt.target.id.style.visibility = "hidden";
            // console.log(lettersOfEachPhrase[i])             // check
            // // lettersOfEachPhrase[i].style.visibility = "hidden";
            // // console.log(letters[i])                     // check
            // evt.target.id.style.visibility = "hidden";

            // allButtons[j].disabled = true;                      // disables clicked button
            // allButtons[j].style.backgroundColor = "#f5f5f5";    // adds visual gray background for users to know disabled

            userGuess = userGuess + 1;
        }   else {
            // Add hangman figure
            userGuess = userGuess + 1;
            console.log("oops")
        }
    }

})
// while (userGuess <= 5) {
    // function playGame() {

// for (var j =0; j < allButtons.length; j++) {
//     // allButtons[j].addEventListener('click', function() {
//         // event.preventDefault();
//         console.log(allButtons[j])
//         console.log(allButtons[j].id)
        
            
        // }
    
    // }
// }
// playGame()
// }

if (userGuess > 5) {
    console.log("Game Over.")
    // display Game Over
    // play Video
    // display button asking "Try again?"
    // if button clicked, reset game (shuffle phrases array)
}

// }   // ends playGame 

// })  // end of Start button click function
// playGame()

// userGuess = 0;
// while (userGuess < 5) {
//     for (var i =0; i < lettersOfEachPhrase.length; i++) { 
//         if (event.key == document.querySelectorAll(`[id=${lettersOfEachPhrase[i]}]`)[0].id) {
//             lettersOfEachPhrase.style.visiblity = hidden;
//         }

// }
// }


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
