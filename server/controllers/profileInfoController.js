// const app = require('../server')
// const axios = require('axios')

// exports.profileInfo = (req, res, next) => {

//     let buysCombine = []
//     console.log(buysCombine)
//     let sellsCombine = []
//     console.log(sellsCombine)
//     // axios.get(`http://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=FYYJEATQ6K0NLL40`).then(response => {
//     //     const quote = response.data['Realtime Global Securities Quote']
//     //     const last = quote["03. Latest Price"]
//     //     const previousClose = quote["07. Close (Previous Trading Day)"]
//     req.app.get('db').getPurchasesbyId(req.user.memberid).then(response => {
//         let buys = response
//         let getBuys = (arr) => {
//             let indexArr = arr.map(e => e.ticker)
//             for (var i = arr.length - 1; i >= 0; i--) {
//                 if (indexArr.indexOf(indexArr[i]) !== i) {
//                     arr[indexArr.indexOf(indexArr[i])].numshares += arr[i].numshares
//                     arr[indexArr.indexOf(indexArr[i])].purchaseprice += arr[i].purchaseprice
//                     arr.splice(i, 1)
//                 }
//             }
//             return buysCombine.push(getBuys(buys))
//         }
//         // console.log("buys: ", getBuys(buys))
//     })

//     req.app.get('db').getSellsbyId(req.user.memberid).then(response => {
//         let sells = response
//         let getSells = (arr) => {
//             let indexArr = arr.map(e => e.ticker)
//             console.log("Sell: ",indexArr)
//         for (var i = arr.length - 1; i >= 0; i--) {
//                 if (indexArr.indexOf(indexArr[i]) !== i) {
//                     arr[indexArr.indexOf(indexArr[i])].numshares += arr[i].numshares
//                     arr[indexArr.indexOf(indexArr[i])].sellprice += arr[i].sellprice
//                     arr.splice(i, 1)
//                 }
//             }
//            return sellsCombine.push(getSells(sells))
//         }
//         // console.log("sells: ", getSells(sells))
//     })

    
// //    Object.assign(getSells, getBuys)
    


//     // get the info from each table. If purchase.ticker = sell.ticker subtract sells from purchases, else return. 






//     // const totalGL = 
// (((purchaseprice - (last * numshares)) * numshares)
//     // const todayGL = 
// ((previousClose - last) * numshares)
//     // const currentValue = (last * numshares)

//     // })


// }







// // <!--Ticker/Stock Name, last, Today’s Gain/Loss, Total Gain/Loss, current Value, Quantity-->