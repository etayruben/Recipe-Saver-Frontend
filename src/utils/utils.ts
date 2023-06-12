function capitalizeWords(sentence: string): string {
    const words: string[] = sentence.split(" ");
    const capitalizedWords: string[] = words.map((word) => {
      const firstLetter = word.charAt(0).toUpperCase();
      const restOfWord = word.slice(1);  
      return firstLetter + restOfWord;
    });
    const capitalizedSentence: string = capitalizedWords.join(" ");
    return capitalizedSentence;
  }
  export default capitalizeWords