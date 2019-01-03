import * as vscode from 'vscode';
import { Contest } from './dto/Contest';

export class TreeView extends vscode.TreeItem
{
    type: string;
    contest: Contest;

    constructor(type: string, label: string, collapsibleState: vscode.TreeItemCollapsibleState/* , command: vscode.Command */, contest: Contest)
    {
        super(label, collapsibleState);
        this.type = type;
        // this.command = command;
        this.contest = contest;
    }

}
