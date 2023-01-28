function hotelRoom(input) {
    let season = input[0];
    let nightsCount = Number(input[1]);
    let studioSum = 0;
    let apartmentSum = 0;

    if ((season == "May") || (season == "October")) {
        let studioPrice = 50;
        studioSum = studioPrice * nightsCount;

        let apartmentPrice = 65;
        apartmentSum = apartmentPrice * nightsCount;

        if (nightsCount > 14) {
            studioSum *= 0.7;

            apartmentSum *= 0.9;
        }

        else if (nightsCount > 7) {
            studioSum *= 0.95;
        }
    }

    else if ((season == "June") || (season == "September")) {
        let studioPrice = 75.2;
        studioSum = studioPrice * nightsCount;

        let apartmentPrice = 68.7;
        apartmentSum = apartmentPrice * nightsCount;

        if (nightsCount > 14) {
            studioSum *= 0.8;

            apartmentSum *= 0.9;
        }
    }

    else if ((season == "July") || (season == "August")) {
        let studioPrice = 76;
        studioSum = studioPrice * nightsCount;

        let apartmentPrice = 77;
        apartmentSum = apartmentPrice * nightsCount;

        if (nightsCount > 14) {
            apartmentSum *= 0.9;
        }
    }

    console.log(`Apartment: ${apartmentSum.toFixed(2)} lv.`);
    console.log(`Studio: ${studioSum.toFixed(2)} lv.`);
}

hotelRoom(["May", "15"])