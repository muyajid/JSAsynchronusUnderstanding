function SayHelloTimeout() {
    console.info("Hello World Timeout")
}
function SayHelloInterval() {
    console.info("Hello World Interval")
}
function SaySucces() {
    console.log("Succes Runing Code");
}
// Set timeout callback function sekali dalam waktu yang di tetapkan 
SaySucces()
setTimeout(() => {
    SayHelloTimeout()
}, 5000);

// Set interval function akan terus terpanggil dalam waktu tertentu
SaySucces()
setInterval(() => {
    SayHelloInterval()
}, 6000);