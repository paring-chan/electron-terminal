const { app, BrowserWindow } = require('electron')

app.allowRendererProcessReuse = false

function createWindow () {
    const win = new BrowserWindow({
        width: 715,
        height: 450,
        // resizable: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        },
    })

    win.loadFile('index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})