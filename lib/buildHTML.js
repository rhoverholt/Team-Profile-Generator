function buildHTML() {
    let htmlString = initializeHTML();
    for (let p of people) {
        htmlString += p.toHTML;
    }
    htmlString += finalizeHTML();
    writeHTML(htmlString);

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

module.exports = buildHTML