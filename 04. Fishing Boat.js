function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishermenCount = Number(input[2]);
    let boatPrice = 0;

    switch (season) {
        case 'Spring':
            boatPrice = 3000;
            break;
        case 'Summer':
        case 'Autumn':
            boatPrice = 4200;
            break;
        case 'Winter':
            boatPrice = 2600;
            break;
    }

    if(fishermenCount <= 6){
        boatPrice *= 0.9;
    }
    else if(fishermenCount <= 11){
        boatPrice *= 0.85;
    }
    else{
        boatPrice *= 0.75;
    }

    if(season !== 'Autumn' && fishermenCount % 2 === 0){
        boatPrice *= 0.95;
    }

    if (budget >= boatPrice) {
        let moneyLeft = budget-boatPrice;
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
    }
    else {
        let moneyNeeded = boatPrice-budget;
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
    }

}
fishingBoat (["3000", "Summer", "11"])