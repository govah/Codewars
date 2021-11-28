/* Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.*/

function alphabetPosition(text) {
 const result = text.split('').map(a => parseInt(a, 36) - 9)
        .filter(a => a >= +1).join(' ')
        return result

 }

