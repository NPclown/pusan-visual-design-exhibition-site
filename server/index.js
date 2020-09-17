const express = require('express');
const index = express();
const path = require('path');

index.use('/', express.static(path.resolve(__dirname, '../build')));
index.get('*', (req, res, next) => {
    if(req.path.split('/')[1] === 'static') return next();
    res.sendFile(path.resolve(__dirname, '../build/index.html'));
});

index.listen(4000, function () {
    console.log('Example index listening on port 4000!');
});