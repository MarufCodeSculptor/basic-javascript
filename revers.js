// console.log('revers file is working');
const something = 'are bhai re bhai ke tumi';

const somethingArray = something.split("");
let reverseArray = [];
for (let array_single_item of somethingArray) {
    // console.log(array_single_item);
    reverseArray.unshift(array_single_item);
}
// console.log(somethingArray);
// console.log(reverseArray.join(" "));

let reversedWordIs = '';
for (const charecter of something) {
    // console.log(charecter);
    reversedWordIs = charecter + reversedWordIs;
    // console.log(reversedWordIs);
}
// console.log(reversedWordIs);
const myObject = { "key":"value"}
const my_sentence = 'ami jare bashi bhalo kajoler cheye o kalo hoyna je tar tulona etoje nithur bondhu jana chilona go dilon dilona nilo mon dilona etoje nithur bondhu jana chilona go';
const revered_my_array = my_sentence.split("").reverse().join("");
myObject.key = revered_my_array;
console.log(myObject.key);


