const express = require('express') //api
const bodyParser = require('body-parser')
const BlockChain  = require('./blockchain')
const HTTP_PORT = process.env.HTTP_PORT || 3000

const app =  express()

app.use(bodyParser.json())
const bc = new BlockChain()
app.get(`/blocks`, (req, res)=>{
    res.json(bc.chain)
}
)
app.listen(HTTP_PORT, () =>{
    console.log(`server started at ${HTTP_PORT}`)
})

app.post('/mine', (req, res)=>{
    const data = req.body.data
    const block = bc.addBock(data)
    console.log(`new block added: ${block.toString()}`)
    res.redirect('/blocks')
})


