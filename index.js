require('dotenv').config()
const http = require('http')

// Controlador de solicitudes
function requestController(req, res) {
    console.log('Bienvenidos al curso')

    // Enviar cabeceras de respuesta
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })

    // Vista HTML simple
    res.end(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Servidor Node.js</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    height: 100vh;
                }
                h1 {
                    color: #333;
                }
                p {
                    color: #555;
                    font-size: 1.2rem;
                }
                .box {
                    background: white;
                    padding: 30px;
                    border-radius: 10px;
                    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
                    text-align: center;
                }
            </style>
        </head>
        <body>
            <div class="box">
                <h1>🚀 Bienvenidos al curso 🚀</h1>
                <p>Tu servidor Node.js está funcionando correctamente.</p>
                <p>Puerto: ${process.env.PORT}</p>
            </div>
        </body>
        </html>
    `)
}

const server = http.createServer(requestController)

// Puerto desde .env o 4000 por defecto
const PORT = process.env.PORT || 4000

server.listen(PORT, function() {
    console.log("Aplicacion corriendo en: " + PORT)
})
