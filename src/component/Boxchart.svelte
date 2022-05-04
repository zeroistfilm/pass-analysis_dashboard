<script>
    import "@carbon/charts/styles.min.css";
    import "carbon-components/css/carbon-components.min.css";
    import {BarChartSimple, BoxplotChart} from "@carbon/charts-svelte";


    import { onMount } from "svelte";




    let chart;

    function barMouseOver(e) {
        console.log(e.detail);
    }

    onMount(() => {
        return () => {
            if (chart) chart.services.events.removeEventListener("bar-mouseover", barMouseOver);
        };
    });

    $: if (chart) chart.services.events.addEventListener("bar-mouseover", barMouseOver)

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
    }
    let tmpdata=[];
    for(let i=0; i<200;i++){
        tmpdata.push(
            {
                "group": String(getRandomInt(1,50)),
                "value": Number(getRandomInt(100,500))
            }
        )
    }
    tmpdata.sort()
    console.log(tmpdata)
</script>

<BoxplotChart
        data={tmpdata}
        options={{
	"title": "Vertical box plot",
	"axes": {
		"left": {
			"mapsTo": "value"
		},
		"bottom": {
			"scaleType": "labels",
			"mapsTo": "group"
		}
	},
	"height": "400px",
	    width:"800px",
}}
/>
<BarChartSimple
        data={[
    { group: "Qty", value: 65000 },
    { group: "More", value: 29123 },
    { group: "Sold", value: 35213 },
    { group: "Restocking", value: 51213 },
    { group: "Misc", value: 16932 },
  ]}
        options={{
    title: "Simple bar (discrete)",
    height: "400px",
    width:"800px",
    axes: {
      left: { mapsTo: "value" },
      bottom: { mapsTo: "group", scaleType: "labels" },
    },
  }}
/>

<BarChartSimple
        bind:chart
        data={[
    { group: "Qty", value: 650300 },
    { group: "More", value: 291123 },
    { group: "Sold", value: 34213 },
    { group: "Restocking", value: 512313 },
    { group: "Misc", value: 162932 },
  ]}
        options={{
    title: "Simple bar (discrete)",
    height: "400px",
    axes: {
      left: { mapsTo: "value" },
      bottom: { mapsTo: "group", scaleType: "labels" },
    },
  }}
/>
