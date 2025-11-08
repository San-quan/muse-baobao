const { isValidIPv4, greet } = require('../src/utils')

describe('utils', () => {
  describe('isValidIPv4', () => {
    test('valid IPv4 addresses', () => {
      expect(isValidIPv4('192.168.0.1')).toBe(true)
      expect(isValidIPv4('0.0.0.0')).toBe(true)
      expect(isValidIPv4('255.255.255.255')).toBe(true)
      expect(isValidIPv4('1.2.3.4')).toBe(true)
    })

    test('invalid IPv4 addresses', () => {
      expect(isValidIPv4('256.0.0.1')).toBe(false)
      expect(isValidIPv4('192.168.0')).toBe(false)
      expect(isValidIPv4('192.168.0.1.1')).toBe(false)
      expect(isValidIPv4('abc.def.ghi.jkl')).toBe(false)
      expect(isValidIPv4('01.02.03.04')).toBe(false) // 因为我们要求纯数字且不接受前导零组合
      expect(isValidIPv4('')).toBe(false)
      expect(isValidIPv4(null)).toBe(false)
      expect(isValidIPv4(undefined)).toBe(false)
    })
  })

  describe('greet', () => {
    test('returns greeting with provided name', () => {
      expect(greet('Alice')).toBe('Hello, Alice! This repo integrates with Starlink.')
    })

    test('defaults to world', () => {
      expect(greet()).toBe('Hello, world! This repo integrates with Starlink.')
    })
  })
})
