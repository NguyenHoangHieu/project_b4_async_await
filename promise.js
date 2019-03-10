// const express = require('express');
// const app = express();

const request = require('request');
const URL = "http://localhost:5000/";


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

// cong(2, 'a')
//     .then(result => console.log(result))//then la tra ve ket qua
//     .catch(err => console.log(err.message))//catch la tra ve loi

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

// (2+4) * 5 / 2
// cong(2,4)
// .then(tong => {
//     nhan(tong,5)
//     .then(tich=>{
//         chia(tich,2)
//         .then(result=>console.log(result))
//         .catch(err=>console.log(err))
//     })
//     .catch(err=>console.log(err))
// })
// .catch(err=>console.log(err))

// cong(2, 4)
//     .then(result => nhan(result, 5)
//         .then(result_x => console.log(result_x))
//         .catch(err_x => console.log(err_x)))
//     .catch(err => console.log(err.message));

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

// (2+4) * 5 / 2
// cong(2, 4)
//     .then(result => nhan(result, 5)
//         .then(result_x => chia(result_x, 2).then(result_chia => console.log(result_chia)).catch(err_chia => console.log(err_chia)))
//         .catch(err_x => console.log(err_x)))
//     .catch(err => console.log(err.message));

// cong(2, 4)
//     .then(result => {
//         nhan(result, 5)
//         .catch(err => console.log(err.message));
//     })

// cong(2, 4)
//     .then(tong => nhan(tong, 5))
//     .then(nhan => chia(nhan, 2))
//     .then(result => console.log(result))
//     .catch(err => console.log(err));

//promise no se chay cham hon so voi callbackfunction


function tinhDienTich(a,b,h,cb){
    cong(a,b)
    .then(tong => nhan(tong,h))
    .then(tich=>chia(tich,2))
    .then(result => cb(result,null))
    .catch(err=>cb(null,err.message))
}

// tinhDienTich(2,4,5,(kq,err)=>{
//     if(err) return;
//     console.log(kq)
// })

function tinhDienTich02(a,b,h){
    return cong(a,b)
    .then(tong => nhan(tong,h))
    .then(tich=>chia(tich,2))
}
tinhDienTich02(4,5,6)
.then(result=>console.log(result))
.catch(e=>console.log(e))


//mo rong
Promise.all([cong(2, 4).then(x=> nhan(x, 5).then(x=> chia(x, 2)))])
.then(r=>console.log(r))

Promise.all([cong(2, 4), chia(5,2)])
.then(result => nhan(result[0], result[1]))
.then(r=>console.log(r))

