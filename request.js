const express = require('express');
const app = express();

const request = require('request');
const URL ="http://localhost:5000/";

app.get('/:so_a/:pheptinh/:so_b',(req,res)=>{
    const {so_a , pheptinh, so_b} = req.params
    const t = new Tinh(so_a,so_b,pheptinh)
    const result = t.getResult()
    res.send({
        so_a,
        so_b,
        pheptinh,
        result
    })
})


class Tinh{
    constructor(number_a,number_b,tenpheptinh){
        this.number_a = number_a;
        this.number_b = number_b;
        this.tenpheptinh = tenpheptinh
    }
    get pheptinh(){
        if(this.tenpheptinh==='cong') return '+'
        else if(this.tenpheptinh==='tru') return '-'
        else if(this.tenpheptinh==='nhan') return '*'
        return '/'
    }
    getResult(){
        const string = `${this.number_a} ${this.pheptinh} ${this.number_b}`
        return `${eval(string)}` 
    }
}

const port = process.env.PORT || 5000
app.listen(port,()=>{
    console.log('Server started on port '+port)
})

function cong(a, b, fn){
    const fullUrl = `${URL}${a}/cong/${b}`;
    request(fullUrl, (err, res, body)=>{
        if(isNaN(a) || isNaN(b))
            return 
        if (err) {
            return fn(null, err.message);//return console.log(err);//err
        } else {
            const resutl = JSON.parse(body); //console.log(typeof body)
            return fn(resutl.result, null);
        }
    })
}


function nhan(a, b, fn){
    const fullUrl = `${URL}${a}/nhan/${b}`;
    request(fullUrl, (err, res, body)=>{
        if (err) {
            return fn(null, err.message);//return console.log(err);//err
        } else {
            const resutl = JSON.parse(body); //console.log(typeof body)
            return fn(resutl.result, null);
        }
    })
}

function chia(a, b, fn){
    const fullUrl = `${URL}${a}/chia/${b}`;
    request(fullUrl, (err, res, body)=>{
        if (err) {
            return fn(null, err.message);//return console.log(err);//err
        } else {
            const resutl = JSON.parse(body); //console.log(typeof body)
            return fn(resutl.result, null);
        }
    })
}

cong(3, 4, (r, e) =>{
    if(e){
        console.log(e); //throw e;
    }else{
        console.log(r);
    }
})

nhan(3, 4, (r, e) =>{
    if(e){
        console.log(e); //throw e;
    }else{
        console.log(r);
    }
})

chia(8, 2, (r, e) =>{
    if(e){
        console.log(e); //throw e;
    }else{
        console.log(r);
    }
})
//(2+4)*5/2 = 15

cong(2, 4, (tong, err)=>{
    if(err) return console.log(err);
    nhan(tong, 5, (tich, err)=>{
        if(err) return console.log(err);
        chia(tich, 2, (result, err)=>{
            if(err) return console.log(err);
            console.log(result);
        })
    })
})



