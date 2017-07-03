angular.module('app').controller('homegraphCtrl', function($scope, homegraphSvc) {
    homegraphSvc.spyData().then((resp) => {
            $scope.chartInfo = resp.data["Time Series (Daily)"]
            console.log($scope.chartInfo)
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
            $scope.colors = [{
                backgroundColor: '#DCDCDC',
                // borderColor: "rgb(171,61,117)",
                // pointBackgroundColor: 'rgb(159,204,0)',
                // pointBorderColor: "rgb(55,200,6)",
                // pointHoverBackgroundColor: "rgb(217,211,177)",
                // pointHoverBorderColor: "rggulb(217,211,177)"
            }];
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
})