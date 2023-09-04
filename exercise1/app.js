const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express()
const port = 4000
app.use(bodyParser.urlencoded({
    extended: false
}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', function(req, res) {

    res.render('index');
});

app.post('/calculate', (req,res)=>{
    const { num1,num2 } =  req.body;
    const sum = Number(num1) + Number(num2);
    const difference = Number(num1) - Number(num2);
    const product = Number(num1) * Number(num2);
    const quotient = Number(num1) / Number(num2);
    res.render("result", {sum, difference, product, quotient});

}
);

app.listen(port, ()=>{
 
    console.log(`Server running on port ${port}`);
    console.log('views', path.join(__dirname, 'views'));
}
);