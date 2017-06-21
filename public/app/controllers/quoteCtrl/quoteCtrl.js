angular.module('app').controller('quoteCtrl', function ($scope, $interval, quoteSvc) {

    // detailed quote API call
    // $scope.getQuote = (ticker) => {
    //     quoteSvc.getQuote(ticker).then((resp) => {
    //         $scope.tickerData = resp.data.query.results.quote
    //         $scope.ticker = '';
    //         $scope.showMe = true;
    //     })

    // }
    // // Real time quote API call
    // $scope.realTimeData = (ticker) => {
    //     quoteSvc.realTimeData(ticker).then((resp) => {
    //         $scope.liveData = resp.data["Realtime Global Securities Quote"];
    //         $scope.showMe = true;
    //     })

    // }
    // // API call for line chart
    // $scope.chartData = (ticker) => {
    //     quoteSvc.chartData(ticker).then((resp) => {
    //         $scope.chartInfo = resp.data["Time Series (Daily)"]
    //         let closeValue = []
    //         let dateAxis = []
    //         Object.keys($scope.chartInfo).forEach(key => {
    //             dateAxis.push(key)
    //             let myObj = $scope.chartInfo[key]
    //             closeValue.push(myObj["4. close"])
    //         })
        

    //     })
    // }
    // // Checks to see if the client presses the 'Enter' key
    // $scope.checkEvent = (e, ticker) => {
    //     if (e.keyCode === 13) {
    //         $scope.showMe = true;
    //         $scope.realTimeData(ticker);
    //         $scope.getQuote(ticker);
    //     }
    // }

    
    // Updates the quote every 60 seconds
    // $interval(() => {
    //     $scope.realTimeData(ticker)

    // }, 60000)

    $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
  $scope.series = ['Series A', 'Series B'];
  $scope.data = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };
  $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
  $scope.options = {
    scales: {
      yAxes: [
        {
          id: 'y-axis-1',
          type: 'linear',
          display: true,
          position: 'left'
        },
        {
          id: 'y-axis-2',
          type: 'linear',
          display: true,
          position: 'right'
        }
      ]
    }
  };



})