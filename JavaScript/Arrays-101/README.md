# Arrays in JavaScript

Arrays are a basic cornerstone in any programming language. Today we will learn what arrays are and how you can work with them in JavaScript.

### Topics Discussed
* Array Definition
* Array Properties
* Array Methods
	- Mutators
		+ push
		+ pop
		+ splice
	- Accessors
		+ includes
		+ indexOf
		+ slice
	- Iterators
		+ forEach
		+ map
		+ filter

## Array Definition

"Arrays are list-like objects whose prototype has methods to preform traversal and mutation operations." [source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Description)

Arrays allow you to organize a set of data in a single variable rather than multiple individual variables. For example, let list a set of characters of your favorite t.v. show and give them a unique variable.

```javascript
	var name1 = 'Fry';
	var name2 = 'Leela';
	var name3 = 'Bender';
```

Managing each variable with their generic name is going to get out of hand. This information is related, but at a glance it does not seem that way. What if, instead, we put that in an array.

```javascript
	var characters = ['Fry', 'Leela', 'Bender']
```

If you want to access an individual element of an array you access its 'index'. Arrays are unique in the way that you count, arrays start at 0 and go up. So to get to Fry in the example above, you access '0' via the square brackets. 

```javascript
	console.log(characters[0]); // Fry
```

## Array Properties

One of the most common, if not the most common, property of an array is its length. When you want to know how many items are in an array you use the dot notation to access its property. _This is especially handy when you want to use a for loop._ [More Info](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Properties_2)

```javascript
	console.log( characters.length ); // 3
```

## Array Methods

All Array instances inherit from Array.prototype. The prototype object of the Array constructor can be modified to affect all Array instances.

### Mutator Methods

Mutator methods take an array and modify it in specific ways. There are a ton of mutator methods, but we will only be focusing on a few today. [More Info](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Mutator_methods)

##### Push

Push adds one or more elements to the array and returns the new length of the array. [More Info](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

Let's say our list of characters is incomplete and we want to add 2 more characters. 
```javascript
	characters.push('Professor', 'Amy');
```

Push accepts one or more values. You separate the values with commas. Each item that is separate by the comma will be added as new value to the end of the array.

##### Pop

This method removes one element from the end of the array. [More Info](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) In our example we now should have `['Fry', 'Leela', 'Bender', 'Professor', 'Amy']` in our array. Let's say we want to remove Amy.

```javascript
	characters.pop();
```

##### Splice

Splice changes the array content by adding new elements in a specific position or removing elements at a specific position and length. [More Info](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

For example, we want to get rid of "Bender" and "Professor". We need to use the splice method and pass in 2 arguments. First is what Index to start with, and the second is how many we want to remove.

```javascript
	characters.splice(2, 2);
```

This is stating; "Start at the second index, and remove two values".

On the flip side, let's add those characters back with another cast member.

```javascript
	characters.splice(2, 0, 'Bender', 'Professor', 'Zoidburg');
```

This will result in the array being `['Fry', 'Leela', 'Bender', 'Professor', 'Zoidburg']` The first parameter is the start index, then the second parameter is the delete count ( in this case we don't want to delete anything ), and the rest are the values we want added to the array. And Just like the push method, each item separated by the comma will be a value in the array.

### Accessor Methods

Accessor methods return a representation of the array based on tests specified. _**Note :** These do not modify the original array._ [More Info](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Accessor_methods)

##### Includes

Includes simply determines whether an array has a certain element or not, it will return a true or false where appropriate. [More Info](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

```javascript
	// characters array currently looks like 
	// ['Fry', 'Leela', 'Bender', 'Professor', 'Zoidburg']
	characters.includes('Fry'); // true
	characters.includes('Amy'); // false
```

##### IndexOf

If you need something more specific information, like what index a given value is at, IndexOf is perfect. [More Info](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) IndexOf returns the first index ad which a given element can be found, if nothing is found a `-1` will be returned.

```javascript
	// characters array currently looks like 
	// ['Fry', 'Leela', 'Bender', 'Professor', 'Zoidburg']
	characters.indexOf('Leela'); // 1
	characters.indexOf('Zoidburg'); // 4
```

##### Slice

Slice returns a shallow copy of a portion of an array. [More Info](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) This method accepts 2 optional parameters, begin index and end index. If no begin index is provided, it starts at zero. If no end index is provided, it will go to the end of the array.

```javascript
	// characters array currently looks like 
	// ['Fry', 'Leela', 'Bender', 'Professor', 'Zoidburg']
	var reduced = characters.slice(1, 3);
	console.log(reduced) // ["Leela", "Bender"]
```

### Iterator Methods

An easy explanation of these methods are simply iterate over an array. This iteration accepts a callback function, and if the element satisfies the provided test, return the current index value and create a new array. [More Info](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Iteration_methods)

##### ForEach

ForEach executes a provided function once for each element. [More Info](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) Let's say you want to know what element is in each index and what the corresponding index is for current element.

```javascript
	
```

##### Map

Map creates a new array with the results of calling a provided function on every item. [More Info](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) Say you want to add special text characters around each element in the array. The result being `['~Fry~', '~Leela~',...]`;

```javascript
	var specialChars = characters.map(function(character){
		return '~' + character + '~';
	});
	console.log(specialChars); // ["~Fry~", "~Leela~", "~Bender~", "~Professor~", "~Zoidburg~"]
```

##### Filter

Filter creates a new array will all the elements that pass the test implemented by the provided function. [More Info](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) Let's say you want to know all the characters whos name is longer than 6 characters. 

```javascript
	var larger = characters.filter(function(character) {
	  return character.length > 6;
	});
	console.log(larger); // ["Professor", "Zoidburg"]
```

