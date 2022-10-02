import assert from 'assert';
import { process } from '../src/processor';

describe('proccessor.ts', () => {
  describe('#process', () => {
    it('should return reversed string with opposite case', () => {
      assert.equal(process('abCD12'), '21dcBA');
    });
  });
});
