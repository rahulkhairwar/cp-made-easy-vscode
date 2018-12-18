import { Properties } from 'ts-json-properties';
import { Contest } from '../dto/Contest';
import * as request from 'request';

export class HTTPUtils {
    constructor() {
        Properties.initialize();
    }

    public testRequestGet(url: string, callback: (contests: Contest[]) => any) {
        request.get(url, (error: any, response: any, body: any) => {
            let jsonBody = JSON.parse(body);
            let contestsArray = jsonBody.result.map((contest: any) => new Contest(contest));

            callback(contestsArray);
        });
    }

}

let httpUtils = new HTTPUtils();

httpUtils.testRequestGet(Properties.get("CODEFORCES_CONTEST_LIST_URL"), (contests: Contest[]) => {
    console.log(contests);
});
