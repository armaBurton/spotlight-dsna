function reverseSentenceWords(){
  const sentence = 'This is a sentence made of words.';

  const words = sentence.split(' ')
    .map(word => {
      return word.split('')
        .reverse()
        .join('');
    });
  const newSentence = words.join(' ');

  console.log(`|| newSentence >`, newSentence);
  return newSentence;
}

reverseSentenceWords();
