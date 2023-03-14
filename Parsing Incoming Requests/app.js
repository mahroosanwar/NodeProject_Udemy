const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');

})

//this middleware always executes, not just for post requests but also for get
// app.use('/product', (req, res, next) => {
//     console.log(req.body);
//     res.redirect('/');
// });

//so we can use app.get() or app.post()
app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/',(req, res, next) => {
    res.send("<h1>Mahroos Anwar</h1>")
})


// const server = http.createServer(app);

// server.listen(3000);

app.listen(3000);