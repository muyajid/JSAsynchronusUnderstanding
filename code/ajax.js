function GetApiUrl(keywoard) {
    return `https://www.blibli.com/backend/search/products?searchTerm=${keywoard}`
}
function SearchProduct(keywoard) {
    console.log("Ini proses asyncrhonus ya ini akan ter eksekusi dahulu");
    
    // Mengkases class ajax XMLHttpRequest()
    const ajax = new XMLHttpRequest()
    const api = GetApiUrl(keywoard)
    // Perintah request ke server ada dua parameter method dan api
    ajax.open('GET', api)
    // Mengirimkan request ke server 
    ajax.send()

    // callback untuk menangin reponse dari server ketika proses ajax selesai
    ajax.onload = () => {
        if (ajax.status === 200) {
            const result = JSON.parse(ajax.responseText)
            console.log(result)


            const inpSearch = document.getElementById('search')
            const btnSearch = document.getElementById('btnSearch')
            const ulSearchResults = document.getElementById('ulSearchResults')


        } else {
            console.error("Gagal Mendapat Respon")
        }
    }
    // responseText untuk mendapat response dari server
    // Berjalan secara asynchronus jadi harus kita callback
    // const response = JSON.parse(ajax.responseText)
    // console.log(response)
}

SearchProduct('baju')