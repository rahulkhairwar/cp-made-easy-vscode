import { Properties } from 'ts-json-properties';
import { Contest } from '../dto/Contest';
import * as request from 'request';

let OPTIONS: any = {
    json: true
};

export class HTTPUtils {
    constructor() {
        Properties.initialize();
    }

    public testRequestGet(url: string, callback: (contests: Contest[]) => any) {
        request.get(url, OPTIONS, (error: any, response: any, body: any) => {
            let contestsArray = body.map((contest: any) => new Contest(contest));

            callback(contestsArray);
        });
    }

}

let httpUtils = new HTTPUtils();

httpUtils.testRequestGet(Properties.get("CODEFORCES_CONTEST_LIST_URL"), (contests: Contest[]) => {
    console.log(contests);
});
