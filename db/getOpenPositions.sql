select qbuys.ticker, qbuys.total_purchaseprice-qsells.total_sellprice as current_total, qbuys.total_purchaseshares-qsells.total_sellshares as current_shares
from
(select sells.ticker, sum(numshares) as total_sellshares, sum(sellprice) as total_sellprice
from sells
where memberid = 7
group by ticker) as qsells, (select stocks.ticker, sum(numshares) as total_purchaseshares, sum(purchaseprice) as total_purchaseprice from stocks 
where memberid = 7
group by ticker) as qbuys
where qbuys.ticker=qsells.ticker;