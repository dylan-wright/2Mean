/**
 * Helpers for auth mechanisms
 */

// password hasher
const argon2 = require('argon2');

let AuthHelpers = function () {
  /**
   * hashes the plaintext password
   * @param {String} clearText
   * @returns {Promise}
   */
  function hashPassword(clearText) {
    return argon2.generateSalt().then((salt) => {
      return argon2.hash(clearText, salt);
    });
  }

  /**
   * verifies the plaintext password is valid
   * @param {String} hash
   * @param {String} plainText
   * @returns {Promise}
   * argon2.verify returns a promise like object. Wrapping it in a real
   * promise will prevent some weirdness in testing
   */
  function verifyPassword(hash, plainText) {
    return new Promise((resolve, reject) => {
      argon2.verify(hash, plainText).then((match) => {
        resolve(match);
      }).catch((error) => {
        reject(error);
      });
    });
  }

  return {
    hashPassword: hashPassword,
    verifyPassword: verifyPassword
  }
}

module.exports = AuthHelpers;
