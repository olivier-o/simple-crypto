import {expect} from 'chai'
import {encode, decode} from '../src/index'

describe('simple-crypto', () => {
  describe ('encode', () => {
    it('encodes a number that is in the expected range', () => {
      let nb = 0;
      let encoded = '4000';
      expect(encode(nb)).to.equal(encoded)
    })

    it('fails to encodes a value that is not a number', () => {
      let nb = "not-a-number";
      expect(() => {encode(nb)}).to.throw()
    })

    it('fails to encodes a number that is outside the expected range', () => {
      let nb = -8193;
      expect(() => {encode(nb)}).to.throw()
    })
  })

  describe ('decode', () => {
    it('decodes an encoded number that is in the expected range', () => {
      let encoded = '4000'
      let decoded = 0;
      expect(decode(encoded)).to.equal(decoded)
    })

    it('fails to decodes a value that is outside the expected range', () => {
      let encoded = '0';
      expect(() => {decode(encoded)}).to.throw();
    })
  })
})
