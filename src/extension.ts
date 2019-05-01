import * as vscode from 'vscode';
import { ContestsListProvider } from './ContestsListProvider';
import { ContestProblemsProvider } from './ContestProblemsProvider';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    const contestsListProvider = new ContestsListProvider();
    const contestProblemsProvider = new ContestProblemsProvider();

    vscode.window.registerTreeDataProvider('cf-contests-list', contestsListProvider);
    contestsListProvider.refresh();

    vscode.window.registerTreeDataProvider('cf-contest-problems', contestProblemsProvider);
    contestProblemsProvider.refresh();

/*     vscode.window.createTreeView('contestExplorer', {
        treeDataProvider: contestsListProvider
    }); */
}

// this method is called when your extension is deactivated
export function deactivate() {
    console.log("deactivating the extension.");
}