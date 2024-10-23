const express= require('express');
const mongoose=require('mongoose');
const  cors = require('cors');


const app =express();
const PORT =3000;

const MONGOURL = "mongodb://localhost:27017/food"



app.use(cors());
app.use(express.json());


mongoose.connect(MONGOURL,{
    })
    .then(()=>{
        console.log("database connected ")
    
    })
    .catch((err)=>{
        console.log(`database not connected ${err}`);

    })

const itemSchema = new mongoose.Schema({
        name: { type: String, required: true },
        details: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: Number, required: true }, 
});

const Item = mongoose.model('Item', itemSchema);
app.post('/items',async(req,res)=>{
    try{
        const newItem =new Item(req.body);
        await newItem.save();
        res.status(201).send(newItem);

    }catch(error){
        res.status(400).send(error);
    }
});

app.get('/items', async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).send(items);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});




