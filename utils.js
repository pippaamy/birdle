const formatBirdFromApi = ({ name, id, sciName, family, region }) => {
  return { name, id, sciName, family, region };
};

const formatBirdName = (birdName) => {};

module.exports = { formatBirdFromApi, formatBirdName };
