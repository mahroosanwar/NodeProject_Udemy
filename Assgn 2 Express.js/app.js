const express = require('express');

const app = express();

// app.use((req, res, next) => {
//     console.log("First Middleware")
//     next();
// });

// app.use((req, res, next) => {
//     console.log("Second Middleware");
//     res.send("<p>Assignment Solved (almost!)</p>");
// })

app.use('/users', (req, res, next) => {
    console.log("/users Second Middleware");
    res.send("<p>The Middleware Just handle /user </p>");
})

app.use('/', (req, res, next) => {
    console.log("/ First Middleware")
    res.send("<p>The Middleware Just handle /</p>")
});



app.listen(3000);