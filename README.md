# TDDGroentetuin
Finall Assigment TDD from Winc Academy.

Feedback: https://vimeo.com/661429612/d93cb39063

Assigment

1. write one or more tests for a piece of functionality.
2. run the new tests and check that they fail (red).
3. write code to pass all tests (green).
4. improve the code so that it looks neat (refactor).
5. commit your code.
6. back to step 1 with the next piece of functionality.

Get the tests running with jest first. So write the code needed to make the tests pass.

Then add functionality step by step. Use the TDD cycle at the top of this assignment. Add the functionality in the following steps:

- calculate the cost for a crop: getCostsForCrop.
- calculate the revenue for a crop (without environmental factors): getRevenueForCrop.
- calculate the profit for a crop (without environmental factors): getProfitForCrop.
- calculate the profit for multiple crops (without environmental factors): getTotalProfit.

Implement the following functionalities by modifying your previously written functions.
So don't write new functions. Check within the function whether there are relevant environmental factors that have been passed to the function.

1. Include environmental factors in calculating the yield (in kilograms) of a plant in this function: getYieldForPlant, use the following data structures:

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

const environmentFactors = {
sun: "low",
};

do this calculation with multiple environmental factors.
Be sure to ignore irrelevant environmental factors in your calculations.
2. calculate the yield in kilograms of a crop getYieldForCrop, include environmental factors in your calculation.
3. calculate the total yield of multiple crops getTotalYield, include environmental factors in your calculation.
4. calculate the income of a crop getRevenueForCrop, include environmental factors in your calculation.
5. calculate the profit of a crop getProfitForCrop, include environmental factors in your calculation.
6. calculate the profit for multiple crops getTotalProfit, include environmental factors in your calculation.
