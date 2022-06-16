<script>
    import "@carbon/charts/styles.min.css";
    import "carbon-components/css/carbon-components.min.css";
    import {BarChartSimple, BoxplotChart, LineChart} from "@carbon/charts-svelte";
    import {beforeUpdate, onMount} from "svelte";
    import {activityList, isLogScale} from "../store/store";

    let boxplotdata = [];
    let boxChartOptions;

    let chart;


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
                    "thresholds": [
                        {
                            "value": 10000000,
                            "fillColor": "#74969d"
                        },

                        {
                            "value": 30000000,
                            "fillColor": "#74969d"
                        },

                        {
                            "value": 50000000,
                            "fillColor": "#74969d"
                        },

                        {
                            "value": 70000000,
                            "fillColor": "#74969d"
                        },

                        {
                            "value": 90000000,
                            "fillColor": "#74969d"
                        },

                        {
                            "value": 110000000,
                            "fillColor": "#74969d"
                        },
                    ]
                },
                "bottom": {
                    "scaleType": "labels",
                    "mapsTo": "group"
                }
            },
            "height": "370px",
            // width: "800px",
        }


    }


    beforeUpdate(() => {
        updateBoxPlotData()
    })


</script>



<BoxplotChart
        class="boxplot"
        data={boxplotdata}
        options={boxChartOptions}
/>

<style>
    .boxplot{
        height: 500px;
    }
</style>