import assert from 'assert';
import { ValidationError } from '../src/error/validation.error';
import { validate } from '../src/validator';

describe('validator.ts', () => {
  describe('#validate', () => {
    it(`should throw ValidationError on input with special characters`, () => {
      assert.throws(() => validate('Tes!t123'), ValidationError);
    });

    it('shoud not throw error on alphanumeric string', () => {
      assert.doesNotThrow(() => validate('Test123'), Error);
    });
  });
});
