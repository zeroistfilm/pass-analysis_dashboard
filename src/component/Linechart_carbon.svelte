<script>
    import "@carbon/charts/styles.min.css";
    import "carbon-components/css/carbon-components.min.css";
    import { LineChart} from "@carbon/charts-svelte";
    import {beforeUpdate} from "svelte";
    import {activityList, isLogScale} from "../store/store";


    let dailyplot = []

    let lineChartOptions;

    let chart;



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
            // "height": "400px"
        }
    }

    beforeUpdate(() => {

        updateDailyPlotData()
    })


</script>

<LineChart
        data={
        {	"labels": ["activity"],
            datasets:dailyplot
        }

        }
        options={lineChartOptions}
/>


<style>
    .boxplot{
        height: 500px;
    }
</style>