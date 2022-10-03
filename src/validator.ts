import { ValidationError } from './errors/validation.error';

export function validate(input: string) {
  const regex = new RegExp('^[a-z0-9]+$', 'i');

  if (!regex.test(input)) {
    throw new ValidationError(
      'Input must contain only alphanumeric characters.'
    );
  }
}
