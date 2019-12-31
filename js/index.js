// Iteration 1: Names and Input

let hacker1 = 'Eduardo';
console.log(`The driver's name is ${hacker1}.`);
let hacker2 = 'Alejandro';
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(`The driver has longer name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops

console.log(hacker1.split("").join(" "));
console.log(hacker1.split("").reverse().join(""));

// We are going to use localeCompare in order to compare the lexicographic order.

if (hacker1.localeCompare(hacker2) > 0) {
  console.log(`The driver's name goes first.`);
} else if (hacker1.localeCompare(hacker2) < 0) {
  console.log(`The navigator goes first definitely.`);
} else {
  console.log(`What?! You both have the same name?`);
}

// Bonus 1: number of words in the text and count how many times a word is repeated.

let text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Proin ut consequat justo. Cras non ligula tincidunt, venenatis metus eu, sodales felis. 
Quisque feugiat velit quam, at dignissim nulla mollis ac. Curabitur quam dui, laoreet vel nibh vel, 
rutrum iaculis metus. Integer varius orci id mi pharetra tincidunt. 
Pellentesque in tellus id nulla rutrum pharetra. Sed dapibus nisl neque, eu tincidunt ligula pulvinar ac. 
Cras congue sapien in lectus luctus, in vehicula tellus porttitor. 
Suspendisse pellentesque non nisi ut pretium. Aliquam tristique velit vestibulum, 
consectetur mi ultricies, faucibus dui. Nam sagittis dolor purus, 
vestibulum bibendum risus faucibus pharetra. Donec lacinia ex lectus. 
Duis nunc ligula, bibendum vel imperdiet vel, rutrum ac magna. Maecenas non hendrerit erat. 
Integer tincidunt, nunc id lacinia consectetur, nisi quam vehicula orci, sed fringilla arcu lorem quis ex. 
Maecenas suscipit ut sem vel placerat. Praesent velit elit, efficitur ut rhoncus at, scelerisque a sapien. 
In ultricies aliquam erat nec accumsan. Ut viverra enim eget enim egestas mollis. 
Vivamus magna odio, accumsan ut augue sed, tristique venenatis est. Integer sollicitudin, 
felis et pretium scelerisque, nunc justo pretium ipsum, vitae euismod ligula augue sed velit. 
Donec imperdiet mi ut ante imperdiet, id accumsan urna consectetur. 
Nulla aliquam magna justo, sollicitudin tempor erat aliquam nec. Fusce at luctus diam. 
Quisque eleifend diam sed libero luctus viverra. Donec fringilla posuere orci quis tristique. 
Phasellus vel ornare ante. Donec vitae tellus eleifend, convallis diam sit amet, tincidunt tortor. 
Suspendisse viverra augue in gravida rutrum. Quisque eleifend ante faucibus ultricies elementum. 
Nam laoreet semper nunc, in rhoncus magna venenatis id. Curabitur nec nulla interdum, laoreet quam eget, 
lobortis mauris. Quisque vitae mi a erat ultricies luctus. Integer metus tortor, 
pharetra at varius sit amet, pellentesque ut est. Phasellus ut elementum nulla, a placerat sem. 
In in scelerisque nunc. Donec interdum dolor quis sapien ultricies auctor. Maecenas a congue odio.`


console.log(text.split(" ").length);
console.log(text.split(" ").filter(word => word === "et" || word === "et," || word === "et.").length);


// Bonus 2: We are going to discover if a phrase is a palindrome or not.

let phraseToCheck = "A man, a plan, a canal, Panama!";
let letters = /^[A-Za-z]+$/;
let phraseArr = phraseToCheck.split("");
let normalString = phraseArr.filter(element => element.match(letters)).join("").toLowerCase();
let reverseString = phraseArr.filter(element => element.match(letters)).reverse().join("").toLowerCase();

if (normalString === reverseString) {
  console.log(`This is a palindrome.`);
} else {
  console.log(`This isn't a palindrome.`);
}
