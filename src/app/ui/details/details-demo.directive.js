const templateUrl = require('./details-demo.html');

const Highcharts = require('highcharts');
require('highcharts/highcharts-more')(Highcharts);


/**
 * @module rvDetailsDemo
 * @memberof app.ui
 * @restrict E
 * @description
 *
 * The `rvDetailsRecordHtml` directive renders the data content of details.
 *
 */
angular
    .module('app.ui')
    .directive('rvDetailsDemo', rvDetailsDemo);

/**
 * `rvDetailsRecordHtml` directive body.
 *
 * @function rvDetailsDemo
 * @return {object} directive body
 */
function rvDetailsDemo($timeout) {
    const directive = {
        restrict: 'E',
        templateUrl,
        scope: {
            item: '=',
            mapPoint: '='
        },
        controller: Controller,
        controllerAs: 'self',
        bindToController: true,
        link: (scope, element) => {
            const self = scope.self;
            self.redrawChart = redrawChart;

            function redrawChart() {
                const someData = {"bmean":[[1950,4.33],[1951,2.36],[1952,2.57],[1953,6.55],[1954,5.39],[1955,2.64],[1956,0.76],[1957,3.42],[1958,0.6],[1959,5.79],[1960,5.39],[1961,7.97],[1962,5.53],[1963,2.93],[1964,3.58],[1965,0.04],[1966,1.07],[1967,4.72],[1968,4.51],[1969,0.96],[1970,7.26],[1971,1.86],[1972,1.52],[1973,1.32],[1974,4.03],[1975,3.62],[1976,3.04],[1977,0.73],[1978,0.29],[1979,1.36],[1980,2.64],[1981,1.73],[1982,4.66],[1983,4.49],[1984,6.69],[1985,5.39],[1986,1.37],[1987,5.03],[1988,3.35],[1989,0.73],[1990,1.97],[1991,7.62],[1992,4.85],[1993,1.93],[1994,1],[1995,2.87],[1996,1.4],[1997,8.39],[1998,5.26],[1999,6.59],[2000,1.96],[2001,9.65],[2002,6],[2003,5.51],[2004,2.7],[2005,5.98]],"brange":[[1950,0.21,10.94],[1951,0,7.93],[1952,0.68,10.29],[1953,1.69,11.11],[1954,2,14.78],[1955,0,9.59],[1956,0.21,5.54],[1957,2.92,9.69],[1958,0,6.43],[1959,2.02,10.32],[1960,1.86,12.57],[1961,3.19,15.84],[1962,1.08,10.13],[1963,0,6.64],[1964,1.69,9.89],[1965,0,3.95],[1966,0.39,6.96],[1967,0.25,12.51],[1968,0,13.33],[1969,0.09,4.52],[1970,2.22,9.78],[1971,0.8,5.53],[1972,0,4.39],[1973,0.4,5.63],[1974,2.38,9.54],[1975,0,11.21],[1976,0,8],[1977,0.01,2.06],[1978,0,5.71],[1979,0,3.41],[1980,0.01,9.72],[1981,0.18,3.34],[1982,3.46,9.32],[1983,1.79,9.29],[1984,1.48,11.75],[1985,1.61,10.29],[1986,0,7.6],[1987,2.82,11.11],[1988,0.46,8.23],[1989,0,4.73],[1990,0,10.9],[1991,4.99,15.39],[1992,1.01,11.17],[1993,0.44,4.65],[1994,0,9.92],[1995,0.74,7.64],[1996,0,13.02],[1997,4.48,16.16],[1998,2.25,10.25],[1999,4.29,11.77],[2000,0.25,8.95],[2001,3.92,15.66],[2002,1.09,10.35],[2003,1.23,11.36],[2004,0.74,7.06],[2005,3.96,11.32]],"mean":[[2006,9.7],[2007,7.14],[2008,2.82],[2009,5.74],[2010,4.78],[2011,5.96],[2012,9.77],[2013,1.45],[2014,6.09],[2015,5.95],[2016,7.66],[2017,11.15],[2018,6.29],[2019,2.66],[2020,8.91],[2021,7.35],[2022,3.34],[2023,2.55],[2024,12.37],[2025,5.4],[2026,3.91],[2027,8.82],[2028,7.61],[2029,6.97],[2030,12.16],[2031,5.75],[2032,7.64],[2033,5.3],[2034,5.51],[2035,4.56],[2036,15.07],[2037,7.5],[2038,8.05],[2039,7.74],[2040,12.27],[2041,11],[2042,14.07],[2043,7.23],[2044,9.6],[2045,12.54],[2046,10.1],[2047,10.26],[2048,7.03],[2049,14.93],[2050,8.41],[2051,15.91],[2052,14.34],[2053,18.66],[2054,14.87],[2055,12.19],[2056,14.82],[2057,13.28],[2058,14.19],[2059,15.5],[2060,13.94],[2061,18.87],[2062,21.14],[2063,16.72],[2064,14.04],[2065,17.14],[2066,15.79],[2067,19.33],[2068,17.21],[2069,16.93],[2070,18.23],[2071,18.65],[2072,18.5],[2073,23.23],[2074,19.93],[2075,25.34],[2076,24.64],[2077,30.41],[2078,23.05],[2079,21.32],[2080,27.6],[2081,31.66],[2082,35.51],[2083,28.68],[2084,23.97],[2085,35.7],[2086,31.21],[2087,33.32],[2088,40.46],[2089,31.08],[2090,35.03],[2091,29.45],[2092,39.59],[2093,36.68],[2094,41.34],[2095,32.46]],"range":[[2006,4.63,16.73],[2007,5.08,14.56],[2008,0.17,15.76],[2009,2.59,11.77],[2010,2.68,12.89],[2011,1.99,12.14],[2012,6.54,22.34],[2013,0,7.91],[2014,1.58,14.5],[2015,1.36,14.47],[2016,4.82,14.02],[2017,7.18,19.39],[2018,0.29,18.6],[2019,0.86,9.93],[2020,0.38,14.3],[2021,2.4,19],[2022,0,19.64],[2023,0.37,13.21],[2024,6.37,20.32],[2025,1.14,16.3],[2026,2.6,8.23],[2027,0,17.85],[2028,1.48,14.44],[2029,2,21.88],[2030,4.91,23.93],[2031,2.32,16.91],[2032,3.34,19.71],[2033,2.88,16.94],[2034,1.69,9.54],[2035,0,13.39],[2036,9.81,25.09],[2037,3.96,16.27],[2038,1.09,20.05],[2039,1.02,19.72],[2040,5.7,24.36],[2041,3.81,21.32],[2042,5.66,32.16],[2043,2.02,23.02],[2044,1.09,26.48],[2045,4.55,23.98],[2046,2.86,28.59],[2047,5.38,26.37],[2048,2.86,27.86],[2049,7.98,21.14],[2050,2.22,23.89],[2051,11.28,29.11],[2052,5.78,31.54],[2053,6.74,36.28],[2054,6.57,26.07],[2055,2.7,19.96],[2056,4.8,47.65],[2057,5.71,26.61],[2058,7.95,38.91],[2059,4.88,31.48],[2060,2.71,50.57],[2061,8.7,34.2],[2062,12.82,35.25],[2063,2.86,32.65],[2064,5.1,43.88],[2065,7.75,37.41],[2066,6.17,43.38],[2067,3.53,48.61],[2068,2.03,51.05],[2069,2.86,40.11],[2070,6.01,36.91],[2071,4.48,67.05],[2072,4.98,43.05],[2073,3.51,52.84],[2074,4.17,59.43],[2075,6.61,46.15],[2076,10.74,58.92],[2077,11.48,66.82],[2078,12.78,48.18],[2079,11.16,47.01],[2080,4.47,70.61],[2081,11.71,59.29],[2082,12.85,60.96],[2083,8.91,60.13],[2084,8.75,56.16],[2085,10.47,79.51],[2086,10,66.67],[2087,13.32,68.36],[2088,7.43,67.82],[2089,9.17,71.34],[2090,7.43,74.88],[2091,11.34,67.02],[2092,17.8,66.22],[2093,9.93,95.33],[2094,13.38,91.45],[2095,7.17,84.36]]};

                // random offset between 0-100
                const randStart = Math.ceil(Math.random() * 100);
                // random trend to move downwards
                const randomTrend = Math.random();
                Object.keys(someData).forEach(key => {
                    for (let i = 1; i < someData[key].length; i++) {
                        randification(someData[key][i - 1], someData[key][i], 1);
                        if (someData[key][i].length === 3) {
                            randification(someData[key][i - 1], someData[key][i], 2);
                        }
                    }
                });

                // normalize graph connectors
                someData.bmean[someData.bmean.length - 1][1] = someData.mean[0][1];
                someData.brange[someData.brange.length - 1][1] = someData.range[0][1];
                someData.brange[someData.brange.length - 1][2] = someData.range[0][2];
                someData.mean[someData.mean.length - 1][1] = someData.mean[someData.mean.length - 2][1];
                someData.range[someData.range.length - 1][1] = someData.range[someData.range.length - 2][1];
                someData.range[someData.range.length - 1][2] = someData.range[someData.range.length - 2][2];


                function randification(d1, d2, i) {
                    const change = d1[i] - d2[i];
                    const randFactor = Math.random() * (0.55 < randomTrend ? -1 : 1);
                    d1[i] = d1[i] * randFactor + randStart + change;
                }

                element.find('.rv-chart').each((index, chartElement) => {

                    angular.element(chartElement).empty();

                    let myChart = Highcharts.chart(chartElement, {
                        chart: {
                            zoomType: 'xy',
                            height: '500'
                        },
                        title: null,
                        xAxis: {
                            labels : {
                                style: {
                                    color: 'black'
                                }
                            },
                            title: {
                                text: 'Year',
                                style: {
                                    color: 'black'
                                }
                            }
                        },
                        yAxis: {
                            gridLineColor: 'rgba(204,202,204,.5)',
                            gridLineWidth: 1,
                            labels : {
                                style: {
                                    color: 'black'
                                }
                            },
                            title: {
                                text: 'Heavy Precipitation Days (20 mm) (No. of days)',
                                style: {
                                    color: 'black'
                                }
                            },

                            floor: 0
                        },
                        legend: {
                            itemStyle: {
                                color: 'black'
                            }
                        },
                        series: [
                            {
                                name: '[1950-2005] Modelled Historical Values',
                                type: 'line',
                                data: someData.bmean,
                                zIndex: 1,
                                color: '#474747',
                                className : 'rcp45',
                                events: {
                                    legendItemClick: function (e) {
                                        e.preventDefault();
                                    }
                                }
                            },
                            {
                                name: 'Historical Range',
                                data: someData.brange,
                                type: 'arearange',
                                lineWidth: 0,
                                linkedTo: ':previous',
                                color: '#a5a5a5',
                                fillOpacity: 0.2,
                                zIndex: 0,
                                className : 'rcp45'
                            },
                            {
                                name: '[2006-2095] Projection',
                                type: 'line',
                                data: someData.mean,
                                zIndex: 1,
                                color: '#d60000',
                                marker: {
                                    enabled: false,
                                    lineColor: '#FF0000',
                                    fillColor: 'white'
                                },
                                className : 'rcp45',
                                events: {
                                    legendItemClick: function (e) {
                                        e.preventDefault();
                                    }
                                }

                            },
                            {
                                name: 'Projection Range',
                                data: someData.range,
                                type: 'arearange',
                                lineWidth: 0,
                                linkedTo: ':previous',
                                color: '#ff4949',
                                fillOpacity: 0.4,
                                zIndex: 0,
                                className : 'rcp45'
                            }
                        ]
                    });
                });
            }
        }
    };

    return directive;
}

function Controller($scope, events, mapService) {
    'ngInject';
    const self = this;

    // watch for selected item changes; reset the highlight;
    $scope.$watch('self.item', newValue => {
        if (typeof newValue !== 'undefined') {
            self.redrawChart();

            self.from = Math.random() * 15;
            self.to = Math.random() * 15;
        }
    });
}