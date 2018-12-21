import * as vscode from 'vscode';
import { TreeView } from './TreeView';
import { CodeforcesAPIUtils } from './utils/CodeforcesAPIUtils';
import { Contest } from './dto/Contest';

export class TreeViewProvider implements vscode.TreeDataProvider<TreeView>
{
    onDidChangeTreeData?: vscode.Event<any>; getTreeItem(element: any): vscode.TreeItem | Thenable<vscode.TreeItem> {
        throw new Error("Method not implemented.");
    }

    getChildren(element?: any): vscode.ProviderResult<any[]> {
        let codeforcesAPIUtils = new CodeforcesAPIUtils();

        codeforcesAPIUtils.getContestsList((contests: Contest[]) => {
            let treeViews: TreeView[] = [];

            for (var i = 0; i < contests.length; i++) {
                // treeViews[i] = new TreeView();
            }

            return treeViews;
        });

        return null;

        /*         let disposable = vscode.commands.registerCommand('extension.showCFContestsList', () => {
                    codeforcesAPIUtils.getContestsList((contests: Contest[]) => {
                        console.log("aaa contests : " + contests);
                    });
                });
        
                context.subscriptions.push(disposable); */
    }

    getParent?(element: any) {
        // throw new Error("Method not implemented.");

        return element;
    }

}
