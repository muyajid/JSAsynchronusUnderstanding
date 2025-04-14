function getApiEndpoint() {
  return `https://dummyjson.com/quotes`;
}
addEventListener("message", async function (event) {
    if(event.data === "req") {
        try {
            const req = await fetch(getApiEndpoint(), {
                method: 'GET'
            });
            const res = await req.json();
            const data = res.quotes;
            postMessage(data);
          } catch (error) {
            postMessage(`Terjadi Eror : ${error}`);
          }
    } else {
      postMessage("Tidak Ada Perintah Req Ke Server");
    }
});
