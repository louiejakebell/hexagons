const toLowercaseWithoutUnderscore = string =>
  string.toLowerCase().replace('_', ' ');

module.exports = toLowercaseWithoutUnderscore;
