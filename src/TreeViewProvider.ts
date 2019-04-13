import * as vscode from 'vscode';
import { TreeView } from './TreeView';
import { CodeforcesAPIUtils } from './utils/CodeforcesAPIUtils';
import { Contest } from './dto/Contest';

export class TreeViewProvider implements vscode.TreeDataProvider<TreeView>
{
    private _onDidChangeTreeData: vscode.EventEmitter<TreeView | undefined> = new vscode.EventEmitter<TreeView | undefined>();
    readonly onDidChangeTreeData: vscode.Event<TreeView | undefined> = this._onDidChangeTreeData.event;

    refresh(): void {
        this._onDidChangeTreeData.fire();
    }

    getTreeItem(treeView: TreeView): vscode.TreeItem {
        console.log("in getTreeItem(), tV : " + treeView);
        return treeView;
    }

    getChildren(treeView?: TreeView): Thenable<TreeView[]> {
        console.log("in getChildren()");
        return new Promise<TreeView[]>((resolve, reject) => {
            let codeforcesAPIUtils = new CodeforcesAPIUtils();

            codeforcesAPIUtils.getContestsList((contests: Contest[]) => {
                console.log("Fetched all contests");
                let treeViews: TreeView[] = [];
                // let limit = contests.length;
                let limit = 10;

                for (var i = 0; i < limit; i++)
                    treeViews.push(new TreeView("some type...", contests[i].getName(), vscode.TreeItemCollapsibleState.Collapsed,
                        contests[i]));

                console.log("returning all treeViews");
                return treeViews;
            });
        });
    }

    getParent?(element: any) {
        return element;
    }

}
