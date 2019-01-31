const addValueIfTimeUnique = (entry, array) => {
  return array.filter(element => element.date !== entry.date).concat(entry);
};

module.exports = addValueIfTimeUnique;
