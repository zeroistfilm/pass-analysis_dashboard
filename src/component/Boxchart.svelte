<script>
    import "@carbon/charts/styles.min.css";
    import "carbon-components/css/carbon-components.min.css";
    import {BoxplotChart} from "@carbon/charts-svelte";
    import {beforeUpdate} from "svelte";
    import {isLogScale} from "../store/store";

    export let domain;
    export let data;

    let boxplotdata = [];
    let boxChartOptions;

    let chart;


    function updateBoxPlotData(domain, data) {
        let datalist;
        let title;


        if (domain === "meanWeight") {
            datalist = data['returnMeanWeightArray']
            title = "평균무게"
        } else if (domain === "maxWeight") {
            datalist = data['returnMaxWeightArray']
            title = "최고무게"
        } else if (domain === "meanTemp") {
            datalist = data['returnMeanTempArray']
            title = "평균온도"
        } else if (domain === "maxTemp") {
            datalist = data['returnMaxTempArray']
            title = "최고온도"
        } else if (domain === "activity") {
            datalist = data['returnActivityArray']
            title = "활동량"
        }

        let tmpdata = [];
        for (let i = 0; i < data['dayLabelList'].length; i++) {
            for (let j = 0; j < datalist[i].length; j++) {
                if (domain === "activity") {

                    // if (datalist[i][j] > 10000000) {
                    tmpdata.push({
                        // "date": $storeDataList['returnDaysArray'][i][j],
                        // "value": Number(datalist[i][j])
                        "group": String(data['dayLabelList'][i]),
                        "value": Number(datalist[i][j])
                    })
                    // }
                } else {
                    tmpdata.push({
                        "group": String(data['dayLabelList'][i]),
                        "value": Number(datalist[i][j]),

                    })
                }
            }
        }


        boxplotdata = tmpdata

        boxChartOptions = {
            "title": `일자별 ${title} BoxPlot`,
            "axes": {
                "left": {
                    "mapsTo": "value",
                    "scaleType": $isLogScale ? 'log' : 'linear',
                },
                // "right": {
                //     "mapsTo": "max",
                // },
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
        if (data !== undefined) {
            updateBoxPlotData(domain, data)
        }

    })


</script>


<BoxplotChart
        class="boxplot"
        data={boxplotdata}
        options={boxChartOptions}
/>

<style>
    .boxplot {
        height: 500px;
    }
</style>