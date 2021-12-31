const {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit
  } = require("./farm");
  
  // DO NOT CHANGE THESE TEST, GIVEN BY WINC ACADEMY
  
  describe("getYieldForPlant", () => {
    const corn = {
      name: "corn",
      yield: 30,
    };
  
    test("Get yield for plant with no environment factors", () => {
      expect(getYieldForPlant(corn)).toBe(30);
    });
  });
  
  describe("getYieldForCrop", () => {
    test("Get yield for crop, simple", () => {
      const corn = {
        name: "corn",
        yield: 3,
      };
      const input = {
        crop: corn,
        numCrops: 10,
      };
      expect(getYieldForCrop(input)).toBe(30);
    });
  });
  
  describe("getTotalYield", () => {
    test("Calculate total yield with multiple crops", () => {
      const corn = {
        name: "corn",
        yield: 3,
      };
      const pumpkin = {
        name: "pumpkin",
        yield: 4,
      };
      const crops = [
        { crop: corn, numCrops: 5 },
        { crop: pumpkin, numCrops: 2 },
      ];
      expect(getTotalYield({ crops })).toBe(23);
    });
  
    test("Calculate total yield with 0 amount", () => {
      const corn = {
        name: "corn",
        yield: 3,
      };
      const crops = [{ crop: corn, numCrops: 0 }];
      expect(getTotalYield({ crops })).toBe(0);
    });
  });
  
  // TESTS WRIITEN BY ME
  
  const corn = {
    name: "corn",
    yield: 30,
    price: 10,
    salePrice: 15,
    factor: {
      sun: {
        low: -50,
        medium: 0,
        high: 50,
      },
    },
  };
  
  const potato = {
    name: "potato",
    yield: 10,
    price: 15,
    salePrice: 20,
    factor: {
      sun: {
        low: -10,
        medium: 0,
        high: 5,
      },
      wind: {
        low: 10,
        medium: 20,
        high: 30,
      },
    },
  };
  
  const avocado = {
    name: "avocado",
    yield: 15,
    price: 20,
    salePrice: 25,
    factor: {
      sun: {
        low: 5,
        medium: 10,
        high: 15,
      },
      wind: {
        low: 2,
        medium: 4,
        high: 6,
      },
    },
  };
  
  describe("getYieldForPlant", () => {
    test("Get Yield for plant corn with sun = low", () => {
      const eFactor = {
        sun: "low",
      };
  
      expect(getYieldForPlant(corn, eFactor)).toBe(15);
    });
  
    test("Get Yield for plant potato with wind = high", () => {
      const eFactor = {
        wind: "high",
      };
  
      expect(getYieldForPlant(potato, eFactor)).toBe(13);
    });
  
    test("Get Yield for plant avocado with sun = medium en wind = high", () => {
      const eFactor = {
        sun: "medium",
        wind: "high",
      };
  
      expect(getYieldForPlant(avocado, eFactor)).toBe(17.4);
    });
  });
  
  describe("getYieldForCrop", () => {
    test("get Yield for crop with environment factors for corn with sun = low", () => {
      const input = {
        crop: corn,
        numCrops: 10,
      };
  
      const eFactor = {
        sun: "low",
      };
  
      expect(getYieldForCrop(input, eFactor)).toBe(150);
    });
  
    test("get Yield for crop with environment factors for avocado with sun = medium and wind = high", () => {
      const input = {
        crop: avocado,
        numCrops: 10,
      };
  
      const eFactor = {
        sun: "medium",
        wind: "high",
      };
  
      expect(getYieldForCrop(input, eFactor)).toBe(174);
    });
  });
  
  describe("getTotalYield", () => {
    test("Calculate total yield with multiple crops and no enviroment factor", () => {
      const crops = [
        { crop: corn, numCrops: 5 },
        { crop: avocado, numCrops: 2 },
      ];
  
      expect(getTotalYield({ crops })).toBe(180);
  });
  
    test("Calculate total yield with multiple crops and 1 enviroment factor", () => {
      const crops = [
        { crop: corn, numCrops: 5 },
        { crop: avocado, numCrops: 2 },
      ];
  
      const eFactor = {
        sun: "high",
      };
  
      expect(getTotalYield({ crops }, eFactor)).toBe(259.5);
    });
  });
  
  describe("getCostsForCrop", () => {
    test("Calculate the cost for a crop", () => {
      const input = {
        crop: corn,
        numCrops: 10,
      };
  
      expect(getCostsForCrop(input)).toBe(100);
    });
  });
  
  describe("getRevenueForCrop", () => {
    test("Calculate the revenue for a crop corn with no enviroment factors", () => {
      const input = {
        crop: corn,
        numCrops: 5,
      };
  
      expect(getRevenueForCrop(input)).toBe(75);
    });
    test("Calculate the revenue for a crop corn with sun = low", () => {
      const input = {
        crop: corn,
        numCrops: 8,
      };
  
      const eFactor = {
        sun: "low",
      };
      expect(getRevenueForCrop(input, eFactor)).toBe(60);
    });
  
    test("Calculate the revenue for a crop avocado with sun = low and wind = medium", () => {
      const input = {
        crop: avocado,
        numCrops: 5,
      };
  
      const eFactor = {
        sun: "low",
        wind: "medium",
      };
  
      expect(getRevenueForCrop(input, eFactor)).toBe(136.25);
    });
  });
  
  describe("getProfitForCrop", () => {
    test("Calculate the profit for a crop without enviromental factors", () => {
      const input = {
        crop: corn,
        numCrops: 10,
      };
  
      expect(getProfitForCrop(input)).toBe(50);
    });
  
    test("Calculate the profit for a crop potato with sun = high", () => {
      const input = {
        crop: potato,
        numCrops: 10,
      };
  
      const eFactor = {
        sun: "high",
      };
  
      expect(getProfitForCrop(input, eFactor)).toBe(60);
    });
  
    test("Calculate the profit for a crop avocado with sun = low and wind = medium", () => {
      const input = {
        crop: avocado,
        numCrops: 10,
      };
  
      const eFactor = {
        sun: "low",
        wind: "high"
      };
  
      expect(getProfitForCrop(input, eFactor)).toBe(77.5);
    });
  });
  
  describe ("getTotalProfit", () => {
  
      const crops = [
          {crop: corn, numCrops: 10},
          {crop: potato, numCrops: 7},
      ];
  
      test("Caluculate total profit multiple crops without enviromental factors", () => {
  
          expect(getTotalProfit({crops})).toBe(85)
      })
  
      test("Caluculate total profit multiple crops with sun = high", () => {
  
        const eFactor = {
          sun : "high"
        };
  
        expect(getTotalProfit({crops}, eFactor)).toBe(167)
    })
  });
  