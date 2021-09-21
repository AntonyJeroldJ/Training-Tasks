const express = require('express')
const router = express.Router()
const user = require('../models/user')


router.get('/', async(req,res) => {
    try{
           const users = await user.find()
           res.json(users)
    }catch(err){
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => {
    const users = new user({
        business_name: req.body.business_name,
        contact_person: req.body.contact_person,
        contact_no: req.body.contact_no,
        address: req.body.address,
        postal: req.body.postal,
        country: req.body.country,
        state: req.body.state,
        city: req.body.city,
        fax_no: req.body.fax_no,
        phone_no: req.body.phone_no,
        email_id: req.body.email_id,
        website: req.body.website,
        second_address: req.body.second_address
    })

    try{
        const a1 =  await users.save() 
        res.json(a1)
    }catch(err){
        res.send('Error' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
           const users = await user.findById(req.params.id)
           res.json(users)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.delete('/:id', async(req,res) => {
    try{
           const users = await user.findById(req.params.id)
           const a1 = await users.remove()
        res.json(a1) 
           
    }catch(err){
        res.send('Error ' + err)
    }
})

router.patch('/:id',async(req,res)=> {
    try{
        const users = await user.findById(req.params.id)     
        users.business_name= req.body.business_name
        users.contact_person= req.body.contact_person
        users.contact_no= req.body.contact_no
        users.address= req.body.address
        users.postal= req.body.postal
        users.country= req.body.country
        users.state= req.body.state,
        users.city= req.body.city,
        users.fax_no= req.body.fax_no,
        users. phone_no= req.body.phone_no,
        users.email_id=req.body.email_id,
        users.website=req.body.website,
        users.second_address= req.body.second_address

        const a1 = await users.save()
        res.json(a1)   
    }catch(err){
        res.send('Error'+ err)
    }

})


module.exports = router
 