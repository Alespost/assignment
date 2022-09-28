export function process(input: string) {
  let result = '';

  const inputLength = input.length;
  for (let i = inputLength - 1; i >= 0; i--) {
    if (typeof input[i] === 'number') {
      result += input[i];
      continue;
    }

    const lowerCase = input[i].toLowerCase();

    result += input[i] !== lowerCase ? lowerCase : input[i].toUpperCase();
  }

  return result;
}
