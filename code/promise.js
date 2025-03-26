function getApiUrl(keywoard) {
    return `https://www.blibli.com/backend/search/salah?searchTerm=${keywoard}`;
}
function getApiKey(keywoard) {
    console.log("Sending Request...")

    // Promise merupakan proxy untuk nilai yang akan datang ada 3 tahap untuk dia mengembalikan nilia
    // Resolve apabila berhasil
    // Rejected apabila gagal
    // Pending saat asyn proces berjalan dan belum selesai

    // Code membuat promise'
    // Argumen berupa function dengan parameter resolve yang nanti berisi argumen data yang kita dapat bila berhasil 
    // Dan reject parameter yang menerima function eror bawaan promise apabila terjadi eror 

    // ngrim data ke .then di bawah
    // ngirim eror ke .catch dibawah
    const promise = new Promise(function (resolve, reject) {

        // Saat kita send ke server maka program akan mencetak promise dengan status pending
        const ajax = new XMLHttpRequest;
        ajax.open('GET', getApiUrl(keywoard));
        ajax.send();

        ajax.onload = () => {
            // Ketika sudah dapat datanya dari server maka promise akan mengembalikan resolve dan datanya
            if (ajax.status === 200) {
                const serverRespon = JSON.parse(ajax.responseText);
                resolve(serverRespon);
            } else {
                // Jika datanya tidak berhasil didapat maka muncul eror
                reject("Gagal Mendapatkan Data Dari Server");
            }
        }

    })
    // Kita akan kembalikan promise jadi promise itu perantara untuk nilai di masadepan entah nanti hasil nya resolve atau rejected
    return promise;
}

function btnClick() {
    const inpSearch = document.getElementById('inpSearch').value;
    // Return promise itu kita simpan entah hasil nya resolve atau rejected 
    const promise = getApiKey(inpSearch.value);
    // Hasil dari promise bisa berupa 0 atau 1 resolve atau rejected nah .then itu adalah function untuk menangani 
    // hasil promise jika dia mengembalikan resolve atau berhasil mendapat data dari server dia akan di eksekusi apa bila resolve

    // Hasil dari resolve
    promise.then(function(value) {
        // Saat request dari client berhasil mendapat respon maka function resolve akan di callback disini
        // .then menangkap data yang di dapat dari resolve dan memanipulasi nya
        console.log(value.data.products[0]);
    }).catch(function(value) {
        // Saat request dari client gagal mendapat respon dari server makan function reject() akan ter callback di .catch
        // nah kemudian di .catch ini bisa kita tangani eror nya dan kita bisa bebas manipulasi
        // catch menangkap pesan eror dari rejected untuk terserah kita apaain
        alert(value);
    }).finally(function() {
        // .finally mau nanti stage nya resolve atau rejected finnaly akan tereksekusi
        console.info("Develop by yazid arsy")
    })
}