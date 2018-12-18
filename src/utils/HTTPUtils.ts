import {Properties} from 'ts-json-properties';
import * as request from 'request';

class HTTPUtils
{
    constructor()
    {
        Properties.initialize();
    }

    public testRequestGet(url: string)
    {
        request.get(url, (error: any, response: any, body: any) => {
            // console.log("body : " + body);

            return body;
        });
    }
}

let httpUtils = new HTTPUtils();
// let body = httpUtils.testRequestGet(Properties.get("TEST_API_URL"));
let body = httpUtils.testRequestGet(Properties.get("CODEFORCES_CONTEST_LIST_URL"));

let jsonBody = JSON.parse(body);

for (let i = 0; i < jsonBody.length; i++) {
    const element = jsonBody[i];
    
    console.log("i : " + i + ", el[i] : " + element);
}
