const express = require('express');
const app = express();
const path = require ('path');

app.get('/', (req,res)=>{
    res.sendFile(path.resolve(__dirname, "./views/home.html"));
});

app.get ('/login', (req,res) => {
    res.sendFile (path.resolve(__dirname, 'views','login.html'))
})

app.get ('/crea-tu-cuenta', (req,res) => {
    res.sendFile (path.resolve(__dirname, 'views','register.html'))
})

app.use(express.static('public'));

app.listen(process.env.PORT || 3000 , ()=>{
    console.log('Servidor funcionando en el puerto 3000');
});
