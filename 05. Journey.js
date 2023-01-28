function journey (input){
    let budget = Number(input[0]);
    let season = input[1];
    let destination = '';
    let typePlace = '';
    let price = 0;

    if(budget <= 100){
        destination = "Bulgaria";
    }
    else if(budget <= 1000 ){
        destination = "Balkans";        
    }
    else{
        destination = "Europe";    
    }

    if(season === 'summer' && destination !=='Europe'){
        typePlace = 'Camp';
    }
    else {
        typePlace = 'Hotel';
    }

    if(destination === 'Bulgaria'){
        if(season === 'summer'){
            price = budget*0.3;
        }
        else{
            price = budget*0.7;
        }
    }
    else if(destination === 'Balkans'){
        if(season === 'summer'){
            price = budget*0.4;
        }
        else{
            price = budget*0.8;
        }
    }
    else if(destination === 'Europe'){
        price = budget*0.9;
        typePlace === 'Hotel';
    }

console.log (`Somewhere in ${destination}`);
console.log (`${typePlace} - ${price.toFixed(2)}`);


}
journey (["1500", "summer"])