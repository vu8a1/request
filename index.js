const express = require('express');
const server = express()

const users =['Mehsul1','Mehsul2','Mehsul3','Mehsul4']

server.get('/', (req, res)=>{
    res.json( users )
})

server.get('/main/:id', (req, res)=>{
    const id = req.params.id;
    if((id<0)||(id>= users.length)){
        res.status(404).send('mehsul tapilmadi')
    }else{
        res.status(200).send(users[id])
    }
})

server.listen(3000, ()=>{
    console.log('server ise dusdu')
})