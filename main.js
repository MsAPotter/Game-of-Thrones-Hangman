// ARRAY OF PHRASES CHOSEN BY CREATOR
arrayofPhrases = ["winter is coming", "valar morghulis", "valar dohaeris", "i drink and i know things", "you know nothing jon snow", "chaos is a ladder", "hold the door"];
console.log(arrayofPhrases)


//  RANDOMIZE ARRAY OF PHRASES AT EACH START 
//  Reference: https://codepen.io/GeeksRock/pen/JoZEVb?editors=0010
//  Reference:  Game of War Lab

function GetRandomPhrase() {
    var j = Math.floor((Math.random() * 7));
    randomPhrase = arrayofPhrases[j];
    return randomPhrase;
}
GetRandomPhrase()
console.log(randomPhrase)


// NEVER USE THE SAME RANDOM PHRASE TWO TIMES IN A ROW 
//  Reference: https://codepen.io/GeeksRock/pen/JoZEVb?editors=0010

var lastUsedPhrase;

function NoTwoWordsTheSame() {
    randomPhrase = GetRandomPhrase();
    //never use the same random word two times in a row
    if (randomPhrase[0] === lastUsedPhrase) {
        //request a new random word
        NoTwoWordsTheSame();
    } else {
        //track the last random word used
        lastUsedPhrase = randomPhrase[0];
        return lastUsedPhrase
    }
}
NoTwoWordsTheSame()
console.log(randomPhrase)


//  MAKE PHRASE INTO INDIVIDUAL LETTERS TO BE ABLE TO LOOP THROUGH

// Splits each phrase (index) into separate string letters (to be looped thru later)

let lettersOfEachPhrase = randomPhrase.split("");
console.log(lettersOfEachPhrase);
console.log(lettersOfEachPhrase.length)


// ADD IMAGE UNDER HEADER

arrayOfImages = ['https://awoiaf.westeros.org/thumb.php?f=HBOGolden_Crown.png&width=350', 'https://www.telegraph.co.uk/content/dam/tv/2017/07/31/ouch-0_trans_NvBQzQNjv4BqQ99bcywK3ovn70OLmYu7RvcGjdxbBaRy7TzoQO1nXvA.jpg?imwidth=450']

// function GetRandomImage() {
//     var j = Math.floor((Math.random() * 2));
//     randomImage = arrayofImages[j];
//     // return randomImage;
// }
// GetRandomImage()


let placeholder = document.getElementById('placeholder');
console.log(placeholder)
let imageTagForImage = document.createElement('img');
imageTagForImage.className = "hangman";
placeholder.appendChild(imageTagForImage);
// console.log(imageTagForImage)
imageTagForImage.setAttribute("src", arrayOfImages[0]);



//  CREATE DIVS TO DISPLAY THE PHRASE ON THE GAMEBOARD
//  Reference: Danny (for the idea to create a span tag to be able to hide the letter and not the hr)

// Loops through a phrase and creates as many divs as there are letters in the phrase
// Adds a class to div 
// Adds a span to the div
// Adds a class to the span in order to set hide attributes in CSS
// Adds letters of the phrase to the span within the divs
// Also creates underlines (hr) under each div element (--> would not append to letters)

placeholderForLetter = [];
let numOfCorrectGuesses = 0;

for (var i = 0; i < lettersOfEachPhrase.length; i++) {

    if (lettersOfEachPhrase[i] == " ") {
        numOfCorrectGuesses++;
        console.log("The number of correct guesses is:" + numOfCorrectGuesses)
    }

    let divForLetter = document.createElement('div')
    divForLetter.className = "letter";
    document.querySelector('#phrase').appendChild(divForLetter)

    placeholderForLetter = document.createElement('span')       // NEEDED TO ADD A SPAN IOT HIDE LETTERS ==> IDEA FROM DANNY
    placeholderForLetter.className = "hide-me";             
    placeholderForLetter.dataset.letterValue = lettersOfEachPhrase[i]   // TARGETS THE LETTERS IN THE LOGIC BELOW
    divForLetter.appendChild(placeholderForLetter)
    // console.log(placeholderForLetter)

    letter = document.createTextNode(lettersOfEachPhrase[i])
    // console.log(letter)
    placeholderForLetter.appendChild(letter)
    // console.log(divForLetter)

    let lineAsLetterPlaceholder = document.createElement('hr')      // NEEDED TO APPEND HR TO DIV (REMOVE FROM SAME ELEMENT AS LETTER) IOT HIDE LETTERS
    lineAsLetterPlaceholder.className = "line";
    divForLetter.appendChild(lineAsLetterPlaceholder)
}



//  Adding event listener to listen for click on buttons

// ==> ARE WE NOT ABLE TO LISTEN ON MULTIPLE ELEMENTS AT ONCE?? (ie could not get the quearySelectorAll to work with a click function, until I added a forEach function)

// 1. Loop through all buttons, listening for a click
// 2. If a button is clicked, check if the button letter (ie "a") equals any letter in the phrase
// 3. If yes, (1) unhide the letter 
//              (2) Disable button from future clicks
//            X (3) increase userGuess count
//              (4) if user guesses all letters correctly, they win!
// 4. If no, (1) popup to let used know choice was incorrect and/or Add "hangman figure"
//              (2) Disable button from future clicks  
//              (3) If user guesses X many times, Game over
//  REFERENCE: https://stackoverflow.com/questions/6121203/how-to-do-fade-in-and-fade-out-with-javascript-and-css           
//              (4) increase userGuess count


let numOfWrongGuesses = 5;
op = 0.1;

let allButtons = document.querySelector('.container')
console.log(allButtons)


function playGame() {

    allButtons.addEventListener('click', function (evt) {
        evt.preventDefault();
        // console.log(evt.target.id)
        if (evt.target !== allButtons) {        //  ignores clicking on container of buttons


            if (lettersOfEachPhrase.includes(evt.target.id)) {
                console.log('includes', evt.target.id)
                event.target.disabled = true;
                event.target.style.opacity = 0.3;


                let letters = document.querySelectorAll(`[data-letter-value='${evt.target.id}']`)
                console.log(letters)
                for (let i = 0; i < letters.length; i++) {
                    letters[i].removeAttribute("class");


                    numOfCorrectGuesses++;
                    console.log("The new number of correct guesses is: " + numOfCorrectGuesses);

                    if (numOfCorrectGuesses === lettersOfEachPhrase.length) {
                        console.log("win");
                        win()
                    }
                }

            }
            else {
                console.log('no letter found', evt.target.id)
                numOfWrongGuesses--;
                console.log(numOfWrongGuesses)
                let counter = document.querySelector('#guesses');
                counter.textContent = numOfWrongGuesses;

                if (numOfWrongGuesses <= 7) {
                    event.target.disabled = true;
                    event.target.style.opacity = 0.3;

                    imageTagForImage.style.opacity = op;
                    // imageTagForImage.style.filter = 'alpha(opacity=" + op * 100 + ")';
                    op += op * 0.3;
                    console.log(op)
                }
                if (numOfWrongGuesses == 0) {
                    console.log("Game over");
                    lose() 
                }
            }

        }

    })
}
playGame()


//  WIN FUNCTION ==> EXCHANGES IMAGE FOR GIF + TEXT + (NEED TO ADD 'BUTTON TO RESET GAME')

function win() {
    imageTagForImage.removeAttribute("src");
    imageTagForImage.setAttribute("src", 'images/joffrey\ clap.gif');
    imageTagForImage.style.opacity = 1;
    imageTagForImage.style.minWidth = "500px";
    letyouWin = document.createElement('p');
    placeholder.appendChild(letyouWin)
    addCongrats = document.createTextNode("Well, well well. Good job!");
    letyouWin.appendChild(addCongrats);

    let restartButton = document.createElement('button')
    restartButton.className = "restart";
    restartButton.setAttribute("type", "submit");
    let restartWords = document.createTextNode("Wanna play again?")
    restartButton.appendChild(restartWords)
    letyouWin.appendChild(restartButton);
}

function lose() {
    imageTagForImage.style.opacity = 1;
    youLose = document.createElement('p');
    placeholder.appendChild(youLose);
    addLose = document.createTextNode("Game over");
    youLose.appendChild(addLose);

    let restartButton = document.createElement('button')
    restartButton.className = "restart";
    restartButton.setAttribute("type", "submit");
    let restartWords = document.createTextNode("Wanna play again?")
    restartButton.appendChild(restartWords)
    youLose.appendChild(restartButton);
}


// let restartClick = document.querySelector('.restart')
// restartClick.addEventListener('click', restart(){
//     GetRandomPhrase()
//     NoTwoWordsTheSame()
//     phraseSplit()
// });




