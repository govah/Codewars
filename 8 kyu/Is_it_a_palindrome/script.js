//Is it a palindrome
/*
 Description:
Write a function that checks if a given string (case insensitive) is a palindrome.
*/

const isPalindrome = (x) => {
  return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
}
