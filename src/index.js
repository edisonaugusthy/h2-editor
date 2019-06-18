const electron = require('electron');
require('electron-reload')('./index.html');
const path = require('path');
const BrowserWindow = electron.remote.BrowserWindow;

const first = document.querySelector(".content-div");
const iframe = document.querySelector(".frame-div");

function compileToHtml() {
    var html = first.textContent;
    iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
}

function renderPaste(e) {
    var text = e.clipboardData.getData("text/plain");
    document.execCommand("insertText", false, text);
}

function init() {
    const modalPath = path.join('file://', __dirname, './reload.html')
    let win = new BrowserWindow({ width: 800, height: 800 })
    win.on('close', function () { win = null })
    win.loadURL(modalPath)
    win.show()
}


init();