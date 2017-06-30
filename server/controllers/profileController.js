const app = require('../server')
const axios = require('axios')

exports.profileInfo = (req, res, next) => {

req.app.get('db').getOpenPositions(req.user.memberid).then(response => {
    let data = response
    console.log(response)
    let final = []
    let recursiveData = key => {
        let tickers = key.ticker
        let currentShares = Number(key.current_shares)
        let currentTotal = Number([key.current_total])
        
        axios.get(`http://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${tickers}&apikey=FYYJEATQ6K0NLL40`).then(resp => {
            let quoteInfo = resp.data
             let intraChange = []
             let latest = []
            

            Object.keys(quoteInfo).forEach(key => {
                let myObj = quoteInfo[key]
                intraChange.push(Number(myObj["08. Price Change"]), myObj["01. Symbol"])
                latest.push(Number(myObj["03. Latest Price"]), myObj["01. Symbol"]) 
            })
             
             let builder = (tickers, latest, intraChange) => {
                    let builtObject = {
                    ticker: tickers,
                    last: latest[0],
                    totalGl: (currentTotal - (latest[0] * currentShares)),
                    todayGl: (intraChange[0] * currentShares),
                    currentValue: (latest[0] * currentShares),
                    quantity: currentShares
                    }
                    final.push(builtObject)

                    if(data.length === 0){
                        res.status(200).send(final)
                    }
                    else { 
                        let cut = data.pop()
                        recursiveData(cut)
                    }
                }
                builder(tickers, latest, intraChange)
                
                console.log(final)
            })
        }
        let cut2 = data.pop() 
        recursiveData(cut2)
    })
}