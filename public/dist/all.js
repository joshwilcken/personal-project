'use strict';

angular.module('app', ['ui.router', 'chart.js']).config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('', '/');

    $stateProvider.state('quote', {
        url: '/quote',
        templateUrl: './app/views/quote.html',
        controller: 'quoteCtrl'
    }).state('groupCreator', {
        url: 'group',
        templateUrl: './app/views/groupCreator.html'
    }).state('home', {
        url: '/home',
        templateUrl: './app/views/home.html'
    });
});
'use strict';

angular.module('app').controller;
'use strict';

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
  $scope.data = [[65, 59, 80, 81, 56, 55, 40], [28, 48, 40, 19, 86, 27, 90]];
  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };
  $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
  $scope.options = {
    scales: {
      yAxes: [{
        id: 'y-axis-1',
        type: 'linear',
        display: true,
        position: 'left'
      }, {
        id: 'y-axis-2',
        type: 'linear',
        display: true,
        position: 'right'
      }]
    }
  };
});
'use strict';

angular.module('app').service('quoteSvc', function ($http) {
    this.getQuote = function (ticker) {
        return $http.get('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22' + ticker + '%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=');
    };

    this.realTimeData = function (ticker) {
        return $http.get('http://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=' + ticker + '&apikey=FYYJEATQ6K0NLL40');
    };

    this.chartData = function (ticker) {
        return $http.get('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=' + ticker + '&apikey=FYYJEATQ6K0NLL40');
    };
});