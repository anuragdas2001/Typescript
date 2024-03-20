// const Aisle = 0;
// const middle = 1;
// const windows = 2;
// if(seat === Aisle){
// }
var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISLE"] = 10] = "AISLE";
    SeatChoice[SeatChoice["MIDDLE"] = 22] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 23] = "WINDOW";
    SeatChoice[SeatChoice["FOURTH"] = 44] = "FOURTH";
})(SeatChoice || (SeatChoice = {}));
var hcSeat = SeatChoice.AISLE;
console.log(hcSeat);
