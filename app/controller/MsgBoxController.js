import { getResponse } from "../model/ServerModel";
const API_GATE = "";

async function UpdateMessage(message, changeMessage){
    let responsePromise = getResponse(message);
    changeMessage(message, "user");
    let response = await responsePromise;
    changeMessage(response, "bot");
};




export { UpdateMessage };
