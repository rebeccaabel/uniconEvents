import useRef from "react";
import returnPrice from "CardDetails";

export function sectionAtickets(input) {
    let numberOfSeats1 = input;
    let seats1 = numberOfSeats1;
    let result1 = seats1*30;
    return returnPrice(result1);
}
export function sectionBtickets() {
    let numberOfSeats2 = document.getElementById('number2');
    let seats2 = numberOfSeats2.value;
    let result2 = seats2*40;
    console.log(seats2);
    console.log("The cost of your tickets will be " + result2 + " $.")
}
export function sectionCtickets() {
    let numberOfSeats3 = document.getElementById('number3');
    let seats3 = numberOfSeats3.value;
    let result3 = seats3*60;
    console.log("The cost of your tickets will be " + result3 + " $.")
}
export function sectionDtickets() {
    let numberOfSeats4 = document.getElementById('number4');
    let seats4 = numberOfSeats4.value;
    let result4 = seats4*80;
    console.log("The cost of your tickets will be " + result4 + " $.")
}