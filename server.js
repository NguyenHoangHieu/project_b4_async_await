const URL = 'https://chain.so/api/v2/get_address_balance/BTC/';

/**
 * 1NTxf1H9PoWCUWnKcdfLtFtgGWxRmWWq83
 * 19Li3BpAigvtv2Z9ce4B5WwjXixfwqkgVy
 * 18cBEMRxXHqzWWCxZNtU91F5sbUNKhL5PX
 * 1CK6KHY6MHgYvmRQ4PAafKYDrg1ejbH1cE
 * 1H4o9Mh7HyjPa46z4vtv7J8yzaK5RY4bXR
 */

const request = require('request');
// request(URL + '1CK6KHY6MHgYvmRQ4PAafKYDrg1ejbH1cE', (err, res, body) => {
//     if (err) {
//         return console.log(err);//err
//     } else {
//         const resutl = JSON.parse(body); //console.log(typeof body)
//         console.log(resutl.data.confirmed_balance);
//     }
// });

function getBalance(address, fn){
    return request(URL + address, (err, res, body) => {
        if (err) {
            return fn(null, err.message);//return console.log(err);//err
        } else {
            const resutl = JSON.parse(body); //console.log(typeof body)
            return fn(resutl.data.confirmed_balance, null);
        }
    });
}

getBalance('1CK6KHY6MHgYvmRQ4PAafKYDrg1ejbH1cE', (r, e) =>{
    if(e){
        console.log(e); //throw e;
    }else{
        console.log(r);
    }
})