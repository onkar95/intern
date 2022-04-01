const express = require('express');
const app = express();
const Port = 5000;


 
app.listen(Port, () => {
    console.log('server started at ',Port);
})