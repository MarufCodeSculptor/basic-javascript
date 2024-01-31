
const vowels = ['a', 'e', 'i', 'o', 'u'];
const lowerStr = 'pqrstpqrstpqrstpqrstpqrst';
const myarray = [];
const isAvailable = vowels.every(vowel => lowerStr.includes(vowel));
if (isAvailable) {
    console.log('hey bro your text is fullly voweled');
}
else {
    console.log('sorry bro you text is not voweled');
}



   

  



