const {app, BrowserWindow} = require('electron');
const {isDev} = require('electron-is-dev');

app.on('ready',()=>{
    let mainWin = new BrowserWindow({
        width : 800,
        height:600,
        webPreferences : {
            nodeIntegration : true,
            enableRemoteModule : true
        }
    });
    let loadLoaction = isDev ? 'http://localhost:3000' : '';
    mainWin.loadURL(loadLoaction);
});