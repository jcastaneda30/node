const http = require("http");

//Crear un server
//request es la solicitud que le llega al server y response la respuesta que nosotros damos creo

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page')
      } else if (req.url === '/about') {
        res.end('Here is our short history')
      } else {
        res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">back home</a>
        `)
      }
    }
);
//Es el puerto del que server estara escuchando las solicitudes
server.listen(3000);
