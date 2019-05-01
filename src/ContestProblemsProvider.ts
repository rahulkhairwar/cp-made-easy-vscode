import * as vscode from 'vscode';
import { TreeView } from './TreeView';
import { CodeforcesAPIUtils } from './utils/CodeforcesAPIUtils';

export class ContestProblemsProvider implements vscode.TreeDataProvider<TreeView> {
    private _onDidChangeTreeData: vscode.EventEmitter<TreeView | undefined> = new vscode.EventEmitter<TreeView | undefined>();
    readonly onDidChangeTreeData: vscode.Event<TreeView | undefined> = this._onDidChangeTreeData.event;

    refresh(): void {
        console.log("CPP.refresh()");
        this._onDidChangeTreeData.fire();
    }

    getTreeItem(treeView: TreeView): vscode.TreeItem {
        console.log("CPP.getTreeItem()");
        return treeView;
    }

    getChildren(treeView?: TreeView): Thenable<TreeView[]> {
        console.log("CPP.getChildren()");

        if (treeView !== null)
            console.log("current tV : " + JSON.stringify(treeView));

        return new Promise<TreeView[]>((resolve, reject) => {
            let codeforcesAPIUtils = new CodeforcesAPIUtils();

            codeforcesAPIUtils.getContestDetails();

            return null;
        });
    }
}