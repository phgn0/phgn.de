import fs from "fs"
import anchorme from "anchorme"

function read(file) {
    return fs.readFileSync(file, 'utf8')
}

function write(file, text) {
    fs.writeFileSync(file, text)
}

// render text to html
export default function render(text, { title }) {
    text = anchorme.default(text, {
        attributes: [{
            name: "target",
            value: "_blank"
        }],
        defaultProtocol: "https://"
    })

    const html = `<!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8">
            <title>${title}</title>
        <link rel="stylesheet" type="text/css" href="./index.css">
        </head>
        <body>
            <div class="json">${text}</div>
        </body>
    </html > `

    return html
}

// import as .txt to control whitespace
const text = read("info.txt")
const json = JSON.parse(text)

const html = render(text, json)
write("./index.html", html)
