/**
 * Direction:
 * Find maximum number of words from given sentences. => var that return max
 *
 * Expected:
 * 23
 */
const sentences = [
  'Mauris ultricies sed sapien eget malesuada. Suspendisse et aliquet odio, id ultrices erat. Praesent vehicula erat nulla. Aliquam a lorem urna. Donec.',
  // 22
  'Duis at tellus et ex bibendum pellentesque sed in nibh. Sed aliquet, diam id mollis facilisis, massa metus accumsan elit, at mattis magna.',
  // 23
  'Sed non nibh quam. Pellentesque eget ultrices diam. Aliquam diam justo, consectetur ac dui lobortis, vestibulum bibendum lorem. Sed porta pulvinar.',
  // 21
];

/**
 * Input = sentences
 * Output = var maximum
 * Problem = there is . and ,
 * Pseudo Process = 
 * 
 * Create var for maximum
 * for loop to detect every items in sentences
 * dealing with , and .
 * splitting the sentence to word
 * counting the words
 * comparing the count to maximum value
 * Return maximum value (variable)
 */

function result(sentences) {
  // your code here
  let max = 0;
  
  for(let sentence of sentences){
    // dealing with , and .
    let cleanSentence = sentence.replace(/[,.]/g,'');
    // split
    let split = cleanSentence.split(' ');
    // counting
    let countWords = split.length;
    
    if(countWords > max){
        max = countWords;
    }
  }
  return max;
}

console.log(result(sentences));
