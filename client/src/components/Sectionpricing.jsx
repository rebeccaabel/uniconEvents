

export function sectionAtickets() {
    let numberOfSeats = document.getElementById("number1");
    let seats = numberOfSeats.value;
    let result = seats*30;
    console.log("The cost of your tickets will be " + result + " $.")

}
export function sectionBtickets() {
    let numberOfSeats = document.getElementById('number2');
    let seats = numberOfSeats.value;
    let result = seats*40;
    console.log("The cost of your tickets will be " + result + " $.")
}
export function sectionCtickets() {
    let numberOfSeats = document.getElementById('number3');
    let seats = numberOfSeats.value;
    let result = seats*60;
    console.log("The cost of your tickets will be " + result + " $.")
}
export function sectionDtickets() {
    let numberOfSeats = document.getElementById('number4');
    let seats = numberOfSeats.value;
    let result = seats*80;
    console.log("The cost of your tickets will be " + result + " $.")
}

