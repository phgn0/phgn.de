import json from "./info.json"
import fs from "fs"

export default function render(json) {
    const text = JSON.stringify(json, null, 2) // preserves whitespace

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

    write(html)
}

function write(text) {
    fs.writeFile("./index.html", text, (err) => {
        if (err) {
            console.log("Error writing to index.html")
            process.exit(1);
        }
    });

}


render(json)