import Validator from '../validator';

const invalidNicknames = [
  ['1nickname'],
  ['-nickname'],
  ['_nickname'],
  ['nickname1'],
  ['nickname-'],
  ['nickname_'],
  ['nick7777name'],
  ['nick name'],
  [' nickname'],
  ['nickname '],
];

test.each(invalidNicknames)('Expect .validateNickname to return false with "%s"', (invalidNickname) => {
  expect(Validator.validateUsername(invalidNickname)).toBe(false);
});

test('Expect .validateNickname to return true with valid nickname', () => {
  expect(Validator.validateUsername('some_nick333-22name')).toBe(true);
});
