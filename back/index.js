const express = require('express')
const app = express()
const PORT = 3838
const bodyparser=require('body-parser');
const cors=require('cors');
app.use(bodyparser.json())
app.use(cors());
const mongoose=require("mongoose");
app.get('/api', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})

const designSchema = new mongoose.Schema({
    title: String,
    description:String,
    price:Number,
    imageurl:String
});
const designModel=mongoose.model("Design",designSchema);

app.get('/api/designs', async (req,res)=>{
    const {title}=req.query;
    const designs=await designModel.find()
    /*if(!title){
        res.status(200).send(designs)
    }
    else{
        const searchdesign=designs.filter((x)=>x.title.toLowerCase().trim().includes())
    }*/
    res.status(200).send(designs)
})
app.get('/api/designs/:id',async (req,res)=>{
    const id=req.params.id;
    const design=await designModel.findById(id)
    res.status(200).send(design)
})
app.delete('/api/designs/:id',async (req,res)=>{
    const id=req.params.id;
    const deletedesign=await designModel.findByIdAndDelete(id)
    res.status(203).send(deletedesign)
})
app.post('/api/designs',async (req,res)=>{
    const {title,price,description,imageurl}=req.body;
    const newdesign=new designModel({
        title: title,
        description:description,
        price:price,
        imageurl:imageurl
    })
    await newdesign.save();
    res.status(204).send({
        message:`${newdesign.title} posted sucessfully!`,
        payload:newdesign
    })
})




mongoose.connect('mongodb+srv://asif_admin:Admin123@app.6i78tjn.mongodb.net/?retryWrites=true&w=majority').then(()=>{
    console.log('Mongo db connected');
})