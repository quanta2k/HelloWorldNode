const express=require('express');
const app=express()
const db=require('./db')
const bodyParser=require('body-parser')
app.use(bodyParser.json())




app.get('/',(req,res)=>{
    res.send('Welcome to my hotel... How can I help you?,we have a list of menus')
})



const personRoutes=require('./routes/personRoutes')
app.use('/person',personRoutes)

const menuItemRoutes=require('./routes/menuItemRoutes')
app.use('/menu',menuItemRoutes)

app.listen(3000,()=>{
    console.log('listening on port 3000');
})
