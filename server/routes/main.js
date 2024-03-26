const express = require('express');
const router =express.Router();



//Routes

router.get('/',(req,res)=>{
    const locals ={
        title : 'NodeJs Blogs',
        description:"Simple blog created with NodeJS, express and MongoDB"

    }
    res.render('index',{locals});
})
router.get('/about',(req,res)=>{
    const locals ={
        title : 'About',
        description:"Simple blog created with NodeJS, express and MongoDB"

    }
    res.render('about',{locals});
})

module.exports = router