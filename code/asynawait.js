function getApiUrl() {
    return `https://dummyjson.com/auth/login`;
}
function authLogin(username, password) {
    const apiUrl = getApiUrl();
    return new Promise((resolve, reject) => {
        const ajax = new XMLHttpRequest();
        
        ajax.open('POST', apiUrl);
        ajax.setRequestHeader("Content-Type", "application/json");
        const body = JSON.stringify({
            username: username,
            password: password
        });

        ajax.send(body);
        ajax.onload = (() => {
            if(ajax.status === 200) {
                resolve(ajax.responseText);
            } else {
                reject(ajax.responseText);
            }
        })
    })
}

async function implApi() {
    try {

        const inpUsername = document.getElementById('inpUsername');
        const inpPassword = document.getElementById('inpPassword');
        const imgProfile = document.getElementById('imgProfile');
        const pUsername = document.getElementById('pUsername');
        const apiPromise = await authLogin(inpUsername.value, inpPassword.value);

        const serverRespon = JSON.parse(apiPromise);
        console.log(serverRespon);

        imgProfile.setAttribute("src", serverRespon.image);
        pUsername.textContent = `Selamat Datang ${serverRespon.username}`;
    } catch (error) {
        console.error(`Terjadi Eror : ${error}`);
    } finally {
        console.info(`Develop By Yazid`);
    }
}