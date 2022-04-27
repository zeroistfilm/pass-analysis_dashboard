<script>
    import {BarLoader} from 'svelte-loading-spinners'
    import DateSeletor from "./DateSeletor.svelte";
    import {onMount, afterUpdate} from 'svelte';
    import chartjs from 'chart.js';

    let ctx;
    let chartCanvas;
    let myChart;

    let timestampKST = '2022-04-01';
    let dayrange = 1;
    let dataSet;

    let isLogScale = true;
    let isloadding = false;

    let selectedDateArray;

    Date.prototype.addDays = function (days) {
        var date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
    }


    function daysSplit(days, values) {
        let tmpday = new Date(Number(days[0]));
        let standardDay = new Date(Number(days[0]));
        let tmpDayList = [];
        let tmpValList = [];
        let returnDaysArray = [];
        let returnValuesArray = [];
        let dayLabelList = [];


        for (let i = 0; i <= days.length; i++) {
            let date = new Date(Number(days[i]));

            if (tmpday.getUTCDate() === date.getUTCDate()) {
                tmpDayList = [...tmpDayList, date.addDays(-(date.getUTCDate() - standardDay.getUTCDate()))]
                tmpValList = [...tmpValList, values[i]]

            } else {
                console.log('newday')
                returnDaysArray.push(tmpDayList)
                returnValuesArray.push(tmpValList)
                tmpDayList = []
                tmpValList = []
                dayLabelList.push(tmpday.getUTCFullYear().toString() + "/" +
                    (tmpday.getUTCMonth() + 1).toString() + "/" +
                    tmpday.getUTCDate().toString())

            }

            tmpday = date;
        }
        console.log(dayLabelList)
        return [dayLabelList, returnDaysArray, returnValuesArray];
    }

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


    async function getActivtyWithManyDates() {
        console.log(selectedDateArray)
        let jskeys;
        let jsvalue;

        if (!timestampKST.trim()) {
            timestampKST = ''
            dayrange = ''
            return;
        }
        isloadding = true;

        const res = await fetch(`http://211.225.60.127:40178/api/activitywithdate`, {
            method: 'POST',
            body: JSON.stringify({dates: selectedDateArray}),
            headers: {'Content-Type': 'application/json'}
        })

        const js = JSON.parse(await res.json())
        console.log(js.total.length)

        jskeys = Object.keys(js.total).map((elem) => {
            let date = new Date(Number(elem));
            return date.getUTCFullYear().toString() + "-"
                + (("00" + (date.getUTCMonth() + 1).toString()).slice(-2)) + "-"
                + (("00" + date.getUTCDate().toString()).slice(-2)) + " "
                + (("00" + date.getUTCHours().toString()).slice(-2)) + ":"
                + (("00" + date.getUTCMinutes().toString()).slice(-2));
        })

        jsvalue = Object.values(js.total)

        let returned = daysSplit(Object.keys(js.total), Object.values(js.total))
        dataSet = makeDataset(returned[0], returned[1], returned[2])
        myChart.data = dataSet
        isloadding = false;
        myChart.update()
    }

    async function getActivty() {
        console.log(selectedDateArray)
        let jskeys;
        let jsvalue;

        if (!timestampKST.trim()) {
            timestampKST = ''
            dayrange = ''
            return;
        }
        isloadding = true;

        const res = await fetch(`http://211.225.60.127:40178/api/datatocsv?timestampKST=${timestampKST.split('-').reduce((i, j) => (i + j))}&dayrange=${dayrange}`, {method: 'GET'})
        const js = JSON.parse(await res.json())


        jskeys = Object.keys(js.total).map((elem) => {
            let date = new Date(Number(elem));
            return date.getUTCFullYear().toString() + "-"
                + (("00" + (date.getUTCMonth() + 1).toString()).slice(-2)) + "-"
                + (("00" + date.getUTCDate().toString()).slice(-2)) + " "
                + (("00" + date.getUTCHours().toString()).slice(-2)) + ":"
                + (("00" + date.getUTCMinutes().toString()).slice(-2));
        })

        jsvalue = Object.values(js.total)

        let returned = daysSplit(Object.keys(js.total), Object.values(js.total))
        dataSet = makeDataset(returned[0], returned[1], returned[2])
        myChart.data = dataSet
        isloadding = false;
        myChart.update()
    }


    function handleIsLogScale() {
        isLogScale = !isLogScale
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
                        max: 220000000,
                        min: 0,
                    },
                    type: isLogScale ? 'logarithmic' : 'linear'
                },
                    {
                        position: 'right',
                        ticks: {
                            beginAtZero: true,
                            stepValue: 5,
                            max: 220000000,
                            min: 0,
                        },
                        type: isLogScale ? 'logarithmic' : 'linear'
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
                            max: 220000000,
                            min: 0,
                        },
                        type: isLogScale ? 'logarithmic' : 'linear'
                    },
                        {
                            position: 'right',
                            ticks: {
                                beginAtZero: true,
                                stepValue: 5,
                                max: 220000000,
                                min: 0,
                            },
                            type: isLogScale ? 'logarithmic' : 'linear'
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

<div class="container">

    <div class="item">
        <h2>활동량 분석</h2>
        <p>활동량 분석을 위한 페이지 입니다.</p>
    </div>

    <canvas class="item canvas" bind:this={chartCanvas} id="myChart"></canvas>
    {#if isloadding}
        <div class="loader">
            <BarLoader size="70" color="#FF3E00" unit="px" duration="1s"></BarLoader>
            <span>loading...</span>
        </div>
    {/if}
    <button class="item" on:click={getActivtyWithManyDates}>getActivity</button>
    <div class="item">
        <input  type=checkbox on:click={handleIsLogScale} bind:checked={isLogScale}>
        LogScale
    </div>
    <div class="item">
        <DateSeletor bind:selectedDateArray={selectedDateArray}/>
    </div>

</div>


<style>

    .container {
        display: flex;
        position: relative;
        width: 90%;
        flex-direction: column;
        padding: 1em 2em 1em 1em;

    }

    .item {

        padding: 1em;
        margin: auto;
    }

    .canvas {
        width: 100%;
    }

    .loader {
        position: absolute;
        left: 50%;
        top: 30%;
        z-index: 1;
        width: 150px;
        height: 150px;
        margin: auto;
        -webkit-animation: spin 2s linear infinite;
        animation: spin 2s linear infinite;
    }

</style>