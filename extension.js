const vscode = require('vscode');

function activate(context) {
    let disposable = vscode.commands.registerCommand('extension.LoremTeksten', function () {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const loremText = LoremTeksten();
            editor.edit(editBuilder => {
                editBuilder.insert(editor.selection.active, loremText);
            });
        }
    });

    context.subscriptions.push(disposable);
}

function deactivate() {}

function LoremTeksten() {
    
    return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
}

module.exports = {
    activate,
    deactivate
};
