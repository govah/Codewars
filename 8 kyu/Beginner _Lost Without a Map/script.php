<?php

/*Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]*/
function maps($x)
{
  foreach($x as $part) 
  {
    $parts[] = $part * 2;
  }
  return $parts;
};

?>