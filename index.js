const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 3024,
        height: 1964
    })

    win.loadFile('index.html')

}

app.whenReady().then(() => {
    createWindow()
})