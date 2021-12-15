const { 
    getYieldForPlant, 
    getYieldForCrop, 
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop

} = require("./farm");

// DO NOT ADJUST THESE TESTS

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

test ("Calculate the cost for a crop", () => {
    const cropAmount = 1;
    const cropPrice = 5;
    
    expect(getCostsForCrop(cropPrice,cropAmount)).toBe(5);
});

test ("Calculate revenue for a crop without enviromental factors", () => {
    const saleAmount = 1;
    const salePrice = 10;

    expect(getRevenueForCrop(saleAmount, salePrice)).toBe(10);
});

test("Calculate profit per crop without enviromental factors", () => { 
    expect(getProfitForCrop(getRevenueForCrop, getCostsForCrop)).toBe(5);

})