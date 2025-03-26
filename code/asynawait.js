function getApiUrl() {
    return `https://dummyjson.com/comments/add`;
}
function postComment(comment) {
    const apiUrl = getApiUrl();
    const promise = new Promise((resolve, reject) => {
        
        const ajax = new XMLHttpRequest();

        ajax.open('POST', apiUrl);
        ajax.setRequestHeader("Content-Type", "application/json");

        const body = JSON.stringify({
            body: comment,
            postId: 3,
            userId: 2
        });

        ajax.send(body);
        ajax.onload = () => {

            const serverRespon = ajax.responseText;
            if (ajax.status === 200) {
                resolve(serverRespon);
            } else {
                reject(serverRespon);
            }
        }
    })

    return promise;
}
async function implApi(comment) {
    try {
        const apiPromise = await postComment(comment);
        console.log(apiPromise);
    } catch (error) {
        console.error(error);
    }
}
function btnPostComment() {
    console.info("Develop By Yazid");
    const inpComment = document.getElementById('inpComment');
    implApi(inpComment.value);
}