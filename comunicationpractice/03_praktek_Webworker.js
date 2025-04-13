// menangkap data dari client untuk di proses
addEventListener("message", async function (event) {
    // proses fetching dengan return promise
    try {
        const req = await fetch(event.data, {
            method: 'GET'
        });
        const res = await req.json();
        // mengirim data hasil dari proses fetching 
        postMessage(res);
    } catch (err) {
        // mengirim status eror bila terjadi eror
        postMessage(`Terjadi Eror : ${err}`);
    }
})