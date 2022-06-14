<script>

import {LineChart} from "@carbon/charts-svelte";
</script>


<div class="cards">
    <div class="card" id="sale">
        <div class="cardInner">
            <sapn class="itemTitle">현재 활동량</sapn>
            <sapn class="itemValue">684</sapn>
        </div>
        <span class="material-symbols-outlined red">trending_up</span>
        <sapn class="itemRate">20%</sapn>

    </div>
    <div class="card" id="rent">
        <div class="cardInner">
            <sapn class="itemTitle">현재 추정 평균 무게</sapn>
            <sapn class="itemValue">32154px</sapn>
        </div>
        <span class="material-symbols-outlined red">trending_up</span>
        <sapn class="itemRate ">3%</sapn>
    </div>
    <div class="card" id="customer">
        <div class="cardInner">
            <sapn class="itemTitle">현재 온도</sapn>
            <sapn class="itemValue">5732</sapn>
        </div>
        <span class="material-symbols-outlined blue">trending_down</span>
        <sapn class="itemRate ">3%</sapn>
    </div>
    <div class="card" id="agent">
        <div class="cardInner">
            <sapn class="itemTitle">현재 사료,물 소비량</sapn>
            <sapn class="itemValue">50kg/H,20L/H</sapn>

        </div>
        <span class="material-symbols-outlined red">trending_up</span>
        <sapn class="itemRate">3%</sapn>
    </div>
</div>
<div class="boards">
    <div class="largeBoard">
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
    </div>
    <div class="smallBoard">
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
    </div>
</div>
<div class="boards">
    <div class="board">
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
    </div>
    <div class="board">
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
    </div>
</div>
<div class="boards">
    <div class="board">
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
    </div>
    <div class="board">
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
    </div>
</div>

<style>
    .boards {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        flex-wrap: wrap;
        padding: 0px;
        gap: 25px;
        margin: 1rem;
    }
    .largeBoard{
        width: 844px;
        height: 450px;
        left: 275px;
        top: 272px;
        padding: 24px 22px;
        background: #FCFCFC;
        border-radius: 15px;
    }
    .board {
        width: 560px;
        height: 450px;
        left: 0px;
        top: 0px;
        padding: 24px 22px;
        background: #FCFCFC;
        border-radius: 15px;
    }
    .smallBoard{
        width: 277px;
        height: 450px;
        left: 1138px;
        top: 272px;

        padding: 24px 22px;
        background: #FCFCFC;
        border-radius: 15px;
    }

    .cards {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        flex-wrap: wrap;
        padding: 0px;
        margin: 1rem;
        gap: 25px;

        /*position: absolute;*/
        /*width: 1140px;*/
        /*height: 108.89px;*/


    }


    .card {

        /* Properties for Sale */


        /* Auto layout */

        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 24px 22px;
        gap: 10px;


        /* White color */

        background: #FCFCFC;
        border-radius: 15px;

        /* Inside auto layout */

        flex: none;
        order: 0;
        flex-grow: 1;

    }

    .cardInner {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0px;
        gap: 5px;

        width: 105.25px;
        height: 57px;
        /* Inside auto layout */
        flex: none;
        order: 0;
        flex-grow: 1;
    }


    .itemTitle {
        /* Frame 18 *

               /* Auto layout */



        font-family: 'Manrope';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 19px;
        text-align: center;
        /* 2nd text color */

        color: #808191;


        /* Inside auto layout */

        flex: none;
        order: 0;
        flex-grow: 1;
    }

    .itemValue {


        font-family: 'Manrope';
        font-style: normal;
        font-weight: 700;
        font-size: 13px;
        line-height: 33px;
        /* identical to box height */
        text-align: center;

        /* Text Primary color */

        color: #11142D;


        /* Inside auto layout */

        flex: none;
        order: 1;
        align-self: stretch;
        flex-grow: 0;
    }


    .itemRate {
        /* 5% */
        width: 36px;
        height: 33px;

        font-family: 'Manrope';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 33px;
        /* identical to box height */
        color: #000000;
        /* Inside auto layout */
        flex: none;
        order: 2;
        flex-grow: 0;
    }

    .red {
        color: orangered;
    }

    .blue {
        color: dodgerblue;
    }
</style>