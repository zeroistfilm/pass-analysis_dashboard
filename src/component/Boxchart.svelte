<script>
    import "@carbon/charts/styles.min.css";
    import "carbon-components/css/carbon-components.min.css";
    import {BarChartSimple, BoxplotChart, LineChart} from "@carbon/charts-svelte";
    import {beforeUpdate, onMount} from "svelte";
    import {activityList, isLogScale} from "../store/store";

    let boxplotdata = [];
    let dailyplot = []
    let boxChartOptions;
    let lineChartOptions;

    let chart;


    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
    }

    function updateBoxPlotData() {
        let tmpdata = [];
        for (let i = 0; i < $activityList['dayLabelList'].length; i++) {

            for (let j = 0; j < $activityList['returnValuesArray'][i].length; j++) {
                if ($activityList['returnValuesArray'][i][j] > 10000000) {
                    tmpdata.push({
                        "group": String($activityList['dayLabelList'][i]),
                        "value": Number($activityList['returnValuesArray'][i][j])
                    })
                }
            }
        }

        boxplotdata = tmpdata

        boxChartOptions = {
            "title": "일자별 활동량 BoxPlot",
            "axes": {
                "left": {
                    "mapsTo": "value",
                    "scaleType": $isLogScale ? 'log' : 'linear',
                },
                "bottom": {
                    "scaleType": "labels",
                    "mapsTo": "group"
                }
            },
            "height": "400px",
            width: "800px",
        }

        lineChartOptions = {
            "title": "시간별 활동량 그래프 - Linear",
            "axes": {
                "bottom": {
                    "scaleType": "time",
                    "mapsTo": "date"
                },
                "left": {
                    "mapsTo": "value",
                    "scaleType": "linear",
                    "includeZero": false
                }
            },

            "legend": {
                "clickable": true
            },
            "zoomBar": {
                "top": {
                    "enabled": true
                }
            },
            "height": "400px"
        }

    }

    function updateDailyPlotData() {
        let tmpdailyplot = [];

        for (let i = 0; i < $activityList['dayLabelList'].length; i++) {
            let label = $activityList['dayLabelList'][i]

            let data = [];

            for (let j = 0; j < $activityList['returnValuesArray'][i].length; j++) {

                data.push({
                    "date": $activityList['returnDaysArray'][i][j],
                    "value": Number($activityList['returnValuesArray'][i][j])
                })

            }
            tmpdailyplot.push({
                "label": label,
                "data": data
            })

        }

        dailyplot = tmpdailyplot

    }

    beforeUpdate(() => {
        updateBoxPlotData()
        updateDailyPlotData()
    })


</script>

<LineChart
        data={{	"labels": ["activity"],
            datasets:dailyplot
        }

        }
        options={lineChartOptions}
/>


<BoxplotChart
        data={boxplotdata}
        options={boxChartOptions}
/>

