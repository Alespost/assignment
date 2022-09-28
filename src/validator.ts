export function validate(input: string) {
  const regex = new RegExp('^[a-z0-9]+$', 'i');

  if (!regex.test(input)) {
    throw 'Input must contain only alphanumeric characters.';
  }
}
