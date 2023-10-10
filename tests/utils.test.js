const { formatBirdFromApi } = require("../utils");

describe("formatBirdFromApi", () => {
  test("should return a formatted object", () => {
    expect(
      formatBirdFromApi({
        images: [Array],
        lengthMin: "30",
        lengthMax: "36",
        name: "Rock Pigeon",
        wingspanMin: "50",
        id: 77,
        wingspanMax: "67",
        sciName: "Columba livia",
        region: ["North America", "Western Europe"],
        family: "Columbidae",
        order: "Columbiformes",
        status: "Low Concern",
      })
    ).toEqual({
      name: "Rock Pigeon",
      id: 77,
      sciName: "Columba livia",
      family: "Columbidae",
      region: ["North America", "Western Europe"],
    });
  });
});
