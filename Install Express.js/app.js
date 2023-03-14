const http = require('http');

const express = require('express');

const app = express();

// app.use((req, res, next) => {
//     console.log('In the middleware!')
//     next(); //Allows the request to continue to the next middleware in line
// })

// app.use((req, res, next) => {
//     console.log('In another middleware!')
//     res.send("<h1>Mahroos Anwar</h1>");
// })

app.use('/add-product', (req, res, next) => {
    console.log('In another middleware!')
    res.send("<h1>The Add-product</h1>");
})

app.use('/',(req, res, next) => {
    console.log('In the middleware!')
    res.send("<h1>Mahroos Anwar</h1>")
})


// const server = http.createServer(app);

// server.listen(3000);

app.listen(3000);
