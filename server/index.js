const express = require('express');
const index = express();
const path = require('path');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);
const {nanoid} = require("nanoid");

const types = ["vd", "acd", "ds", "dmd"]

index.use('/', express.static(path.resolve(__dirname, '../build')));
// index.use(express.json());

function date_format(time) {
    let date = new Date();
    let month;
    let day;
    date.setTime(time);
    let date_string = date.toLocaleDateString();

    if (date_string.includes(".")) {
        month = date_string.split('.')[1].trim();
        if (month.length === 1) {
            month = "0" + month;
        }

        day = date_string.split('.')[2].trim();
        if (day.length === 1) {
            day = "0" + day;
        }
    } else if (date_string.includes("-")) {
        month = date_string.split('-')[1];
        if (month.length === 1) {
            month = "0" + month;
        }

        day = date_string.split('-')[2];
        if (day.length === 1) {
            day = "0" + day;
        }
    }

    return `${date.getFullYear()}-${month}-${day}`
}

index.get('/api/search_profile', (req, res) => {
    try {
        let data = db.get('profile').value();
        data = data.filter(u => u.name.includes(req.query.name));

        let result;

        if (data.length === 0) {
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
                thumbnail_color: "/image/profile/" + data[0].id + "_color.jpg",
                thumbnail_gray: "/image/profile/" + data[0].id + "_gray.jpg"
            }];
        }

        res.json({
            "state": true,
            "data": result
        });
    } catch (error) {
        console.log(error);
        res.json({
            "state": false,
            "data": []
        });
    }
});

index.get('/api/search_article', (req, res) => {
    try {
        let data = db.get('article').value();
        data = data.filter(u => u.title.includes(req.query.title));

        let result;

        if (data.length === 0) {
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

        res.json({
            "state": true,
            "data": result
        });
    } catch (error) {
        console.log(error);
        res.json({
            "state": false,
            "data": []
        });
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
        res.json({
            "state": true,
            "data": data
        });
    } catch (error) {
        console.log(error);
        res.json({
            "state": false,
            "data": []
        });
    }
});
index.get('/api/get_profile_detail', (req, res) => {
    try {
        let data = db.get('profile').find({id: req.query.user_id}).value();
        let article_data = db.get('article').value();

        let vd_data = article_data.filter(function (t) {
            return t.type === "vd" && t.maker_id.includes(req.query.user_id)
        })[0]
        let acd_data = article_data.filter(function (t) {
            return t.type === "acd" && t.maker_id.includes(req.query.user_id)
        })[0]
        let ds_data = article_data.filter(function (t) {
            return t.type === "ds" && t.maker_id.includes(req.query.user_id)
        })[0]
        let dmd_data = article_data.filter(function (t) {
            return t.type === "dmd" && t.maker_id.includes(req.query.user_id)
        })[0]


        let result = {
            id: data.id,
            name: data.name,
            description: data.description,
            vd_id: vd_data.id,
            vd_name: vd_data.title,
            vd_thumbnail: "/image/thumbnail/vd/" + vd_data.id + ".jpg",
            acd_id: acd_data.id,
            acd_name: acd_data.title,
            acd_thumbnail: "/image/thumbnail/acd/" + acd_data.id + ".jpg",
            ds_id: ds_data.id,
            ds_name: ds_data.title,
            ds_thumbnail: "/image/thumbnail/ds/" + ds_data.id + ".jpg",
            dmd_id: dmd_data.id,
            dmd_name: dmd_data.title,
            dmd_thumbnail: "/image/thumbnail/dmd/" + dmd_data.id + ".jpg",
        }
        res.json({
            "state": true,
            "data": result
        });
    } catch (error) {
        console.log(error);
        res.json({
            "state": false,
            "data": {}
        });
    }
});
index.get('/api/get_article_list', (req, res) => {
    try {
        function get_name_by_id(ids) {
            let names = [];

            ids.forEach(function (id) {
                names.push(db.get('profile').find({id: id}).value().name);
            })

            return names;
        }

        if (types.includes(req.query.type)) {
            let data = db.get('article').value();

            data = data.filter(u => u.type === req.query.type);
            data = data.filter(u => u.id !== "null");
            data.sort(function (a, b) {
                return a.order - b.order;
            });

            data = data.map(u => ({
                id: u.id,
                title: u.title,
                maker: get_name_by_id(u.maker_id),
                thumbnail_path: "/image/thumbnail/" + u.type + "/" + u.id + ".jpg",
            }));

            res.json({
                "state": true,
                "data": data
            });
        } else {
            res.json({
                "state": false,
                "data": []
            });
        }
    } catch (error) {
        console.log(error);
        res.json({
            "state": false,
            "data": []
        });
    }
});
index.get('/api/get_article_detail', (req, res) => {
    try {
        function get_name_by_id(ids) {
            let names = [];

            ids.forEach(function (id) {
                names.push(db.get('profile').find({id: id}).value().name);
            })

            return names;
        }

        let data = db.get('article').find({id: req.query.article_id}).value();
        let result = {
            id: data.id,
            type: data.type,
            title: data.title,
            maker: get_name_by_id(data.maker_id),
            img_path: "/image/webboard/" + data.type + "/" + data.id + ".jpg",
            has_video: data.has_video,
            video_path: data.has_video ? "/image/video/" + data.type + "/" + data.id + ".mp4" : "null"
        };

        res.json({
            "state": true,
            "data": result
        });
    } catch (error) {
        console.log(error);
        res.json({
            "state": false,
            "data": []
        });
    }
});
index.get('/api/get_guest_book', (req, res) => {
    try {
        let data = db.get('guest_book').value();
        let result;

        data.sort(function (a, b) {
            return b.upload_time - a.upload_time;
        });

        result = data.length === 0 ? [] : data.map(u => ({
            id: u.id,
            comment: u.comment,
            upload_date: date_format(u.upload_time)
        }));

        res.json({
            "state": true,
            "data": result
        });
    } catch (error) {
        console.log(error);
        res.json({
            "state": false,
            "data": []
        });
    }
});
index.post('/api/add_guest_book', (req, res) => {
    try {
        db.get('guest_book')
            .push({
                id: nanoid(),
                comment: req.body.comment,
                upload_time: Date.now()
            })
            .write()
        res.json({
            "state": true
        });
    } catch (e) {
        console.log(e);
        res.json({
            "state": false
        });
    }
});

index.get('/api/get_article_comment', (req, res) => {
    try {
        let data = db.get('article_comment').value();
        data = data.filter(u => u.article_id === req.query.article_id);
        data.sort(function (a, b) {
            return b.upload_time - a.upload_time;
        });

        let result;

        if (data.length === 0) {
            result = [];
        } else {
            result = data.map(u => ({
                id: u.id,
                comment: u.comment,
                uploader_name: u.uploader_name,
                upload_date: date_format(u.upload_time)
            }));
        }

        let next = false;
        let start;
        let end;

        if (typeof req.query.page == 'undefined') {
            start = 0;
            end = start + 10;
        } else {
            start = (Number(req.query.page) - 1) * 10;
            end = start + 10;
        }

        let sliced_result = result.slice(start, end);

        if (result.length > end) {
            next = true;
        }

        res.json({
            "state": true,
            "data": {
                "count": data.length,
                "next": next,
                "comments": sliced_result
            }
        });
    } catch (e) {
        console.log(e);
        res.json({
            "state": false,
            "data": {}
        });
    }
});

index.post('/api/add_article_comment', (req, res) => {
    console.log(req.body)
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
        res.json({
            "state": true
        });
    } catch (e) {
        console.log(e);
        res.json({
            "state": false
        });
    }
});

index.post('/api/del_article_comment', (req, res) => {
    try {
        let data = db.get('article_comment').find({
            id: req.body.id,
            article_id: req.body.article_id,
            password: req.body.password
        }).value();

        if (typeof data == 'undefined') {
            res.json({
                "state": false,
            });
            return;
        }

        db.get('article_comment')
            .remove({id: req.body.id, article_id: req.body.article_id, password: req.body.password})
            .write();
        res.json({
            "state": true,
        })
    } catch (e) {
        console.log(e);
        res.json({
            "state": false
        });
    }
});

index.listen(4000, function () {
    console.log('Example index listening on port 4000!');
});

