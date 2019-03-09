import fs from "fs"

function read(file) {
    return fs.readFileSync(file)
}

function write(file, text) {
    fs.writeFileSync(file, text)
}

// render text to html
export default function render(text) {
    const html = `<!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8">
            <title>phgn.io</title>
            <link rel="stylesheet" type="text/css" href="./index.css">
        </head>
        <body>
            <div class="json">${text}</div>
        </body>
    </html>`

    return html
}

const text = read("info.txt")
const html = render(text)
write("./index.html", html)
