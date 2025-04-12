function showLog(total) {
    const hasil = [];
    for(let i = 0; i < total + 1; i++) {
        hasil.push(i);
    }
    return hasil;
}
addEventListener('message', function(event) {
    const total = event.data;
    const data = showLog(total);
    this.postMessage(data);
})