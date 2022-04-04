
  const sentence = 'This is a sentence made of words.';
function reverseSentenceWords(sentence){

  const words = sentence.split(' ')
    .map(word => {
      return word.split('')
        .reverse()
        .join('');
    });
  const newSentence = words.join(' ');

  return newSentence;
}
console.log(`|| reverseSentenceWords(sentence) >`, reverseSentenceWords(sentence));

function titleCase(sentence){

  return sentence
    .split(' ')
    .map(word => {
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(' ');
}

console.log('|| titleCase(sentence) >', titleCase(sentence));

function oddishEvenish(number) {
  const splitNum = number
    .toString()
    .split('')
    .map(num => +num)
    .reduce((sum, current) => sum + current);
  
  return splitNum % 2 ? 'Oddish' : 'Evenish';
}

console.log(`|| oddishEvenish(13013) >`, oddishEvenish(13013));
console.log(`|| oddishEvenish(911) >`, oddishEvenish(911));

function at(input, index){

  return index > -1 ? input[index] : input[input.length + index];
}

console.log(at([1, 2, 3, 4, 5, 6, 7], 3));
console.log(at([1, 2, 3, 4, 5, 6, 7], -5));
