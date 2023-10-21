const express = require('express');
const { generateFile } = require('./generateFile')
const {executeCpp} = require('./executeCode')
const cors = require("cors")
const app = express();



// decode the parse 
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
    return res.json({ text : "Hello"})
});

app.post('/run', async (req, res) => {
    const {language = "cpp", code, input} = req.body;

    console.log("This is the code");

    if(code === undefined){
        return res.status(400).json({ "success": false});
    }
    try{
        
        const filePath = await generateFile(language, code);
        const output = await executeCpp(filePath, input);
        console.log(output);
        return res.json({output, filePath});

    } catch(err) {
        res.status(500).json({ "error": err });
    }
    
     


});

app.listen(5000, ()=>{
    console.log('Listening on port 5000!');
});
