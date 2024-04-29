function fibonacciSequence(numTerms) {
  let sequence = [0, 1]; 
  for (let i = 2; i < numTerms; i++) {
    const nextTerm = sequence[i - 1] + sequence[i - 2];
    sequence.push(nextTerm);
  }

  return sequence;
}


console.log(fibonacciSequence(10)); 