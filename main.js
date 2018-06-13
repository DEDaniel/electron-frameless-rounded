const {app, BrowserWindow} = require('electron')

let mainWindow

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 500,
        height: 500,
        frame: false,
        transparent: true
    })
    mainWindow.loadURL('file://' + __dirname + '/index.html')
    mainWindow.webContents.openDevTools()
    mainWindow.on('closed', () => {
        mainWindow = null
    })
})

app.on('quit', () => {
    app.quit()
})

