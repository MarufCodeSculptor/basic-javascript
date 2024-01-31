let string = 'amro Aporano jaha chay Atumi Stai tumiA tai go tumi sukh  o Ajodi nahi pawA jaw sukAher o AAsondhanAe jaw Aami tomare peyechi hridoy o majhe aro kichu nahi chai go';

let counSmall_a = 0;
let counCapital_A = 0;

for (let i = 0; i < string.length; i++){
    
    
    if (string[i] == 'a') {
        counSmall_a++;
        // console.log('the small letter', counSmall_a);
    }
    else if (string[i] == 'A') {
        counCapital_A++
        // console.log( 'THE CAPITAL LETER', counCapital_A);
    }
    

}

console.log('the small letter is',counSmall_a,'times');
console.log('the Capital letter is',counCapital_A,'times');