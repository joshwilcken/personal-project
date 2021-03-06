const app = require('../server')
const axios = require('axios')

exports.profileInfo = (req, res, next) => {

    req.app.get('db').getOpenPositions(req.user.memberid).then(response => {
        let data = response
        let final = []
        let totals = []
        let recursiveData = key => {
            let tickers = key.ticker
            let currentShares = Number(key.current_shares)
            let currentTotal = Number([key.current_total])

            axios.get(`http://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${tickers}&apikey=FYYJEATQ6K0NLL40`).then(resp => {
                let quoteInfo = resp.data
                let intraChange = []
                let latest = []
                let symbol = []

                Object.keys(quoteInfo).forEach(key => {
                    let myObj = quoteInfo[key]
                    intraChange.push(Number(myObj["08. Price Change"]), myObj["01. Symbol"])
                    latest.push(Number(myObj["03. Latest Price"]), myObj["01. Symbol"])
                    symbol.push(myObj["01. Symbol"])
                })

                let builder = (symbol, latest, intraChange) => {
                    let builtObject = {
                        ticker: symbol[0],
                        last: latest[0],
                        totalGl: (currentTotal - (latest[0] * currentShares)).toFixed(2),
                        todayGl: (intraChange[0] * currentShares).toFixed(2),
                        currentValue: (latest[0] * currentShares).toFixed(2),
                        quantity: currentShares
                    }
                    final.push(builtObject)
                    if (data.length === 0) {
                        
                        res.status(200).send(final.filter((el) => {
                            return el.quantity !== 0;
                        }))
                    } else {
                        let cut = data.pop()
                        recursiveData(cut)
                    }
                }
                builder(symbol, latest, intraChange)
            })
        }
        let cut2 = data.pop()
        recursiveData(cut2)
    })
}