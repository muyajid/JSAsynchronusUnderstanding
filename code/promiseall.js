function checkName(name) {
    console.log("Sending Respon...Validation")
    const promise = new Promise((resolve, reject) => {
        if (name === "Yazid") {
            resolve(name);
        } else {
            reject(name);
        }
    })

    return promise;
}

const promise1 = checkName("Yazid");
const promise2 = checkName("Yazid");
const promise3 = checkName("Zakky");

// Tanpa promise all
promise1
    .then(function(name){
        console.log(`namaku ${name}`)
    })
    .catch(function(name){
        console.error(`Nama Ini = ${name} Tidak Terdaftar Di Database`);
    })
    .finally(function() {
        console.info("Develop By Yazid")
    })

promise2
    .then(function(name){
        console.log(`namaku ${name}`)
    })
    .catch(function(name){
        console.error(`Nama Ini = ${name} Tidak Terdaftar Di Database`);
    })
    .finally(function() {
        console.info("Develop By Yazid")
    })

promise3
    .then(function(name){
        console.log(`namaku ${name}`)
    })
    .catch(function(name){
        console.error(`Nama Ini = ${name} Tidak Terdaftar Di Database`);
    })
    .finally(function() {
        console.info("Develop By Yazid")
    })

// Menggunakan promise all
const chekOne = checkName("Yazid");
const chekTwo = checkName("Yazid");
const chekTre = checkName("Zakky");

Promise.all([chekOne, chekTwo, chekTre])
    .then(function(name) {
        console.log(name);
    })
    .catch(function(name) {
        console.error(`Org Ini Penyebab Eror => ${name}`)
    })
    .finally(() => {console.info("Developed By Yazid")})


function calculateRiceStock(kg){
    return new Promise((resolve, reject) => {
        if (kg > 250) {
            resolve(kg);
        } else {
            reject(kg)
        }
    })
}

const riceStockJanuary = calculateRiceStock(500);
const riceStockFebruary = calculateRiceStock(10);
const riceStockMaret = calculateRiceStock(700);

// Jika semua promise berhasil maka aman aja 
// Jika ada satu yang gagal maka semua gagal


// Hasil promise di tampung dalam array dan tinggal kita manipulasi manipulasi aja di then dan catch
Promise.all([riceStockJanuary, riceStockFebruary, riceStockMaret])
    .then((kg) => {
            console.info(kg.reduce((acc, cur) => acc + cur) + " Masih Aman Stok Nya")
        })
    .catch((kg) => {console.error(`Stok Terakhir = ${kg} Waduh Bahaya`)})