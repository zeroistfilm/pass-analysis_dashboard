<script>

    import {onMount, afterUpdate} from 'svelte';
    import chartjs from 'chart.js';
    import {activityList, isLogScale} from "../store/store";



    let ctx;
    let chartCanvas;
    let myChart;
    let dataSet = makeDataset($activityList['dayLabelList'], $activityList['returnDaysArray'], $activityList['returnValuesArray']);
    let isloadding = false;


    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
    }

    function makeDataset(labels, dates, values) {
        let returndatas = [];
        let label;
        let data = [];
        console.log(dates.length, values.length)
        for (let i = 0; i < dates.length; i++) {

            label = labels[i]
            for (let j = 0; j < dates[i].length; j++) {
                data = [...data, {
                    x: new Date(dates[i][j].getTime() + dates[i][j].getTimezoneOffset() * 60 * 1000),
                    y: values[i][j],
                }]
            }
            returndatas = [...returndatas,
                {
                    pointStyle: 'dash',
                    borderColor: `rgba(${getRandomInt(0, 255)},${getRandomInt(0, 255)},${getRandomInt(0, 255)},0.71)`,
                    fill: false,
                    label: label,
                    data: data
                }]
            data = []

        }

        return {datasets: returndatas}
    }


    export function dataupdate() {
        dataSet = makeDataset($activityList['dayLabelList'], $activityList['returnDaysArray'], $activityList['returnValuesArray'])
        myChart.data = dataSet
        isloadding = false;
        myChart.options = {
            scales: {
                xAxes: [{
                    type: 'time',
                    time: {
                        displayFormats: {
                            quarter: 'MMM YYYY'
                        }
                    }
                },

                ],
                yAxes: [{
                    position: 'left',
                    ticks: {
                        beginAtZero: true,
                        stepValue: 5,
                        max: 2200000000,
                        min: 0,
                    },
                    type: $isLogScale ? 'logarithmic' : 'linear'
                },
                    {
                        position: 'right',
                        ticks: {
                            beginAtZero: true,
                            stepValue: 5,
                            max: 2200000000,
                            min: 0,
                        },
                        type: $isLogScale ? 'logarithmic' : 'linear'
                    }
                ]
            }
        }

        myChart.update()
    }


    function createChart(data) {
        ctx = chartCanvas.getContext('2d');
        myChart = new Chart(ctx, {
            type: 'line',
            data: data,
            pan: {enabled: true, mode: 'xy'},
            zoom: {enabled: true, mode: 'xy',},
            options: {
                scales: {
                    xAxes: [{
                        type: 'time',
                        time: {
                            displayFormats: {
                                quarter: 'MMM YYYY'
                            }
                        }
                    },

                    ],
                    yAxes: [{
                        position: 'left',
                        ticks: {
                            beginAtZero: true,
                            stepValue: 5,
                            max: 2200000000,
                            min: 0,
                        },
                        type: $isLogScale ? 'logarithmic' : 'linear'
                    },
                        {
                            position: 'right',
                            ticks: {
                                beginAtZero: true,
                                stepValue: 5,
                                max: 2200000000,
                                min: 0,
                            },
                            type: $isLogScale ? 'logarithmic' : 'linear'
                        }
                    ]
                }
            }
        });

    }

    onMount(async (promise) => {
        if (myChart) {
            myChart.update()
        } else {
            createChart(dataSet)
        }

    });


</script>

<div>
    <canvas class="canvas" bind:this={chartCanvas} id="myChart"></canvas>
</div>


<style>
    .canvas {
        width: 1100px;
    }


</style>