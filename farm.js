
const getYieldForPlant = (corn) => corn.yield

const getYieldForCrop = (input) => input.crop.yield * input.numCrops;

const getTotalYield = ({crops}) => {
    return crops.map(crop => getYieldForCrop(crop))
        .reduce((previous, current) => {
            return previous + current});
};

const getCostsForCrop = (input) => input.crop.price * input.numCrops;

const getRevenueForCrop = (input) => 
    (input.crop.salePrice * input.crop.yield)*input.numCrops;

const getProfitForCrop = (input) =>
    getRevenueForCrop(input) - getCostsForCrop(input);

const getTotalProfit = ({crops}) => {
    return crops.map(crop => getProfitForCrop(crop))
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