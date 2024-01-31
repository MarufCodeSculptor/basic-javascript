

// const school = 'choto merung bazar govt. primary school';
// const subject = 'Chemistry';
// const subject2 = 'chemistry';
// // console.log(subject, subject2);
// if (subject.toUpperCase() === subject2.toUpperCase()) {
//     console.log('the condition is worked');
// }
// else {
//     console.log('the condition in not work');
// }


// const drink = 'water';
// const drink2 = '    water   ';
// // console.log('drink-1:-',drink, 'drink-2:-',drink2);;

// let originalString = "  Hello,   World!  ";
// let stringWithoutSpaces = originalString.split(" ").join("");
// console.log(stringWithoutSpaces);

// let string = "Hello ,      worlds     ";
// let updatedString = string.split(" ").join('').toUpperCase();
// console.log(updatedString);
// console.log(string);



let song = 'amaro porano jaha chay tumi tai tumi tai go tumi sukh o jodi nahi paw jaw sukher o sondhane jaw ami tomare peyechi hridoy o majhe aro kichu nahi chai go ';
let songWithoutBlankSpace = song.split(" ").join('').toUpperCase();
// console.log(songWithoutBlankSpace);
// we can chech the specific work is availabe or not 

// like this 


const specificWord = 'tumi tai tumi tai go ';
const isAvailable = song.split(" ").join("").toUpperCase().includes(specificWord.split(" ").join("").toUpperCase());
// console.log( 'your text is availabe in the song text', isAvailable);


const word = `'  jhanker   '`;
console.log(word);
const wordWithoutWhiteSpace = word.split(" ").join('');

console.log(wordWithoutWhiteSpace);