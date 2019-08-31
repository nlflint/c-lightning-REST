const app = require('express')();

//LN_PATH is the path containing lightning-rpc file
global.ln = require('./lightning-client-js')(process.env.LN_PATH);

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization, filePath, macaroon"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
});

//Use declared routes here
app.use('/v1/rtl', require('./routes/rtl'));
app.use('/v1/getinfo', require('./routes/getinfo'));
app.use('/v1/newaddr', require('./routes/newaddr'));
app.use('/v1/getBalance', require('./routes/getBalance'));
app.use('/v1/listFunds', require('./routes/listfunds'));
app.use('/v1/getFees', require('./routes/getFees'));
app.use('/v1/withdraw', require('./routes/withdraw'));
app.use('/v1/peer', require('./routes/peers'));
app.use('/v1/channel', require('./routes/channel'));
app.use('/v1/pay', require('./routes/payments'));
app.use('/v1/invoice', require('./routes/invoice'));

module.exports = app;