# Password Generator Michael Tranquillo


## To create a Password Generator that systematically automizes a random password, based on the user's selection(s).

## The user is able to chose the range of characters being used from 8 to 128 characters.

## The user is able to have, or not have characters based on these selections;
* Upper Case Characters : **ABC**
* Lower Case Characters : **abc**
* Numbers : **123**
* Special Case Characters : **!@#**
### The user must make the selection between the two numbers, and at a minimum, include one of the above four sections to be able to obtain a randomized password. 

## Some of the problems solved that are of interest.

To add a guaranteed character within the final password, you can use this code when iterating through the selections of wether or not you want certain characters;
``` 
variable += upperCase[Math.floor(Math.random() * variableTarget.length)]
```
Confirm the length before continuing to the randomizer, and minimize it by target new variable.

## Resources:

* Ladislav Jarabek : Coding Bootcamp Instructor
* Dru Sanchez : Coding Bootcmap Tutor

Link to deployed Website: https://blossomswilts.github.io/password-generator/

mit

Copyright (c) _2023_ _Michael Tranquillo
