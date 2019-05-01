import * as vscode from 'vscode';
import { TreeView } from './TreeView';
import { CodeforcesAPIUtils } from './utils/CodeforcesAPIUtils';
import { Contest } from './dto/Contest';

export class ContestsListProvider implements vscode.TreeDataProvider<TreeView> {
    private _onDidChangeTreeData: vscode.EventEmitter<TreeView | undefined> = new vscode.EventEmitter<TreeView | undefined>();
    readonly onDidChangeTreeData: vscode.Event<TreeView | undefined> = this._onDidChangeTreeData.event;

    refresh(): void {
        console.log("in refresh()");
        this._onDidChangeTreeData.fire();
    }

    getTreeItem(treeView: TreeView): vscode.TreeItem {
        console.log("in getTreeItem(), tV : " + treeView.contest.getName());
        return treeView;
    }

    getChildren(treeView?: TreeView): Thenable<TreeView[]> {
        console.log("in getChildren()");
        
        if (treeView !== null)
            console.log("current tV : " + JSON.stringify(treeView));

        if (treeView !== undefined)
            return null;

        return new Promise<TreeView[]>((resolve, reject) => {
            let codeforcesAPIUtils = new CodeforcesAPIUtils();

            codeforcesAPIUtils.getContestsList((contests: Contest[]) => {
                let treeViews: TreeView[] = [];
                let limit = 5;

                for (let i = 0; i < limit; i++) {
                    treeViews.push(new TreeView("some type...", contests[i].getName(), vscode.TreeItemCollapsibleState.Collapsed,
                        contests[i]));
                }

                console.log("returning all treeViews");
                return resolve(treeViews);
            });
        });
    }

    getParent?(element: any) {
        console.log("in getParent(), element : " + JSON.stringify(element));
        return element;
    }

}
