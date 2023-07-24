function add(n1: number, n2: number, showResult, phrase: string): number {
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  }
  return result;
}
