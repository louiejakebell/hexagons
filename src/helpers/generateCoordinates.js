const generateCoordinates = (progress, transformed) => {
  progress.forEach(element => {
    transformed.push({ x: element.date, y: element.weight });
  });

  return transformed;
};

module.exports = generateCoordinates;
