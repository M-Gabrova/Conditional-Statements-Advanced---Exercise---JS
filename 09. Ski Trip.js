function skiTrip(input) {
    let daysVacation = Number(input[0])-1;
    let typeRoom = input[1];
    let evaluation = input[2];
    let priceRoom = 18;
    let priceApartment = 25;
    let prisePresident = 35;
    let sum = 0;
    if (typeRoom == "room for one person") {
        sum = daysVacation * priceRoom;
    }
    else if (typeRoom == "apartment") {
        if (daysVacation < 11) {
            sum = daysVacation * priceApartment;
            sum = sum * 0.7;
        }
        else if (daysVacation < 16) {
            sum = daysVacation * priceApartment;
            sum = sum * 0.65;
        }
        else {
            sum = daysVacation * priceApartment;
            sum = sum * 0.5;
        }
    }
    else if (typeRoom == "president apartment") {
        if (daysVacation < 11) {
            sum = daysVacation * pricePresident;
            sum = sum * 0.9;
        }
        else if (daysVacation < 16) {
            sum = daysVacation * pricePresident;
            sum = sum * 0.85;
        }

        else {
            sum = daysVacation * pricePresident;
            sum = sum * 0.8;
        }
    }

    if (evaluation == "positive") {
        sum = sum + sum * 0.25;
    }
    else if (evaluation == "negative") {
        sum = sum * 0.9;
    }

    console.log(`${sum.toFixed(2)}`);

}

skiTrip(["14", "apartment", "positive"])