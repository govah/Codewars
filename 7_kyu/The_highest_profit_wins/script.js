/*
 Story

Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.
Task

Write a function that returns both the minimum and maximum number of the given list/array. 

  */



function minMax(arr){
  
  if (!arr) {
    return null;
  }
  var minV = arr[0];
  var maxV = arr[0];
  for (a of arr) {
    if (a < minV) minV = a;
    if (a > maxV) maxV = a;
  }
  return [minV, maxV];
}
