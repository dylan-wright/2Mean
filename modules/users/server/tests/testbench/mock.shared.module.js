module.exports = function(logger) {
  return {
    authHelpers: (function(logger) {
      return {
        hashPassword: function hashPassword(clearText) {

        },
        verifyPassword: function verifyPassword(hash, clear) {

        }
      }
    })(logger)
  }
};