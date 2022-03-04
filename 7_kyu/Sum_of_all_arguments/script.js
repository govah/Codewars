/*Write a function that finds the sum of all its arguments.

eg:

sum(1, 2, 3) // => 6
sum(8, 2) // => 10
sum(1, 2, 3, 4, 5) // => 15*/

function sum() {
  var sum = 0
  for(i=0;i<arguments.length;i++){
    sum += arguments[i]
  }
  return sum
}

