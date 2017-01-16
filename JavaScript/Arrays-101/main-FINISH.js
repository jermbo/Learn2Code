// Our array of Futurama Characters. Because Futurama is AWESOME!
var characters = ['Fry', 'Leela', 'Bender'];

// Add 'Professor' and 'Amy' to the end of the array.
// Log your results
characters.push('Professor', 'Amy');
console.log(characters);

// Remove the last character of the array.
// Log your results.
characters.pop();
console.log(characters);

// Remove 'Bender' and ' Professor' from the array
// Log you results
characters.splice(2, 2);
console.log(characters);

// Add 'Bender', 'Professor', and 'Zoidburg' into the array
// Log your results
characters.splice(2, 0, 'Bender', 'Professor', 'Zoidburg');
console.log(characters);

// Check to see if 'Fry' is in the current array
console.log(characters.includes('Fry'));
// Check to see if 'Amy' is in the current array
console.log(characters.includes('Amy'));

// What index is 'Leela' in the array?
console.log(characters.indexOf('Leela'));
// What index is 'Zoidburg' in the array?
console.log(characters.indexOf('Zoidburg'));

// Reduce the number if characters in the array by 3 and put them in their own variable
// Log the results
var reduced = characters.slice(1, 3)
console.log(reduced);

// Loop through each character and figure out their value and index position
// Log the results
characters.forEach(function(character, i) {
  console.log(character + ' is at index ' + i);
});

// Map through each character and add '~' to the beginning and end of the value
// Log the results
var specialChars = characters.map(function(character) {
  return '~' + character + '~';
});
console.log(specialChars);

// Filter though each character and get a list of characters that have more than six letters in their name
// Log the results
var larger = characters.filter(function(character) {
  return character.length > 6;
});
console.log(larger);