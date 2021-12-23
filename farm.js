const corn = {
    name: "corn",
    yield: 30,
    factor: {
        sun: {
        low: -50,
        medium: 0,
        high: 50,
        },
    },
    };

// const environmentFactors = {
//     sun: "low",
//     };

const getCostsForCrop = (input) => {
    return input.price*input.numCrops;
};

module.exports = {
    getCostsForCrop,
    // getRevenueForCrop,
    // getProfitForCrop
}