"use strict"


let lunch = [ 
      {item: "Steak Fajitas", price: 9.95},
      {item: "Chips and Guacamole", price: 5.25},
      {item: "Sweet Tea", price: 2.79}
    ];

    function totalTheMeals (mealsArray){

        let total = 0; 
        let numberOfMeals = mealsArray.length

        for(let i = 0; i < numberOfMeals; i++){

            total += mealsArray[i].price

        }

        return total;
    }

    let lunchTotal = totalTheMeals(lunch);
    let lunchTax = lunchTotal * (8 / 100);
    let lunchTip = lunchTotal * (18 / 100);
    let totalDue = lunchTotal + lunchTax + lunchTip


    console.log("the lunch total was " + lunchTotal.toFixed(2) )
    console.log("the tax was: " + lunchTax.toFixed(2))
    console.log("the tip was: " + lunchTip.toFixed(2))
    console.log("the total due is: " + totalDue.toFixed(2))