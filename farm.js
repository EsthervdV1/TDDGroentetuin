
const getCostsForCrop = (input) => input.crop.price * input.numCrops;

const getRevenueForCrop = (input) => 
    (input.crop.salePrice * input.crop.yield)*input.numCrops;

const getProfitForCrop = (input) => {
    return getRevenueForCrop(input) - getCostsForCrop(input);
    
}

module.exports = {
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop
};