'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const CodeforcesAPIUtils_1 = require("./utils/CodeforcesAPIUtils");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "cp-made-easy-vscode" is now active!');
    let codeforcesAPIUtils = new CodeforcesAPIUtils_1.CodeforcesAPIUtils();
    /*     try
        {
            var contests = await codeforcesAPIUtils.getContestsList((contests: Contest[]) => { return contests; });
        }
        catch (error)
        {
            console.log(error);
        } */
    let disposable = vscode.commands.registerCommand('extension.showCFContestsList', () => {
        codeforcesAPIUtils.getContestsList((contests) => {
            console.log("aaa contests : " + contests);
        });
    });
    context.subscriptions.push(disposable);
    /*     let codeforcesAPIUtils = new CodeforcesAPIUtils();
    
        codeforcesAPIUtils.getContestsList((contests: Contest[]) => {
            vscode.window.showInformationMessage("got contests from the API call.");
    
            let len = contests.length;
            let stringArray = [];
    
            for (var i = 0; i < len; i++)
            {
                stringArray.push(contests[i].toString());
    
                if (i < 10)
                    console.log(`i : ${i}, contests[i] : ${contests[i]}`);
            }
    
            console.log("iterated through all the contests");
    
            let disposable = vscode.commands.registerCommand('extension.showCFContestsList', () => {
                console.log("inside disposable");
                console.log("No. of contests : " + len);
                vscode.window.showInformationMessage("len : " + len);
                vscode.window.showQuickPick(stringArray, { canPickMany: false });
        
                // vscode.window.showInformationMessage(stringArray);
                vscode.window.showInformationMessage('hello CP Made Easy');
            });
    
            context.subscriptions.push(disposable);
        }); */
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    /*     let disposable = vscode.commands.registerCommand('extension.showCFContestsList2', () => {
            // The code you place here will be executed every time your command is executed
    
            let codeforcesAPIUtils = new CodeforcesAPIUtils();
    
            // Display a message box to the user
            // vscode.window.showInformationMessage('Hello World!');
    
            codeforcesAPIUtils.getContestsList((contests: Contest[]) => {
                console.log("inside the api call");
                console.log("contests.len : " + contests.length);
    
                let len = contests.length;
                let stringArray = [];
                
                for (var i = 0; i < len; i++)
                    stringArray.push(contests[i].toString());
                
                // quickPick.items = Object.keys(contests).map((contest: any) => new Contest());
                
                console.log("stringArray[0] : " + stringArray[0]);
                
                const quickPick = vscode.window.createQuickPick();
    
                quickPick.items = stringArray;
                quickPick.onDidChangeSelection(selection => {
                    console.log("selected in quickpick : " + selection);
                });
    
                quickPick.placeholder = "Type contest name for filter...";
                quickPick.onDidHide(() => quickPick.dispose());
                quickPick.show();
            });
            
        console.log("after api call");
    
            // let treeView = vscode.window.createTreeView();
        });
    
        context.subscriptions.push(disposable);*/
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map