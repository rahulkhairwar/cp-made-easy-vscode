import { Contest } from "../dto/Contest";
import * as request from 'request';

let Properties = require('../../properties.json');

/**
 * A utility class to fetch data from Codeforces through it's defined API.
 * Read about it's API <a href="https://codeforces.com/api/help">here<a/>
 */
export class CodeforcesAPIUtils {
/*     constructor() {
    } */

    public getContestsList(callback: (contests: Contest[]) => any) {
        let cfContestListUrl = Properties["CODEFORCES_CONTEST_LIST_URL"];
        // let CODEFORCES_CONTEST_LIST_URL = "https://www.codeforces.com/api/contest.list";
        
        request.get(cfContestListUrl, (error: any, response: any, body: any) => {
            let jsonObject = JSON.parse(body);
            let contestsArray = jsonObject.result.map((contest: any) => new Contest(contest));

            callback(contestsArray);
        });
    }

    public getContestDetails() {
        //
    }

}

/* Small test code for testing the class functions. */
/* let cfApiUtils = new CodeforcesAPIUtils();

cfApiUtils.getContestsList((contests: Contest[]) => {
    let len = contests.length;

    console.log("No. of contests : " + len);

    for (let i = 0; i < 10; i++) {
        console.log(`i : ${i}, contests[i] : ${contests[i]}`);
    }
}); */
