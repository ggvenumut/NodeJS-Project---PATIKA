const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.write("<h2>INDEX SAYFASI</h2>");
  } else if (url === "/hakkimda ") {
    res.write("<h1>iletisim  SAYFASI</h1>");
  } else if (url === "/contact") {
    res.write("<h1>CONTACT SAYFASI</h1>");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h1>404 SAYFA BULUNAMADI</h1>");
  }
  res.end();
});

const port = 5000;
server.listen(port, () => {
  console.log(`Sunucu port ${port} de başlatıldı.`);
});
