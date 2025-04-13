addEventListener("message", async function (event) {
    try {
        const req = await fetch(event.data, {
            method: 'GET'
        });
        const res = await req.json();
        postMessage(res);
    } catch (err) {
        postMessage(`Terjadi Eror : ${err}`);
    }
})