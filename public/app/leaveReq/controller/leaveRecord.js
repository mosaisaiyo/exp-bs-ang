/**
 * http://usejsdoc.org/
 */

define('leaveRec', ['angular', 'mosTable'], function(angular, mosTable) {

    'use strict';

    var app = angular.module('leaveReqApp', []);

    app.controller('recordCtrl', ['$scope', '$http', function($scope, $http) {

        /*-- 单击创建按钮 --*/
        $scope.createLeave = function() {
            $http({
                method: 'GET',
                url: '/data/leaverec?action=new'
            }).then(function successCallback(response) {
                //response.data["id"]=$scope.leaveRecord.length + 1;
                $scope.leaveRecord.push(response.data);
            }, function errorCallback(response) {
                // 请求失败执行代码
            });
        }

        /*-- 删除记录 --*/
        $scope.removeRec = function(id) {
            var recTemp = [];
            for (var i = 0; i < $scope.leaveRecord.length; i++) {
                if ($scope.leaveRecord[i]["id"] != id)
                    recTemp.push($scope.leaveRecord[i]);
            }
            $scope.leaveRecord = recTemp;
        }

        /*-- 修改记录 --*/
        $scope.editRec = function(id) {
            var recTemp = [];
            for (var i = 0; i < $scope.leaveRecord.length; i++) {
                if ($scope.leaveRecord[i]["id"] == id)
                    $scope.leaveRecord[i]["status"] = "Modified";
            }
        }

        /*-- 初始化表格 --*/
        $http({
            method: 'GET',
            url: '/data/leaverec?action=init'
        }).then(function successCallback(response) {
            $scope.leaveRecord = [];
            for (var i = 0; i < response.data.length; i++)
                $scope.leaveRecord.push(response.data[i]);
        }, function errorCallback(response) {
            // 请求失败执行代码
        });

        /*-- 测试事件 --*/
        $scope.initClick = function() {
            // Define mockdata
            var oITComp = {
                column: { 'name': '名称', 'address': '地址', 'tel': '电话', 'industry': '行业', 'rank': '排名' },
                items: [{ 'name': 'SAP', 'address': 'Pudong Jinke road.', 'tel': '02138896030', 'industry': 'IT/Internet/ERP', 'rank': '17' },
                    { 'name': 'SalesForce', 'address': 'Pudong Jinke road.', 'tel': '02138896031', 'industry': 'IT/Internet/CRM' },
                    { 'name': 'Alibaba', 'address': 'Pudong Jinke road.', 'tel': '02138896033', 'industry': 'Internet/Ecom', 'rank': '17' },
                    { 'name': 'Baidu', 'address': 'Pudong Jinke road.', 'tel': '02138896032', 'industry': 'Internet' }
                ]
            };

            var oWeather = {
                column: { date: '日期', week: '星期', weather: '天气', temp: '温度' },
                items: [{ date: '2019.06.28', week: 'Friday', weather: 'Sunny', temp: '28' },
                    { date: '2019.06.29', week: 'Saturday', weather: 'Sunny', temp: '28' },
                    { date: '2019.06.30', week: 'Sunday', weather: 'Rainy', temp: '21' },
                    { date: '2019.07.01', week: 'Monday', weather: 'Rainy', temp: '22' },
                    { date: '2019.07.02', week: 'Tuesday', weather: 'Cloudy', temp: '24' }
                ]
            };

            var oD0010 = {
                column: { ZNUM: "序号", ZREMARK: "备注" },
                items: [{
                        "MANDT": "001",
                        "ZDATE": 20190628,
                        "ZZONE": "00",
                        "ZNUM": 1,
                        "ZREMARK": "今天是：[星期五]"
                    },
                    {
                        "MANDT": "001",
                        "ZDATE": 20190628,
                        "ZZONE": "10",
                        "ZNUM": 2,
                        "ZREMARK": "上证指数收盘:2978.88, -0.60 %"
                    },
                    {
                        "MANDT": "001",
                        "ZDATE": 20190628,
                        "ZZONE": "11",
                        "ZNUM": 3,
                        "ZREMARK": "过去1年上证指数最高点:3288.45,过去1年上证指数最低点:2440.91"
                    },
                    {
                        "MANDT": "001",
                        "ZDATE": 20190628,
                        "ZZONE": "12",
                        "ZNUM": 4,
                        "ZREMARK": "上证指数成交额:1836.42亿,-249.77亿"
                    },
                    {
                        "MANDT": "001",
                        "ZDATE": 20190628,
                        "ZZONE": "13",
                        "ZNUM": 5,
                        "ZREMARK": "过去1年上证指数最高成交额:5257.25亿,今天成交额占比35%"
                    },
                    {
                        "MANDT": "001",
                        "ZDATE": 20190628,
                        "ZZONE": "14",
                        "ZNUM": 6,
                        "ZREMARK": "过去1年上证指数最低成交额:854.04亿"
                    },
                    {
                        "MANDT": "001",
                        "ZDATE": 20190628,
                        "ZZONE": "20",
                        "ZNUM": 7,
                        "ZREMARK": "上证50收盘:2930.60, -0.22 %"
                    },
                    {
                        "MANDT": "001",
                        "ZDATE": 20190628,
                        "ZZONE": "21",
                        "ZNUM": 8,
                        "ZREMARK": "过去1年上证50最高点:3048.82, 过去1年上证50最低点:2249.37"
                    },
                    {
                        "MANDT": "001",
                        "ZDATE": 20190628,
                        "ZZONE": "22",
                        "ZNUM": 9,
                        "ZREMARK": "上证50成交额:373.48亿,-166.67亿"
                    },
                    {
                        "MANDT": "001",
                        "ZDATE": 20190628,
                        "ZZONE": "23",
                        "ZNUM": 10,
                        "ZREMARK": "过去1年上证50最高成交额:1250.03亿,今天成交额占比30%"
                    },
                    {
                        "MANDT": "001",
                        "ZDATE": 20190628,
                        "ZZONE": "24",
                        "ZNUM": 11,
                        "ZREMARK": "过去1年上证50最低成交额:170.57亿"
                    },
                    {
                        "MANDT": "001",
                        "ZDATE": 20190628,
                        "ZZONE": "30",
                        "ZNUM": 12,
                        "ZREMARK": "创业板指收盘:1511.51, -0.90 %"
                    },
                    {
                        "MANDT": "001",
                        "ZDATE": 20190628,
                        "ZZONE": "31",
                        "ZNUM": 13,
                        "ZREMARK": "过去1年创业板指最高点:1792.03, 过去1年创业板指最低点:1184.91"
                    },
                    {
                        "MANDT": "001",
                        "ZDATE": 20190628,
                        "ZZONE": "32",
                        "ZNUM": 14,
                        "ZREMARK": "创业板指成交额:820.23亿,-102.89亿"
                    },
                    {
                        "MANDT": "001",
                        "ZDATE": 20190628,
                        "ZZONE": "33",
                        "ZNUM": 15,
                        "ZREMARK": "过去1年创业板指最高成交额:2125.96亿,今天成交额占比39%"
                    },
                    {
                        "MANDT": "001",
                        "ZDATE": 20190628,
                        "ZZONE": "34",
                        "ZNUM": 16,
                        "ZREMARK": "过去1年创业板指最低成交额:352.22亿"
                    },
                    {
                        "MANDT": "001",
                        "ZDATE": 20190628,
                        "ZZONE": "40",
                        "ZNUM": 17,
                        "ZREMARK": "沪深300收盘:3825.59, -0.24 %"
                    },
                    {
                        "MANDT": "001",
                        "ZDATE": 20190628,
                        "ZZONE": "41",
                        "ZNUM": 18,
                        "ZREMARK": "过去1年沪深300最高点:4126.09, 过去1年沪深300最低点:2935.83"
                    },
                    {
                        "MANDT": "001",
                        "ZDATE": 20190628,
                        "ZZONE": "42",
                        "ZNUM": 19,
                        "ZREMARK": "沪深300成交额:1165.12亿,-399.71亿"
                    },
                    {
                        "MANDT": "001",
                        "ZDATE": 20190628,
                        "ZZONE": "43",
                        "ZNUM": 20,
                        "ZREMARK": "过去1年沪深300最高成交额:3876.33亿,今天成交额占比30%"
                    },
                    {
                        "MANDT": "001",
                        "ZDATE": 20190628,
                        "ZZONE": "44",
                        "ZNUM": 21,
                        "ZREMARK": "过去1年沪深300最低成交额:585.75亿"
                    },
                    {
                        "MANDT": "001",
                        "ZDATE": 20190628,
                        "ZZONE": "50",
                        "ZNUM": 22,
                        "ZREMARK": "深证成指收盘:9178.31, -0.66 %"
                    },
                    {
                        "MANDT": "001",
                        "ZDATE": 20190628,
                        "ZZONE": "51",
                        "ZNUM": 23,
                        "ZREMARK": "过去1年深证成指最高点:10541.19, 过去1年深证成指最低点:7011.33"
                    },
                    {
                        "MANDT": "001",
                        "ZDATE": 20190628,
                        "ZZONE": "52",
                        "ZNUM": 24,
                        "ZREMARK": "深证成指成交额:2318.83亿,-352.98亿"
                    },
                    {
                        "MANDT": "001",
                        "ZDATE": 20190628,
                        "ZZONE": "53",
                        "ZNUM": 25,
                        "ZREMARK": "过去1年深证成指最高成交额:6585.07亿,今天成交额占比35%"
                    },
                    {
                        "MANDT": "001",
                        "ZDATE": 20190628,
                        "ZZONE": "54",
                        "ZNUM": 26,
                        "ZREMARK": "过去1年深证成指最低成交额:1198.20亿"
                    },
                    {
                        "MANDT": "001",
                        "ZDATE": 20190628,
                        "ZZONE": "60",
                        "ZNUM": 27,
                        "ZREMARK": "中小板指收盘:5678.75, -0.64 %"
                    },
                    {
                        "MANDT": "001",
                        "ZDATE": 20190628,
                        "ZZONE": "61",
                        "ZNUM": 28,
                        "ZREMARK": "过去1年中小板指最高点:6739.69, 过去1年中小板指最低点:4527.95"
                    },
                    {
                        "MANDT": "001",
                        "ZDATE": 20190628,
                        "ZZONE": "62",
                        "ZNUM": 29,
                        "ZREMARK": "中小板指成交额:956.05亿,-145.20亿"
                    },
                    {
                        "MANDT": "001",
                        "ZDATE": 20190628,
                        "ZZONE": "63",
                        "ZNUM": 30,
                        "ZREMARK": "过去1年中小板指最高成交额:2788.71亿,今天成交额占比34%"
                    },
                    {
                        "MANDT": "001",
                        "ZDATE": 20190628,
                        "ZZONE": "64",
                        "ZNUM": 31,
                        "ZREMARK": "过去1年中小板指最低成交额:491.87亿"
                    },
                    {
                        "MANDT": "001",
                        "ZDATE": 20190628,
                        "ZZONE": "70",
                        "ZNUM": 32,
                        "ZREMARK": "中证500收盘:4950.48, -1.14 %"
                    },
                    {
                        "MANDT": "001",
                        "ZDATE": 20190628,
                        "ZZONE": "71",
                        "ZNUM": 33,
                        "ZREMARK": "过去1年中证500最高点:5939.50, 过去1年中证500最低点:3948.56"
                    },
                    {
                        "MANDT": "001",
                        "ZDATE": 20190628,
                        "ZZONE": "72",
                        "ZNUM": 34,
                        "ZREMARK": "中证500成交额:702.71亿,-68.46亿"
                    },
                    {
                        "MANDT": "001",
                        "ZDATE": 20190628,
                        "ZZONE": "73",
                        "ZNUM": 35,
                        "ZREMARK": "过去1年中证500最高成交额:2298.68亿,今天成交额占比31%"
                    },
                    {
                        "MANDT": "001",
                        "ZDATE": 20190628,
                        "ZZONE": "74",
                        "ZNUM": 36,
                        "ZREMARK": "过去1年中证500最低成交额:327.06亿"
                    },
                    {
                        "MANDT": "001",
                        "ZDATE": 20190628,
                        "ZZONE": "80",
                        "ZNUM": 37,
                        "ZREMARK": "中证1000收盘:5321.43, -1.41 %"
                    },
                    {
                        "MANDT": "001",
                        "ZDATE": 20190628,
                        "ZZONE": "81",
                        "ZNUM": 38,
                        "ZREMARK": "过去1年中证1000最高点:6322.48, 过去1年中证1000最低点:4326.33"
                    },
                    {
                        "MANDT": "001",
                        "ZDATE": 20190628,
                        "ZZONE": "82",
                        "ZNUM": 39,
                        "ZREMARK": "中证1000成交额:1078.59亿,-58.46亿"
                    },
                    {
                        "MANDT": "001",
                        "ZDATE": 20190628,
                        "ZZONE": "83",
                        "ZNUM": 40,
                        "ZREMARK": "过去1年中证1000最高成交额:2886.02亿,今天成交额占比37%"
                    },
                    {
                        "MANDT": "001",
                        "ZDATE": 20190628,
                        "ZZONE": "84",
                        "ZNUM": 41,
                        "ZREMARK": "过去1年中证1000最低成交额:511.72亿"
                    },
                    {
                        "MANDT": "001",
                        "ZDATE": 20190628,
                        "ZZONE": "90",
                        "ZNUM": 42,
                        "ZREMARK": "今日红盘数:710,昨日红盘数:2411"
                    },
                    {
                        "MANDT": "001",
                        "ZDATE": 20190628,
                        "ZZONE": "a0",
                        "ZNUM": 43,
                        "ZREMARK": "今日绿盘数:2899,昨日绿盘数:1193"
                    },
                    {
                        "MANDT": "001",
                        "ZDATE": 20190628,
                        "ZZONE": "b0",
                        "ZNUM": 44,
                        "ZREMARK": "今日涨停家数:28, 昨日涨停家数:58"
                    },
                    {
                        "MANDT": "001",
                        "ZDATE": 20190628,
                        "ZZONE": "b1",
                        "ZNUM": 45,
                        "ZREMARK": "今日一字涨停家数:6,昨日一字涨停家数:7"
                    },
                    {
                        "MANDT": "001",
                        "ZDATE": 20190628,
                        "ZZONE": "c0",
                        "ZNUM": 46,
                        "ZREMARK": "今日跌停家数:9,昨日跌停家数:7"
                    },
                    {
                        "MANDT": "001",
                        "ZDATE": 20190628,
                        "ZZONE": "d0",
                        "ZNUM": 49,
                        "ZREMARK": "昨日最高板[森远股份5]今日收盘9.94-%,今日开盘0.16%,今日最高9.94%,今日最低9.94-%"
                    },
                    {
                        "MANDT": "001",
                        "ZDATE": 20190628,
                        "ZZONE": "d0",
                        "ZNUM": 50,
                        "ZREMARK": "昨日最高板[汇中股份5]今日收盘9.98-%,今日开盘3.15-%,今日最高3.15-%,今日最低9.98-%"
                    },
                    {
                        "MANDT": "001",
                        "ZDATE": 20190628,
                        "ZZONE": "e0",
                        "ZNUM": 47,
                        "ZREMARK": "今日最高板高度:4(泰晶科技)昨天最高板高度:5(森远股份/汇中股份)"
                    },
                    {
                        "MANDT": "001",
                        "ZDATE": 20190628,
                        "ZZONE": "f0",
                        "ZNUM": 48,
                        "ZREMARK": "今日最高板[泰晶科技4]-半导体及元件(4)-华为概念(4)"
                    },
                    {
                        "MANDT": "001",
                        "ZDATE": 20190628,
                        "ZZONE": "g0",
                        "ZNUM": 51,
                        "ZREMARK": "今日最高板[泰晶科技4]历史换手:(1板)14.07%|(2板)11.61%|(3板)36.47%|(4板)28.55%"
                    },
                    {
                        "MANDT": "001",
                        "ZDATE": 20190628,
                        "ZZONE": "h0",
                        "ZNUM": 52,
                        "ZREMARK": "今日最高板[泰晶科技4]历史金额:(1板)1.54亿|(2板)1.43亿|(3板)4.99亿|(4板)4.19亿"
                    },
                    {
                        "MANDT": "001",
                        "ZDATE": 20190628,
                        "ZZONE": "i0",
                        "ZNUM": 53,
                        "ZREMARK": "今日最高板[泰晶科技4]历史振幅:(1板)13.76%|(2板)5.20%|(3板)6.22%|(4板)10.00%"
                    },
                    {
                        "MANDT": "001",
                        "ZDATE": 20190628,
                        "ZZONE": "j0",
                        "ZNUM": 54,
                        "ZREMARK": "前天最高板[宝德股份6]昨日尾盘低吸，今日收盘获利:9.99-%"
                    },
                    {
                        "MANDT": "001",
                        "ZDATE": 20190628,
                        "ZZONE": "k0",
                        "ZNUM": 55,
                        "ZREMARK": "今日涨停金额1[沪电股份2]16.17亿-半导体及元件(4)-华为概念(4)-汽车电子(2)"
                    },
                    {
                        "MANDT": "001",
                        "ZDATE": 20190628,
                        "ZZONE": "k0",
                        "ZNUM": 56,
                        "ZREMARK": "今日涨停金额2[绿色动力1]12.47亿-垃圾分类(8)-新股与次新股(7)-环保工程(5)-固废处理(5)-节能环保(3)"
                    },
                    {
                        "MANDT": "001",
                        "ZDATE": 20190628,
                        "ZZONE": "k0",
                        "ZNUM": 57,
                        "ZREMARK": "今日涨停金额3[惠城环保1]8.34亿-垃圾分类(8)-新股与次新股(7)-固废处理(5)-环保工程(5)-稀土永磁(3)"
                    },
                    {
                        "MANDT": "001",
                        "ZDATE": 20190628,
                        "ZZONE": "k0",
                        "ZNUM": 58,
                        "ZREMARK": "今日涨停金额4[正海磁材1]4.73亿-稀土永磁(3)-新材料概念(2)-小金属概念(2)"
                    },
                    {
                        "MANDT": "001",
                        "ZDATE": 20190628,
                        "ZZONE": "k0",
                        "ZNUM": 59,
                        "ZREMARK": "今日涨停金额5[联泰环保2]4.39亿-PPP概念(7)-污水处理(5)-燃气水务(3)-水务Ⅲ(3)"
                    }
                ]
            }


            try {
                var itcompTab = new mosTable.mosTable();
                var weatherTab = new mosTable.mosTable();
                var d0010Tab = new mosTable.mosTable();

                itcompTab.init("itcomp", oITComp);
                weatherTab.init("weather", oWeather);
                d0010Tab.init("d0010", oD0010);


            } catch (e) {
                console.log(e.message);
            }

        }

        $scope.refreshClick = function() {

            if (mosTable.oData["tabdata"] != undefined) {
                mosTable.refreshTableBody("tabdata");
            }

        }

        function pageLoad() {
            return;
        }

        function pageShow() {
            return;
        }

        function pageResize() {
            return;
        }

        function colBtn(p) {
            console.log(p);
        }
    }]);

    return app;
});