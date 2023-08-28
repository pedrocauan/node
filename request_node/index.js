const { exec } = require("child_process")
const request = require("request");
/* request("http://www.uol.com.br", function (err, res, body) {
    if(!err && res.statusCode === 200){
        console.log(body);
    }
}); */
const fs = require("fs");
// copia o html da pagina
request("http://www.uol.com.br").pipe(fs.createWriteStream('home.html'));
exec("firefox home.html");
/* exec("firefox home.html", (err, stdout, stderr) => {
    if(err){
        console.log("erro !!");
        return
    }
    console.log(stdout);

    console.log(stderr)
}) */
//Da f5 na pagina depois de clonar ela
setTimeout(() => {
    exec("xdotool key F5", (err, stdout, stderr) => {
        console.log(stdout);
    })
}, 3000);