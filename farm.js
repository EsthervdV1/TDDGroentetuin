
const getCostsForCrop = (cropPrize, cropAmount) => {
    return cropPrize * cropAmount;
};

const getRevenueForCrop = (salePrice, saleAmount) => {
    return salePrice * saleAmount;
};

const getProfitForCrop = (getRevenueForCrop, getCostsForCrop) => {
    return getRevenueForCrop() - getCostsForCrop ();
};



module.exports = {
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop
}