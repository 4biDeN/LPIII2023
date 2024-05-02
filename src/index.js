const express = require('express');

const app = express();
const cookieParser = require('cookie-parser');
const port = 3000;

app.use(express.json())

require('./services/swagger');
require('./routes')(app);


app.use('/v1/docs', express.static('src/views'));
app.use('/docs/swagger.yaml', express.static('src/docs/swagger.yaml'));
app.use(cookieParser());

app.listen(port)//, () => {
//     console.log(`Aplicação rodando na porta ${port}`);
// });

// app.get('/', (req, res) => {res.send("Hello World");});

app.get('/', (req,res) => {
    res.cookie('meuCookie2024', 'e bom');
    res.send('API HORUS UP!'); 
});