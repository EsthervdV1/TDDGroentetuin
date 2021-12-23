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

// describe("getTotalYield", () => {
//     test("Calculate total yield with multiple crops", () => {
//         const corn = {
//             name: "corn",
//             yield: 3,
//         };
//         const pumpkin = {
//             name: "pumpkin",
//             yield: 4,
//         };
//         const crops = [
//             { crop: corn, numCrops: 5 },
//             { crop: pumpkin, numCrops: 2 },
//         ];
//         expect(getTotalYield({ crops })).toBe(23);
//     });

//     test("Calculate total yield with 0 amount", () => {
//         const corn = {
//             name: "corn",
//             yield: 3,
//         };
//         const crops = [{ crop: corn, numCrops: 0 }];
//         expect(getTotalYield({ crops })).toBe(0);
//     });
// });

// TESTS WRIITEN BY ME

describe ("getCostsForCrop", () => {

    test ("Calculate the cost for a crop", () => {

        const corn = {
            name: "corn",
            price: 5
        };

        const input = {
            crop: corn,
            numCrops: 10
        };
    
        // expected output price*numcrops => 5*10 = 50
        
        expect(getCostsForCrop(input)).toBe(50);
    });    
});

describe("getRevenueForCrop", () => {
    const corn = {
        name: "corn",
        yield: 3,
        salePrice: 10
    };

    const input = {
        crop: corn,
        numCrops: 5
    };
    
    test ("Calculate the revenue for a crop without enviromental factors", () => {
        
        // expected output price*yield => (3*10)*5 = 150
        
        expect(getRevenueForCrop(input)).toBe(150);
    });
});

describe ("getProfitForCrop", () => {

    const corn = {
        name: "corn",
        price: 5,
        yield: 3,
        salePrice: 10
    };
    
    const input = {
        crop: corn,
        numCrops: 10
    };
    
    test("Calculate the profit for a crop without enviromental factors", () => {

        // expected output ((yield*salePrice)*numCrops)-(price*numCrops) => 
        // ((3*10)*10)-(5*10) = 250

        expect(getProfitForCrop(input)).toBe(250)
    })
});

describe ("getTotalProfit", () => {

    const corn = {
        name: "corn",
        yield: 3,
        price: 5,
        salePrice: 10,
    };
        
    const pumpkin = {
        name: "pumpkin",
        yield: 4,
        price: 2,
        salePrice: 5,
    };
        
    const crops = [
        {crop: corn, numCrops: 10},
        {crop: pumpkin, numCrops: 7},
    ];

    test("Caluculate total profit multiple crops without enviromental factors", () => {
                
        // expected output 
        //((yield*salePrice)*numCrops)-(price*numCrops)
        // corn: 250, pumpkin 126 => 250+126 = 376
                  
        expect(getTotalProfit({crops})).toBe(376)
    })
});


