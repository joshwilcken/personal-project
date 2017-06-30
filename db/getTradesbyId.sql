select stocks.ticker, stocks.numshares, sells.numshares as sell_shares, stocks.purchaseprice, sells.sellprice as sell_total
from stocks
join sells on stocks.memberid=sells.memberid
where stocks.memberid=sells.memberid