const express = require('express');
const index = express();
const path = require('path');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);
const {nanoid} = require("nanoid");

const types = ["visual_design", "advertising_conti_design", "design_seminar", "digital_media_design"]

index.use('/', express.static(path.resolve(__dirname, '../build')));
index.use(express.json());

function date_format(time) {
    let date = new Date();
    date.setTime(time);

    let month = date.getMonth() + 1;
    month = month.toString()
    if (month.length == 1) {
        month = "0" + month;
    }

    let day = date.getDay();
    day = day.toString()
    if (day.length == 1) {
        day = "0" + day;
    }

    return `${date.getFullYear()}-${month}-${day}`
}

index.get('/api/search_profile', (req, res) => {
    try {
        let data = db.get('profile').value();
        data = data.filter(u => u.name.includes(req.query.name));

        let result;

        if (data.length == 0) {
            result = []
        } else if (data.length >= 2) {
            result = data.map(u => ({
                id: u.id,
                name: u.name,
                thumbnail_color: "/image/profile/" + u.id + "_color.jpg",
                thumbnail_gray: "/image/profile/" + u.id + "_gray.jpg"
            }));
        } else {
            result = [{
                id: data[0].id,
                name: data[0].name,
                thumbnail_color: "/image/profile/" + data.id + "_color.jpg",
                thumbnail_gray: "/image/profile/" + data.id + "_gray.jpg"
            }];
        }

        res.json(result);
    } catch (error) {
        console.log(error);
        res.send(false);
    }
});
index.get('/api/search_article', (req, res) => {
    try {
        let data = db.get('article').value();
        data = data.filter(u => u.title.includes(req.query.title));

        let result;

        if (data.length == 0) {
            result = []
        } else if (data.length >= 2) {
            result = data.map(u => ({id: u.id, title: u.title, maker: u.maker, thumbnail_path: u.thumbnail_path}));
        } else {
            result = [{
                id: data[0].id,
                title: data[0].title,
                maker: data[0].maker,
                thumbnail_path: data[0].thumbnail_path
            }];
        }

        res.json(result);
    } catch (error) {
        console.log(error);
        res.send(false);
    }
});
index.get('/api/get_profile_list', (req, res) => {
    try {
        let data = db.get('profile').value();
        data = data.map(u => ({
            id: u.id,
            name: u.name,
            thumbnail_color: "/image/profile/" + u.id + "_color.jpg",
            thumbnail_gray: "/image/profile/" + u.id + "_gray.jpg"
        }));
        res.json(data);
    } catch (error) {
        console.log(error);
        res.send(false);
    }
});
index.get('/api/get_profile_detail', (req, res) => {
    try {
        let data = db.get('profile').find({id: req.query.user_id}).value();
        console.log(data)
        // 프로필에서 가져오는 데이터와 아티클에서 가져오는 걸 합쳐야해요, 지금은 붙여놨어요, 아티클 보내줘야 작업해요 ㅠㅠ
        // data = data.map(u => ({
        //     id: u.id,
        //     name: u.name,
        //     description: u.description,
        //     vd_id: "sample_article_1_ID",
        //     vd_name: "sample_article_1",
        //     vd_thumbnail: "/image/article/article_1_thumbnail.jpg",
        //     acd_id: "sample_article_2_ID",
        //     acd_name: "sample_article_2",
        //     acd_thumbnail: "/image/article/article_2_thumbnail.jpg",
        //     ds_id: "sample_article_3_ID",
        //     ds_name: "sample_article_3",
        //     ds_thumbnail: "/image/article/article_3_thumbnail.jpg",
        //     dmd_id: "sample_article_4_ID",
        //     dmd_name: "sample_article_4",
        //     dmd_thumbnail: "/image/article/article_4_thumbnail.jpg"
        // }));
        result = {
            id: data.id,
            name: data.name,
            description: data.description,
            vd_id: "SOfcGSM6NXtpqszVhXMZ8",
            vd_name: "sample_article_1",
            vd_thumbnail: "/image/article/article_1_thumbnail.jpg",
            acd_id: "IUYkBnytp6GoVeTLswq9G",
            acd_name: "sample_article_2",
            acd_thumbnail: "/image/article/article_2_thumbnail.jpg",
            ds_id: "OmCnmh1QNPdcqi4MmYQPQ",
            ds_name: "sample_article_3",
            ds_thumbnail: "/image/article/article_3_thumbnail.jpg",
            dmd_id: "5v4bdO2qqYVfMBjrLz_wi",
            dmd_name: "sample_article_4",
            dmd_thumbnail: "/image/article/article_4_thumbnail.jpg",
        }
        res.json(result);
    } catch (error) {
        console.log(error);
        res.send(false);
    }
});
index.get('/api/get_article_list', (req, res) => {
    try {
        if (types.includes(req.query.type)) {
            let data = db.get('article').value();
            data = data.filter(u => u.type === req.query.type);
            data = data.map(u => ({id: u.id, title: u.title, thumbnail_path: u.thumbnail_path}));
            res.json(data);
        } else {
            res.send(false);
        }
    } catch (error) {
        console.log(error);
        res.send(false);
    }
});
index.get('/api/get_article_detail', (req, res) => {
    try {
        let data = db.get('article').find({id: req.query.article_id}).value();
        let profile_data = db.get('profile').find({id: data.maker_id}).value();
        result = [{id: data.id, title: data.title, maker: profile_data.name, img_path: data.img_path}];
        res.json(result);
    } catch (error) {
        console.log(error);
        res.send(false);
    }
});
index.get('/api/get_guest_book', (req, res) => {
    try {
        let data = db.get('guest_book').value();
        let result;

        if (data.length == 0) {
            result = [];
        } else {
            result = data.map(u => ({id: u.id, comment: u.comment}));
        }

        res.json(result);
    } catch (error) {
        console.log(error);
        res.send(false);
    }
});
index.post('/api/add_guest_book', (req, res) => {
    try {
        db.get('guest_book')
            .push({
                id: nanoid(),
                comment: req.body.comment,
                password: req.body.password,
                upload_time: Date.now()
            })
            .write()
        res.send(true);
    } catch (e) {
        console.log(e);
        res.send(false);
    }
});
// index.post('/api/del_guest_book', (req, res) => {
//     try {
//         db.get('guest_book').remove({id: req.body.id, password: req.body.password}).write();
//         res.send(true);
//     } catch (e) {
//         console.log(e);
//         res.send(false);
//     }
// });
index.get('/api/get_article_comment', (req, res) => {
    try {
        let data = db.get('article_comment').value();
        data = data.filter(u => u.article_id === req.query.article_id);

        let result;

        if (data.length == 0) {
            result = [];
        } else {
            result = data.map(u => ({
                id: u.id,
                comment: u.comment,
                uploader_name: u.uploader_name,
                upload_date: date_format(u.upload_time)
            }));
        }

        res.json(result);
    } catch (e) {
        console.log(e);
        res.send(false);
    }
});
index.post('/api/add_article_comment', (req, res) => {
    try {
        db.get('article_comment')
            .push({
                id: nanoid(),
                article_id: req.body.article_id,
                comment: req.body.comment,
                uploader_name: req.body.uploader_name,
                password: req.body.password,
                upload_time: Date.now()
            })
            .write();
        res.send(true);
    } catch (e) {
        console.log(e);
        res.send(false);
    }
});
index.post('/api/del_article_comment', (req, res) => {
    try {
        db.get('article_comment')
            .remove({id: req.body.id, article_id: req.body.id, password: req.body.password})
            .write();
        res.send(true)
    } catch (e) {
        console.log(e);
        res.send(false);
    }
});


index.listen(4000, function () {
    console.log('Example index listening on port 4000!');
});

