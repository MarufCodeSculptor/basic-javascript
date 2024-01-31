const initMessage = '---------slice file is working--------';

console.log(initMessage.toUpperCase());


const sentence = 'once upon a time , there was a farmer in a village . the farmer had a goose who laid a egg every day . the eggs are golded eggs . every day the farmer sell the eggs in the market . the farmer become rich after some day the fermer think if i cut the belly of the goose i will get all the eggs at a time';
const perfectSentence = sentence.split(" ").join("").toUpperCase();

const slicedcharecters = perfectSentence.slice(15, 25).toLowerCase();;
// console.log(slicedcharecters);
 

const sentenceAboutMe = 'i m a good and hardworking person';
const newSentenceAboutMe = sentenceAboutMe.split(' ').join(",");
console.log(newSentenceAboutMe);
