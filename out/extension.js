"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const ContestsListProvider_1 = require("./ContestsListProvider");
const ContestProblemsProvider_1 = require("./ContestProblemsProvider");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    const contestsListProvider = new ContestsListProvider_1.ContestsListProvider();
    const contestProblemsProvider = new ContestProblemsProvider_1.ContestProblemsProvider();
    vscode.window.registerTreeDataProvider('cf-contests-list', contestsListProvider);
    contestsListProvider.refresh();
    vscode.window.registerTreeDataProvider('cf-contest-problems', contestProblemsProvider);
    contestProblemsProvider.refresh();
    /*     vscode.window.createTreeView('contestExplorer', {
            treeDataProvider: contestsListProvider
        }); */
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() {
    console.log("deactivating the extension.");
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map