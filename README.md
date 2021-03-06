# Game-of-Thrones-Hangman

## Description

The game is your classic hangman game with a Game of Thrones theme.
The phrases to guess are internally generated by the program.

To make a guess, simply click on the button with the appropriate letter-label (each button has the Name of a GoT character whose name begins with that letter).

After each click, the button is disabled and the user is no longer able to select it.
for each incorrect guess, an image will slowly start to appear; and as the user continues to guess incorrectly, the image becomes more opaque.

If the user guesses correctly, the letter(s) appear in the phrase above the line-placeholders.


If the user guesses the complete phrase, congratulations!


## Technologies Used

HTML, CSS, Javascript


## Installation Instructions

## How to fork a repository
Find the link on GitHub 

In the top right, below the plus-sign we used to create a new repository, there is a "Fork" button - click it. Forking

A modal may pop up with the title, "Where should we fork this repository?". If it does, click on your github.com username (not the enterprise github, if they're different).

If everything works, you'll see a screen that has a book with a fork in it being scanned.

You'll then be sent to a page that looks like the one you were just on for your own repo. Take a close look at the heading in the top left: it should have your username and then the name of the repository and underneath that something like, "forked from <your_partners_uesername>/<the_name_of_the_repo>"


## Cloning 

Now that you've forked the repository, you need some way to get it on to your computer (locally). This process is called cloning

How to clone a repository
From the repo page for the fork of my repository (where we left off in the previous step), find the green button that says "Clone or Download".

Copy the link by highlighting it and hitting cmd + C or clicking on the clipboard button next to the link. clone or download

Open up a new terminal window and navigate to your sandbox directory

The command to clone a repository with git is git clone <url_for_the_repo_you_want_to_clone>. You can optionally pass in a name for the repository if you would like to name the working directory when you clone

don't worry about that right now though.
Change in to your new directory and run git log to see the commit history.




## Hurdles
Hurdle #1:  Bootstrap doesn't play well with others. I tried using Bootstrap for the styling of the buttons, using cards and putting them in a container, but I couldn't adjust the spacing to use the full horizontal space. 

Solution: I finally had to abandon bootstrap and build it with HTML and CSS.

Hurdle #2: While I successfully was able to make a for loop that listened for a single button, and console-logged "yes" when it matched a letter of the phrase, and "no" when it didn't match; I had trouble making a loop that listened for all the buttons and did the same thing. The issue may be that I had multiple classes for each button.

Solution: I had to make a container that surrounded all the buttons and listen for a click within that parent container div

This led to another problem: if the user clicked outside the buttons, but nearby, it would still execute code.

Solution: In my logic for listening for a button click, I had to explicitly state NOT to listen for a click the container //  if (evt.target !== allButtons) //


Hurdle #3: When I was creating my win segment of code, I was comparing the number of 'correct user guesses' to the length of the phrase. However, the spaces between words counted towards the length of the phrase, so even though the user guessed all letters correctly, they could not win bc the spaces were not being acocunted for.

Solution: I made an if statement, within the code where I built the divs holding the letters of the phrase, and said to increase the number of 'correct user guesses' each time it encountered a space " ".

Hurdle #4:  While I managed to write the logic correctly to loop through the phrase if the user made a correct guess, when I added the logic for the wrong answer, the code that counted the number of wrong guesses, still added the correct guess to the number of wrong guesses.

Solution: I had to use the function INCLUDES to target the letter directly (that corresponded to the button pressed) -- negating the need for a loop. 

Solution: Also. I needed to use DATASET. When I generated each letter from my phrase I added the line //  placeholderForLetter.dataset.letterValue = lettersOfEachPhrase[i] // - so that each letter was automatically given a data-letter-value (that corresponded to it's actual letter (a,b,c,etc)) generated in the HTML code. [See line 151]. This way, if the phrase has 3 "a"s it will account for all and reveal the letter on the board.


## References: 
https://codepen.io/GeeksRock/pen/JoZEVb?editors=0010 
https://stackoverflow.com/questions/6121203/how-to-do-fade-in-and-fade-out-with-javascript-and-css  