const express = require('express');
const youtubeRouter = express.Router();

let youtubes = [];

youtubeRouter.get('/', (req, res) => {

    // select * from youtubes

    res.json(youtubes)
})

youtubeRouter.post('/', (req, res) => {
    // validation
    console.log(req.body)

    if(req.body.thumb === '') {
        res.status(400).json({
            message: 'thumb is required'
        })
    }

    if(req.body.title === '') {
        res.status(400).json({
            message: 'title is required'
        })
    }

    if(req.body.channel === '') {
        res.status(400).json({
            message: 'channel is required'
        })
    }

    const totalViews = req.body.total_views;
    if(totalViews > 0 ||  totalViews < 0) {
        const status = totalViews > 0 ? 'greater' : 'less'
        res.status(400).json({
            message: 'toal views can not be ' + status + ' than 0'
        })
    }

   
    const creationTime = req.body.creation_time;
    const date_regex = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;
    if (!(date_regex.test(creationTime))) {
        res.status(400).json({
            message: 'invalid type of date'
        })
    }
    

})

module.exports = youtubeRouter;