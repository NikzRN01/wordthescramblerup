/**
 * Shuffles the letters of a word until it's different from the original
 */
export const shuffleWord = (word: string): string => {
  if (word.length <= 1) return word;
  
  let shuffled = word;
  
  // Keep shuffling until we get a different arrangement
  while (shuffled === word) {
    const array = shuffled.split('');
    
    // Fisher-Yates shuffle algorithm
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    
    shuffled = array.join('');
  }
  
  return shuffled;
};