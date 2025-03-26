function getApiEndPoint(keywoard) {
    return `https://www.blibli.com/backend/search/products?searchTerm=${keywoard}`;
}
function getApiKey(keywoard) {
    const apiUrl = getApiEndPoint(keywoard);
    return fetch(apiUrl, {
        method: 'GET'
    });
}
function implApi() {
    console.log("Ini proses asyn fetch mengembalikan promise");
    
    const inpSearch = document.getElementById('inpSearch');
    const api = getApiKey(inpSearch.value);
    api
        .then(function(data) {
            const serverRespon = data.json();
            return serverRespon;
        } )
        .then((data) => {
            const mnpData = data.data.products;
            mnpData.forEach(item => {
                console.log(item.name);
            });
        })
        .catch(function(eror) {
            alert(`${Error("Terjadi Eror : ")} Gagal Mengambil Data`);
            console.error(eror);
        })
        .finally(() => {
            console.info(`Develop By Yazid`);
        })
}