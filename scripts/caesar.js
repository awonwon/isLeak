/*
 * Caesar cipher
 *
 * Copyright (c) 2014 Project Nayuki
 * All rights reserved. Contact Nayuki for licensing.
 * http://www.nayuki.io/page/caesar-cipher-javascript
 */


/*
 * Returns the result of having each letter of the given text shifted forward by the given key, with wraparound. Case is preserved, and non-letters are unchanged.
 * Examples:
 *   crypt("abz", 1) = "bca"
 *   crypt("THe 123 !@#$", 13) = "GUr 123 !@#$"
 */
function crypt(input, key) {
  var output = "";
    for (var i = 0; i < input.length; i++) {
    var c = input.charCodeAt(i);
    if      (c >= 65 && c <=  90) output += String.fromCharCode((c - 65 + key) % 26 + 65);  // Uppercase
    else if (c >= 97 && c <= 122) output += String.fromCharCode((c - 97 + key) % 26 + 97);  // Lowercase
    else                          output += input.charAt(i);  // Copy
  }
  return output;
}
