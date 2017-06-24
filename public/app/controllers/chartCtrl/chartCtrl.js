angular.module('app').controller('chartCtrl', function ($scope, chartSvc) {
    $scope.$watch("ticker", chartData)
    function chartData(ticker) {
        if (!ticker) return
        chartSvc.chartData(ticker).then((resp) => {
            $scope.chartInfo = resp.data["Time Series (Daily)"]
            let closeValue = []
            let dateAxis = []
            Object.keys($scope.chartInfo).forEach(key => {
                dateAxis.push(key)
                let myObj = $scope.chartInfo[key]
                closeValue.push(myObj["4. close"])
            })
            $scope.labels = dateAxis.reverse();
            $scope.series = dateAxis;
            $scope.data = closeValue.reverse();
            // $scope.onClick = function (points, evt) {
            //     console.log(points, evt);
            // };
            $scope.datasetOverride = [{
                yAxisID: 'y-axis-1'
            }];
            // $scope.colors = [{
            //     backgroundColor: 'rgb(62,32,61)',
            //     // borderColor: "rgb(171,61,117)",
            //     // pointBackgroundColor: 'rgb(159,204,0)',
            //     // pointBorderColor: "rgb(55,200,6)",
            //     // pointHoverBackgroundColor: "rgb(217,211,177)",
            //     // pointHoverBorderColor: "rggulb(217,211,177)"
            // }];
            $scope.options = {
                scales: {
                    yAxes: [{
                        id: 'y-axis-1',
                        type: 'linear',
                        display: true,
                        position: 'right'
                    }]
                }
            };


        })
    }

})