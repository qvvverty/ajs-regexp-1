export default class Validator {
  static validateUsername(username) {
    if (/^[^\d\s-_][-\w]+[^\d\s-_]$/.test(username) && !/\d{4,}/.test(username)) {
      return true;
    }
    return false;
  }
}
