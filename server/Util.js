const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'guest',
    password: 'donghyunah!!',
    database: 'pusan-visual-design-exhibition-db'
});

function Get_guest_book() {
    connection.query("select * from guest_book", (err, data) => {
        if (!err) {
            return data;
        } else {
            console.log(err);
            return null;
        }
    })
    connection.end();
}

export default Get_guest_book();