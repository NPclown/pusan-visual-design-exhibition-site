const express = require('express');
const index = express();
const path = require('path');
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)
var {nanoid} = require("nanoid");

db.defaults({guest_book: [], article_comment: []}).write()
// db.get('guest_book')
//     .push({id: nanoid(), comment: 'init_data', uploader_name: "박지홍", password: 1234, upload_time: Date.now()})
//     .write()

// db.get('article_comment')
//     .push({
//         id: nanoid(),
//         article_id: 1,
//         comment: 'init_data_1',
//         uploader_name: "박지홍",
//         password: 1234,
//         upload_time: Date.now()
//     })
//     .push({
//         id: nanoid(),
//         article_id: 1,
//         comment: 'init_data_2',
//         uploader_name: "박지홍",
//         password: 1234,
//         upload_time: Date.now()
//     })
//     .write()

index.use('/', express.static(path.resolve(__dirname, '../build')));
index.use(express.json());

index.get('/api/get_guest_book', (req, res, next) => {
    var data = db.get('guest_book').value();
    data = data.map(u => ({id: u.id, comment: u.comment, uploader_name: u.uploader_name}));
    res.json(data)
})
index.post('/api/add_guest_book', (req, res, next) => {
    console.log(req.body)
    db.get('guest_book')
        .push({
            id: nanoid(),
            comment: req.body.comment,
            uploader_name: req.body.uploader_name,
            password: req.body.password,
            upload_time: Date.now()
        })
        .write()
    res.send(true)
})
index.post('/api/del_guest_book', (req, res, next) => {
    db.get('guest_book')
        .remove({id: req.body.id, password: req.body.password})
        .write()
    res.send(true)
})
index.post('/api/get_article_comment', (req, res, next) => {
    var data = db.get('article_comment')
        .find({article_id: req.body.article_id})
        .value();
    data = data.map(u => ({id: u.id, comment: u.comment, uploader_name: u.uploader_name}));
    res.json(data)
})
index.post('/api/add_article_comment', (req, res, next) => {
    db.get('article_comment')
        .push({
            id: nanoid(),
            article_id: req.body.article_id,
            comment: req.body.comment,
            uploader_name: req.body.uploader_name,
            password: req.body.password,
            upload_time: Date.now()
        })
        .write()
    res.send(true)
})
index.post('/api/del_article_comment', (req, res, next) => {
    db.get('article_comment')
        .remove({id: req.body.id, article_id: req.body.id, password: req.body.password})
        .write()
    res.send(true)
})


index.listen(4000, function () {
    console.log('Example index listening on port 4000!');
});

