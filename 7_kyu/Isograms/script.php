<?php
/*An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter casing)*/
function isIsogram($string) {
    $array_phrase = str_split(strtolower(preg_replace('/[\s-äöü]/', '', $string)));
    return count($array_phrase) == count(array_unique($array_phrase));
  }

?>