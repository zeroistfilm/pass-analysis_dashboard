<script>

    import Chart from "./component/Chart.svelte";
    import NavBar from "./component/NavBar.svelte";
    import Boxchart from "./component/Boxchart.svelte";
    // import {onMount, afterUpdate, beforeUpdate} from 'svelte';
    import Menulist from "./component/Menulist.svelte";
    import {itemDict} from "./store/store.js"
    import {LineChart} from "@carbon/charts-svelte";

    let isHamburger;



</script>

<main class="container">
    <div class="navbar">
        <NavBar bind:isHamburger={isHamburger}/>
    </div>

    <div class="subcontainer">
        {#if isHamburger}
            <div class="Menulist">
                <Menulist/>
            </div>
        {/if}

        {#if $itemDict['isActivity']}
            <div class="Chart">
                <Chart/>
                <Boxchart/>
            </div>
        {/if}

        {#if $itemDict['isOtherFunction'] }
            <div class="otherFunction">

            </div>
        {/if}

        {#if $itemDict['isOtherFunction2'] }
            <div class="otherFunction">
                otherFunction2 - Test GitActions 깃 액션 성공하나요~
            </div>
        {/if}



    </div>

</main>
<LineChart
        data={[
	{
		"group": "Dataset 1",
		"date": "2018-12-31T15:00:00.000Z",
		"value": 50000,
		"surplus": 1151643319.3614464
	},
	{
		"group": "Dataset 1",
		"date": "2019-01-04T15:00:00.000Z",
		"value": 65000,
		"surplus": 133921672.67399856
	},
	{
		"group": "Dataset 1",
		"date": "2019-01-07T15:00:00.000Z",
		"value": null,
		"surplus": 8956.237573331999
	},
	{
		"group": "Dataset 1",
		"date": "2019-01-12T15:00:00.000Z",
		"value": 49213,
		"surplus": 768478046.5158633
	},
	{
		"group": "Dataset 1",
		"date": "2019-01-16T15:00:00.000Z",
		"value": 51213,
		"surplus": 1188835584.0899181
	},
	{
		"group": "Dataset 2",
		"date": "2019-01-01T15:00:00.000Z",
		"value": 0,
		"surplus": 3660.158337539393
	},
	{
		"group": "Dataset 2",
		"date": "2019-01-05T15:00:00.000Z",
		"value": 57312,
		"surplus": 946425683.8324697
	},
	{
		"group": "Dataset 2",
		"date": "2019-01-07T15:00:00.000Z",
		"value": 27432,
		"surplus": 165744218.62929156
	},
	{
		"group": "Dataset 2",
		"date": "2019-01-14T15:00:00.000Z",
		"value": 70323,
		"surplus": 1154144818.5747795
	},
	{
		"group": "Dataset 2",
		"date": "2019-01-18T15:00:00.000Z",
		"value": 21300,
		"surplus": 164476861.6609292
	},
	{
		"group": "Dataset 3",
		"date": "2018-12-31T15:00:00.000Z",
		"value": 40000,
		"surplus": 743893903.4220402
	},
	{
		"group": "Dataset 3",
		"date": "2019-01-04T15:00:00.000Z",
		"value": null,
		"surplus": 24521.985771198284
	},
	{
		"group": "Dataset 3",
		"date": "2019-01-07T15:00:00.000Z",
		"value": 18000,
		"surplus": 17264805.405406658
	},
	{
		"group": "Dataset 3",
		"date": "2019-01-12T15:00:00.000Z",
		"value": 39213,
		"surplus": 934203.6401497436
	},
	{
		"group": "Dataset 3",
		"date": "2019-01-16T15:00:00.000Z",
		"value": 61213,
		"surplus": 1526296414.7703688
	},
	{
		"group": "Dataset 4",
		"date": "2019-01-01T15:00:00.000Z",
		"value": 20000,
		"surplus": 332276006.53242874
	},
	{
		"group": "Dataset 4",
		"date": "2019-01-05T15:00:00.000Z",
		"value": 37312,
		"surplus": 736436104.4097065
	},
	{
		"group": "Dataset 4",
		"date": "2019-01-07T15:00:00.000Z",
		"value": 51432,
		"surplus": 427875838.14166486
	},
	{
		"group": "Dataset 4",
		"date": "2019-01-14T15:00:00.000Z",
		"value": 25332,
		"surplus": 230702195.88104504
	},
	{
		"group": "Dataset 4",
		"date": "2019-01-18T15:00:00.000Z",
		"value": null,
		"surplus": 21278.01423861022
	}
]}
        options={{
	"title": "Thresholds (line)",
	"axes": {
		"bottom": {
			"title": "2019 Annual Sales Figures",
			"mapsTo": "date",
			"scaleType": "time",
			"thresholds": [
				{
					"value": "2019-01-10T15:00:00.000Z",
					"label": "Custom formatter"
				}
			]
		},
		"left": {
			"mapsTo": "value",
			"title": "Conversion rate",
			"scaleType": "linear",
			"thresholds": [
				{
					"value": 55000,
					"label": "Custom label",
					"fillColor": "orange"
				},
				{
					"value": 10000,
					"fillColor": "#03a9f4"
				}
			]
		}
	},
	"curve": "curveMonotoneX",
	"height": "400px"
}}
/>
<style>
    .container {
        display: flex;
        flex-direction: column;
    }

    .subcontainer {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        width: 100vw;

    }

    .navbar {
        background: rgb(113, 143, 208);
    }

    .Menulist {
        background: rgb(199, 222, 237);
        width: 220px;
        height: 300vh;
        /*flex-basis: 10%;*/
    }


    .Chart {
        width: 85vw;
        /*flex-basis: 80%;*/
    }
</style>