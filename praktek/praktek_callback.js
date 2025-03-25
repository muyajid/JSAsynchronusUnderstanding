function executeAfterDelay(message, time) {
    console.log(`Pesan Akan Tercetak Dalam ${time} Milidetik`);

    setTimeout(() => {
        console.log(`Pesan Berhasil Tecetak ${message}`);
    }, time)
}

// executeAfterDelay("Hello World Ini Callback", 5000);

// Soal 1
function showMessage(message, time) {
    console.log(`Pesan Akan Terlihat Dalam ${time / 1000} Detik`);

    for (let i = 1; i <= time / 1000; i++) {
        setTimeout(() => {
            console.log(i);
        }, i * 1000);
    }

    setTimeout(() => {
        console.info(`Pesan Berhasil Tercetak ${message} Selamat Ya`)
    }, time)
}

// showMessage("Hello Ini Menggunakan Callback Function", 5000);

// Soal 2
const langkahSatu = () => {
    console.log(`Langkah 1 Manggil Langkah Dua Langkah Dua Jalan`)
    setTimeout(langkahDua, 2000)
}
const langkahDua = () => {
    console.log(`Langkah 2 Manggil Langkah Tiga Langkah Tiga Jalan`)
    setTimeout(langkahTiga, 3000)
}
const langkahTiga = () => {
    console.log(`Langkah 3`);
}

// langkahSatu();

// Soal 3
function loading() {
    console.info(`Loading Akan Berjalan`)

    const icon = ['.', '..', '...', 'Selesai'];

    for(let i = 0; i < icon.length; i++) {

        setTimeout(() => {
            console.log(icon[i])
        }, i * 1000);
    }
}

// loading();

// Soal 4
function executeWithDelay(handler, timeout) {
    console.info(`Function Akan Terpanggil Setelah ${timeout / 1000} Detik`)
    setTimeout(handler, timeout);
}

// executeWithDelay(function () {console.log("Hello World")}, 5000)

// Soal 5
function repeatMessage(message, interval) {
    console.info(`Pesan Mu Akan Tecetak Setiap ${interval / 1000} Detik Sekali`)

    let count = 0;
    const intervalId = setInterval(() => {
        count++

        console.log(`Pesan Berhasil Tecetak ${message}`)

        if (count === 5) {
            clearInterval(intervalId)
            console.info(`Program Berakhir Dalam ${count * (interval / 1000)} Detik`)
        }
    }, interval);
} 

// repeatMessage("Hello Java Script", 2000);