const print = require('./print')

test('should return first and last name when called corectly', () => {
  const result = print('John', 'Doe')
  expect(result).toBe('Name John Lastname Doe')
  expect(result).toMatch(/^Name John(.*).Doe/)
  expect(result).toMatchInlineSnapshot('"Name John Lastname Doe"')
})
