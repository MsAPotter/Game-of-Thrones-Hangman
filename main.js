// Array of phrases chosen by creator
arrayofPhrases = ["winter is coming", "valar morghulis"];      
    console.log(arrayofPhrases)

// Splits each phrase (index) into separate string letters (to be looped thru later)
phrases = arrayofPhrases[0].split("");                   
    console.log(phrases);
    console.log(phrases[0][0]);


wordToGuess = document.querySelector('#phrase');
    console.log(wordToGuess);

// Loops through a phrase and create as many divs with the corresponding letter, 
// as there are letters in the phrase
for (var i =0; i < phrases.length; i++) {         
    let divForLetter = document.createElement('div')
    divForLetter.className = "letter";
        document.querySelector('#phrase').appendChild(divForLetter)
    // let para = document.createElement('p')
    //     divForLetter.appendChild(para);
    let letters = document.createTextNode(phrases[i])
    // let letters = para.textContent = phrases[i]
    console.log(letters)
        divForLetter.appendChild(letters)
        console.log(divForLetter)
    let lineAsLetterPlaceholder = document.createElement('hr')
    lineAsLetterPlaceholder.className = "line"
    divForLetter.appendChild(lineAsLetterPlaceholder)
        // document.querySelector('para').classNmae = "style"             
        // letters.appendChild(divForLetter);
        // letterCharacter.style. = "white"; 
        // letterCharacter.style.width = "25px";
        // document.querySelector('#guess-what-phrase').appendChild(letterToGuess)

}

let selectAllLetters = document.querySelectorAll('.letter')
console.log(selectAllLetters)


// let userClicksOnLetter = selectAllLetters.addEventListener('click', someFunction)


// function someFunction() {
//     console.log("works")

//     for (var i = 0; i < answerPhrases.length; i++) {
//         if (selectAllLetters[0].dataset.letter  == answerPhrases[i]) {  // OR selectAllLetters.innerText
//             document.querySelectorAll(`[data-letter=${i}]`)[i].innerHTML = selectAllLetters[0].dataset.letter
//     }
    
//     }
  
    
// }
