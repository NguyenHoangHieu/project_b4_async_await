const request = require('request');
const URL = "http://localhost:5000/";

//async-await dong bo, bien bat dong bo => dong bo
//async chi lam viec voi promise

function cong(a, b) {
    return new Promise((resolve, reject) => {

        if (isNaN(a) || isNaN(b))
            return reject(new Error('Invalid parameters'));

        const fullUrl = `${URL}${a}/cong/${b}`;
        request(fullUrl, (err, res, body) => {
            return resolve(JSON.parse(body).result); //console.log(typeof body)
        })
    })
}

function nhan(a, b) {
    return new Promise((resolve, reject) => {

        if (isNaN(a) || isNaN(b))
            return reject(new Error('Invalid parameters'));

        const fullUrl = `${URL}${a}/nhan/${b}`;
        request(fullUrl, (err, res, body) => {
            return resolve(JSON.parse(body).result); //console.log(typeof body)
        })
    })
}

function chia(a, b) {
    return new Promise((resolve, reject) => {

        if (isNaN(a) || isNaN(b))
            return reject(new Error('Invalid parameters'));

        const fullUrl = `${URL}${a}/chia/${b}`;
        request(fullUrl, (err, res, body) => {
            return resolve(JSON.parse(body).result);
        })
    })
}

async function TinhTong() {
    let t = await cong(2, 4);
    let n = await nhan(t, 5);
    let kq = await chia(n, 2);
    return kq;
}

TinhTong()
    .then(result => console.log(result))
    .catch(err => console.log(err.message))