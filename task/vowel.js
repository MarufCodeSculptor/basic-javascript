const string = 'abckd;lakdsjfa;ldsjkfaplks;fja;lskdfja;lksdkjfa;lskdfjaeiou';
const vowels = ['a', 'e', 'i', 'o', 'u'];
const isAvailabe = vowels.every(vowel => string.includes(vowel));
if (isAvailabe) {
  console.log(`your text ||${string}|| is fully  voweled`);
}
else {
  console.log(`sorry your text ||${string}|| is not voweled`);
}



   



    

