
async function getResponse(message) {
    let request = {
        headers:{
            "content-type":"application/json; charset=UTF-8"
        },
        body: {message:message},
        method: "POST"
    }
    let returnMessage = "";
    fetch(API_GATE, request)
    .then((response) => response.json)
    .then((data) => {returnMessage = data["message"];});
    return returnMessage;
}

export {getResponse};