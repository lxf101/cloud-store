const {app, BrowserWindow} = require('electron');
const isDev = require('electron-is-dev');

app.on('ready',()=>{
    let mainWin = new BrowserWindow({
        width : 800,
        height:600,
        webPreferences : {
            nodeIntegration : true,
            enableRemoteModule : true
        }
    });
    console.log("<<<isDev<<<<",isDev);
    mainWin.webContents.openDevTools();    //自动打开开发者工具
    let loadLoaction = isDev ? 'http://localhost:3000' : '';
    mainWin.loadURL(loadLoaction);
});