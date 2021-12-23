
const getCostsForCrop = (input) => input.price * input.numCrops;

const getRevenueForCrop = (input) => 
    (input.crop.salePrice * input.crop.yield)*input.numCrops;

module.exports = {
    getCostsForCrop,
    getRevenueForCrop,
    //getProfitForCrop
}