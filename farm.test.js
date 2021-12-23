const { 
    getYieldForPlant, 
    getYieldForCrop, 
    getTotalYield,
    getCostsForCrop,
    // getRevenueForCrop,
    // getProfitForCrop

} = require("./farm");

// TESTS WRIITEN BY ME

describe ("getCostsForCrop", () => {

    test ("Calculate the cost for a crop", () => {
        const corn = {
            name: "corn",
        };
        const input = {
            crop: corn,
            numCrops: 10,
            price: 50
        };
    
        // expected output price*numcrops => 50*10 = 500
        
        expect(getCostsForCrop(input)).toBe(500);
    });
    // Dubble check to see if it works with different parameters

    test ("Calculate the cost for a crop. Dubble check", () => {
        const potato = {
            name: "potato",
        };
        const input = {
            crop: potato,
            numCrops: 25,
            price: 4
        };
    
        // expected output price*numcrops => 25*4 = 100
        
        expect(getCostsForCrop(input)).toBe(100);
    });
    
});



// test ("Calculate revenue for a crop without enviromental factors", () => {
//     const saleAmount = 1;
//     const salePrice = 10;

//     expect(getRevenueForCrop()).toBe(10);
// });



// DO NOT ADJUST THESE TESTS

// describe("getYieldForPlant", () => {
//     const corn = {
//         name: "corn",
//         yield: 30,
//     };

//     test("Get yield for plant with no environment factors", () => {
//         expect(getYieldForPlant(corn)).toBe(30);
//     });
// });

// describe("getYieldForCrop", () => {
//     test("Get yield for crop, simple", () => {
//         const corn = {
//             name: "corn",
//             yield: 3,
//         };
//         const input = {
//             crop: corn,
//             numCrops: 10,
//         };
//         expect(getYieldForCrop(input)).toBe(30);
//     });
// });

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



