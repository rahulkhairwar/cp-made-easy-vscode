import * as vscode from 'vscode';
import { ContestsListProvider } from './ContestsListProvider';
import { ContestProblemsProvider } from './ContestProblemsProvider';

export function activate(context: vscode.ExtensionContext) {
    const contestsListProvider = new ContestsListProvider();
    const contestProblemsProvider = new ContestProblemsProvider();

    vscode.window.registerTreeDataProvider('cf-contests-list', contestsListProvider);
    contestsListProvider.refresh();
    vscode.window.registerTreeDataProvider('cf-contest-problems', contestProblemsProvider);
    contestProblemsProvider.refresh();
}

export function deactivate() {
    console.log("deactivating the extension.");
}