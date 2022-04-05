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

function fizzBuzz(number){
  const fizzBuzzArr = [];
  for (let i = 1;i < number;i++){
    if (i % 5 === 0 && i % 3 === 0){
      fizzBuzzArr.push('FizzBuzz');
    } else if (i % 5 === 0){
      fizzBuzzArr.push('Buzz');
    } else if (i % 3 === 0){
      fizzBuzzArr.push('Fizz');
    } else {
      fizzBuzzArr.push(i);
    }
  }

  return fizzBuzzArr;
}

console.log(fizzBuzz(16));
console.log(fizzBuzz(55));

function anagrams(word1, word2){
  const word1Arr = word1.split('').sort().join('');
  const word2Arr = word2.split('').sort().join('');
  
  return (word1Arr === word2Arr) ? true : false;

}

console.log(`|| anagrams('pizza', 'fries') >`, anagrams('pizza', 'fries'));
console.log(`|| anagrams('superintended', 'unpredestined') >`, anagrams('superintended', 'unpredestined'));

function uniqueString(string){
  // const stringSet = new Set(string);
  // const unique = [...stringSet];
  // return unique;
  const orderedUniqueLetters = string.map(s => [...new Set(s)].sort());
  const duplicates = [...new Set(...orderedUniqueLetters)];

  return string.find(s => {
    return duplicates.indexOf(s[0]) === -1;
  });
}

console.log(`|| uniqueString([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) >`, uniqueString(['Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a']));
console.log(`|| uniqueString([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) >`, uniqueString(['abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba']));

function uniqueChar(string) {
  const char = string.split('').sort();

  for (let i = 0; i < char.length; i++) {
    const current = char[i];
    const prev = char[i - 1];
    const next = char[i + 1];
    if (current !== prev && current !== next){
      
    }
  }
}
