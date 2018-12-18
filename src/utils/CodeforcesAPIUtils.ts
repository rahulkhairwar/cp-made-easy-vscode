import { Contest } from "../dto/Contest";
import { Properties } from "ts-json-properties";
import * as request from 'request';

/**
 * A utility class to fetch data from Codeforces through it's defined API.
 * Read about it's API <a href="https://codeforces.com/api/help">here<a/>
 */
export class CodeforcesAPIUtils {
    constructor() {
        Properties.initialize();
    }

    public getContestsList(callback: (contests: Contest[]) => any) {
        request.get(Properties.get("CODEFORCES_CONTEST_LIST_URL"), (error: any, response: any, body: any) => {
            let jsonObject = JSON.parse(body);
            let contestsArray = jsonObject.result.map((contest: any) => new Contest(contest));

            callback(contestsArray);
        });
    }

}

/* Small test code for testing the class functions. */
let cfApiUtils = new CodeforcesAPIUtils();

cfApiUtils.getContestsList((contests: Contest[]) => {
    var len = contests.length;

    console.log("No. of contests : " + len);

    for (var i = 0; i < 10; i++) {
        console.log(`i : ${i}, contests[i] : ${contests[i]}`);
    }
});
