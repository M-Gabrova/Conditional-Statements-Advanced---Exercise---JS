function cinema (input){
    let typeMovie = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);
    let income = 0;
    if(typeMovie == "Premiere"){
        income = rows * columns * 12;
    }
    else if(typeMovie == "Normal"){
        income = rows * columns * 7.5;
    }
    else if (typeMovie == "Discount"){
        income = rows * columns * 5;
    }
    console.log(`${income.toFixed(2)} leva`);

}
cinema (["Premiere", "10", "12"])