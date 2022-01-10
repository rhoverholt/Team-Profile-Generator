const fs = require("fs");
const cssString = `body {
    background-color: burlywood;
    height: 1vh;
}

.header-banner {
    width: 100%;
    text-align: center;
    background-color: aquamarine;
    padding: 50px 0;
    font-size: 50px;
    border: 1px solid black;
}

.container {
    width:100%;
    margin:auto;
    display: flex;
    justify-content: center;
    padding-top: 20px;
}

.card {
    display: inline-flex;
    width: 200px;
    border: 1px solid black;
    margin: 0px 10px;
}

.card-header {
    font-weight: bold;
    background-color: rgb(192, 109, 0);
}

.list-group-item {
    background-color: rgb(168, 255, 226);
}`

module.exports.buildHTML = function (htmlFile, cssFile, people) {
    let htmlString = initializeHTML();
    for (let p of people) {
        htmlString += p.toHTML();
    }
    htmlString += finalizeHTML();
    fs.writeFileSync(htmlFile, htmlString);
    fs.writeFileSync(cssFile, cssString);

    function initializeHTML() {
        return `<!DOCTYPE html>
        <html>
            <head>
                <title>Team Profile</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" 
                rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" 
                crossorigin="anonymous">
                <link href="./style.css" rel="stylesheet" >
            </head>
            <body>

                <header>
                    <h1 class="header-banner">Team Profile</h1>
                </header>
                <div class="container">`
    }
    function finalizeHTML() {
        return `
                </div>
            </body>
        </html>`
    }
}