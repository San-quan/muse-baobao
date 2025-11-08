const { isValidIPv4 } = require('../src/utils.js');

describe('Utils', () => {
  test('isValidIPv4 should validate correct IPv4 addresses', () => {
    expect(isValidIPv4('192.168.1.1')).toBe(true);
    expect(isValidIPv4('10.0.0.1')).toBe(true);
    expect(isValidIPv4('255.255.255.255')).toBe(true);
  });

  test('isValidIPv4 should reject invalid IPv4 addresses', () => {
    expect(isValidIPv4('192.168.1.256')).toBe(false);
    expect(isValidIPv4('192.168.1')).toBe(false);
    expect(isValidIPv4('192.168.1.1.1')).toBe(false);
    expect(isValidIPv4('invalid')).toBe(false);
  });
});
