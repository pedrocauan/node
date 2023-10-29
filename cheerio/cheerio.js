const cheerio = require("cheerio");

const $ = cheerio.load("<ul><li>1</li><li>2</li></ul>");
$("ul").append("<li>3</li>");
$("li").each( function() {
    console.log($(this).html());
});