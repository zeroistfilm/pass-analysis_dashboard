<script>
    import "@carbon/charts/styles.min.css";
    import "carbon-components/css/carbon-components.min.css";
    import {LineChart} from "@carbon/charts-svelte";
    import {beforeUpdate} from "svelte";
    import {storeDataList, isLogScale} from "../store/store";

    export let domain;


    let dailyplot = []

    let lineChartOptions;

    let chart;


    function updateDailyPlotData(domain) {

        let datalist;
        let title;

        if (domain === "activity/quantity") {
            datalist = $storeDataList['returnActivityArray']
            title = "활동량/개체수"
        } else if (domain === "quantity") {
            datalist = $storeDataList['returnQuantityArray']
            title = "개체수"
        }

        let tmpdailyplot = [];

        for (let i = 0; i < $storeDataList['dayLabelList'].length; i++) {
            let label = $storeDataList['dayLabelList'][i]

            let data = [];

            for (let j = 0; j < datalist[i].length; j++) {

                if(domain==='quantity'){
                    data.push({
                        "date": $storeDataList['returnDaysArray'][i][j],
                        "value": Number(datalist[i][j])
                    })

                }else if(domain === "activity/quantity"){
                    data.push({
                        "date": $storeDataList['returnDaysArray'][i][j],
                        "value": Number($storeDataList['returnActivityArray'][i][j]/$storeDataList['returnQuantityArray'][i][j])
                    })
                }


            }
            tmpdailyplot.push({
                "label": label,
                "data": data
            })

        }

        dailyplot = tmpdailyplot

        lineChartOptions = {
            "title": `시간별 ${title} 그래프 - Linear`,
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
        updateDailyPlotData(domain)
    })


</script>

<LineChart class="lineplot"
           data={
        {	"labels": ["activity"],
            datasets:dailyplot
        }

        }
           options={lineChartOptions}
/>


<style>
    .lineplot {
        height: 1100px;
    }
</style>