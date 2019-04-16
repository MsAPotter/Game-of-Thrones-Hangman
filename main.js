// Array of phrases chosen by creator
phrases = ["winter is coming", "valar morghulis"];      
    console.log(phrases)

// Splits each phrase (index) into separate string letters (to be looped thru later)
answerPhrases = phrases[0].split("");                   
    console.log(answerPhrases);
    console.log(answerPhrases[0][0]);


wordToGuess = document.querySelector('#guess-what-phrase');
    console.log(wordToGuess);

// Loops through a phrase and creates as many horizontal lines as there are letters in the phrase
for (var i =0; i < answerPhrases.length; i++) {         
    let letterToGuess = document.createElement('hr')                
        letterToGuess.style.borderColor = "white"; 
        letterToGuess.style.width = "25px";
        document.querySelector('#guess-what-phrase').appendChild(letterToGuess)

}

let selectAllLetters = document.querySelectorAll('.letter')
console.log(selectAllLetters)
let ugh = document.getElementsByClassName('letter')
console.log(ugh)
let bleh = document.getElementsByTagName('img')
console.log(bleh)

let userClicksOnLetter = selectAllLetters.addEventListener('click', someFunction)


function someFunction() {
    console.log("works")

    for (var i = 0; i < answerPhrases.length; i++) {
        if (selectAllLetters[0].dataset.letter  == answerPhrases[i]) {  // OR selectAllLetters.innerText
            document.querySelectorAll(`[data-letter=${i}]`)[i].innerHTML = selectAllLetters[0].dataset.letter
    }
    
    }
  
    
}
