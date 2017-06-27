const app = require('../server')
const axios = require('axios')
const moment = require('moment')



exports.buyShares = (req, res, next) => {
    const { ticker, shares } = req.body
    const currentDate = moment().format('ll')

    axios.get(`http://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=FYYJEATQ6K0NLL40`).then(response => {
        const currentPrice = response.data['Realtime Global Securities Quote']['03. Latest Price']
        let sharePrice = (shares * currentPrice)

        req.app.get('db').purchaseStock([req.user.memberid, ticker, shares, sharePrice, currentDate]).then(response => {
            res.status(200).send("Purchase Successful")
        })
    })

}

exports.sellShares = (req, res, next) => {
    const { ticker, shares } = req.body
    const currentDate = moment().format('ll')
    
    axios.get(`http://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=FYYJEATQ6K0NLL40`).then(response => {
        const currentPrice = response.data['Realtime Global Securities Quote']['03. Latest Price']
        let sharePrice = (shares * currentPrice)

        req.app.get('db').sellStock([req.user.memberid, ticker, shares, sharePrice, currentDate]).then
        (response => {
            res.status(200).send("Sell Sussessful")
        })
    })
    
}