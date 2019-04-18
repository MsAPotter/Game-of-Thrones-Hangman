# Game-of-Thrones-Hangman


Hurdle #1:  Bootstrap doesn't play well with others. I tried using Bootstrap for the styling of the buttons, using cards and putting them in a container, but I couldn't adjust the spacing to use the full horizontal space. I finally had to abandon bootstrap and build it with HTML and CSS.

Hurdle #2: While I successfully was able to make a for loop that listened for the button A and console-logged "yes" when it matched a letter of the phrase, and "no" when it didn't match; I am having trouble making a loop that listens for all the buttons and does the same thing.
--> I had to make a container that surrounded all the buttons and listen for a click within that parent container div

Hurdle #3: My loop that is supposed to SHOW the letter of the button clicked is not synced correctly. Syncing up my phrase array (that the computer knows to iterate thru) vs the divs, classes, and attributes I made in the DOM to generate the visual dashes that the user sees.