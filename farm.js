// eFactor = enviroment Factor

const calculateFactorSun = (plant, eFactor) => {
  if (eFactor.sun === "low") {
    factorSun = plant.factor.sun.low
}
  else if (eFactor.sun === "medium") {
    factorSun = plant.factor.sun.medium
}
  else if (eFactor.sun === "high") {
    factorSun = plant.factor.sun.high
}
return (plant.yield * factorSun) / 100;
};

const checkFactorWind = (plant, eFactor) => {
  if (eFactor.wind === "low") {
    factorWind = plant.factor.wind.low
}
  else if (eFactor.wind === "medium") {
    factorWind = plant.factor.wind.medium
}
  else if (eFactor.wind === "high") {
    factorWind = plant.factor.wind.high
}

return ((plant.yield * factorWind) / 100);
};

const getYieldForPlant = (plant, eFactor) => {

  if (!eFactor) {
    return plant.yield;
  }
  else if (eFactor.sun && eFactor.wind) {
    return calculateFactorSun(plant, eFactor) + checkFactorWind(plant, eFactor) + plant.yield;
  }
  else if (eFactor.wind) {
    return checkFactorWind(plant, eFactor) + plant.yield;
  }
  else if (eFactor.sun) {
    return calculateFactorSun(plant, eFactor) + plant.yield;
  };
};

const getYieldForCrop = (input, eFactor) => {
    if (!eFactor || input.numCrops === 0) {
        return input.numCrops * input.crop.yield;
    }
    return input.numCrops * getYieldForPlant(input.crop, eFactor);
}

const getTotalYield = ({crops}, eFactor) => {
    const yieldArray = crops.map(i => getYieldForCrop(i, eFactor))
      .reduce((previous, current) => {
        return previous + current;
      });

    return yieldArray;
};

const getCostsForCrop = (input) => input.crop.price * input.numCrops;

const getRevenueForCrop = (input, environmentFactors) => {

  return (getYieldForCrop(input, environmentFactors) * input.crop.salePrice)/input.crop.yield;
};

const getProfitForCrop = (input, eFactor) =>
getRevenueForCrop(input, eFactor) - getCostsForCrop(input);

const getTotalProfit = ({crops}, eFactor) => {
    return crops.map(crop => getProfitForCrop(crop, eFactor))
        .reduce((previous,current) => {
            return previous + current;
    });
};

module.exports = {
  getYieldForPlant,
  getYieldForCrop,
  getTotalYield,
  getCostsForCrop,
  getRevenueForCrop,
  getProfitForCrop,
  getTotalProfit
};
