<script>
    import {BarLoader} from 'svelte-loading-spinners'
    import DateSeletor from "./DateSeletor.svelte";

    import {isLogScale, storeSelectedDataList} from "../store/store";
    import Boxchart from "./Boxchart.svelte";
    import Linechart_chartjs from "./Linechart_chartjs.svelte";
    import Linechart_carbon from "./Linechart_carbon.svelte";


    let timestampKST = '2022-04-01';
    let dayrange = 1;


    let isloadding = false;

    let selectedDateArray;
    let farm;

    let Linechart;

    Date.prototype.addDays = function (days) {
        var date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
    }

    function getTimeDiff(d1, d2) {
        const date1 = new Date(d1);
        const date2 = new Date(d2);

        const diffDate = date1.getTime() - date2.getTime();

        return parseInt(Math.abs(diffDate / (1000 * 3600 * 24)));
    }

    function getDateDiff(d1, d2) {
        const date1 = new Date(d1);
        const date2 = new Date(d2);

        const diffDate = date1.getUTCDate() - date2.getUTCDate();

        return parseInt(Math.abs(diffDate));
    }

    function daysSplit(times, activity, quantity) {

        let tmpday = new Date(Number(times[0]));
        let standardDay = new Date(tmpday.getUTCFullYear(), tmpday.getUTCMonth(), tmpday.getUTCDate(), 9)
        console.log(tmpday, standardDay)
        //let standardDay = new Date(Number(times[0]));
        let tmpDayList = [];
        let tmpValList = [];
        let tmpQuantityList = [];
        let returnDaysArray = [];
        let returnActivityArray = [];
        let returnQuantityArray = [];
        let dayLabelList = [];
        let diff = 0;
        for (let i = 0; i <= times.length - 1; i++) {
            let date = new Date(Number(times[i + 1]));

            if (diff === getDateDiff(date, standardDay)) {
                if (activity[i] !== null) {
                    tmpDayList = [...tmpDayList, date.addDays(-getTimeDiff(date, standardDay))]
                    tmpValList = [...tmpValList, activity[i]]
                    tmpQuantityList = [...tmpQuantityList, quantity[i]]
                }

            } else {
                if (tmpDayList.length !== 0) {
                    returnDaysArray.push(tmpDayList)
                    returnActivityArray.push(tmpValList)
                    returnQuantityArray.push(tmpQuantityList)
                    tmpDayList = []
                    tmpValList = []
                    tmpQuantityList = [];
                    dayLabelList.push(tmpday.getUTCFullYear().toString() + "/" +
                        (tmpday.getUTCMonth() + 1).toString() + "/" +
                        tmpday.getUTCDate().toString())
                }


            }
            diff = getDateDiff(date, standardDay)
            tmpday = date

        }
        console.log(dayLabelList)
        $storeSelectedDataList['dayLabelList'] = dayLabelList
        $storeSelectedDataList['returnDaysArray'] = returnDaysArray
        $storeSelectedDataList['returnActivityArray'] = returnActivityArray
        $storeSelectedDataList['returnQuantityArray'] = returnQuantityArray





    }


    function dataLoad(resData) {
        // 날짜 -> 중첩그래프용 시간, 실제 시간, 활동량, 개체수, {"meanTemp" "maxTemp" "meanWeight" "maxWeight"}
        //$storeSelectedDataList['dayLabelList'] = dayLabelList
        //$storeSelectedDataList['returnDaysArray'] = returnDaysArray
        //$storeSelectedDataList['returnActivityArray'] = returnActivityArray
        //$storeSelectedDataList['returnQuantityArray'] = returnQuantityArray

        let dayLabelList = []
        let timeLineList = [];
        let activityList = [];
        let quantityList = [];
        let meanTempList = [];
        let maxTempList = [];
        let meanWeightList = [];
        let maxWeightList = [];

        for (const date in resData) {
            let tmptimeLineList = [];
            let tmpactivityList = [];
            let tmpquantityList = [];
            let tmpmeanTempList = [];
            let tmpmaxTempList = [];
            let tmpmeanWeightList = [];
            let tmpmaxWeightList = [];

            for (let i = 0; i < resData[date].length; i++) {
                let drawTime = new Date(Number(resData[date][i][0]));
                let realTime = new Date(Number(resData[date][i][1]));
                let activity = resData[date][i][2];
                let quantity = resData[date][i][3];
                let meanTemp = resData[date][i][4]['meanTemp'];
                let maxTemp = resData[date][i][4]['maxTemp'];
                let meanWeight = resData[date][i][4]['meanWeight'];
                let maxWeight = resData[date][i][4]['maxWeight'];

                tmptimeLineList.push(drawTime)
                tmpactivityList.push(activity)
                tmpquantityList.push(quantity)
                tmpmeanTempList.push(meanTemp)
                tmpmaxTempList.push(maxTemp)
                tmpmeanWeightList.push(meanWeight)
                tmpmaxWeightList.push(maxWeight)
            }
            dayLabelList.push(date)
            timeLineList.push(tmptimeLineList)
            activityList.push(tmpactivityList)
            quantityList.push(tmpquantityList)
            meanTempList.push(tmpmeanTempList)
            maxTempList.push(tmpmaxTempList)
            meanWeightList.push(tmpmeanWeightList)
            maxWeightList.push(tmpmaxWeightList)

        }
        $storeSelectedDataList['dayLabelList'] = dayLabelList
        $storeSelectedDataList['returnDaysArray'] = timeLineList
        $storeSelectedDataList['returnActivityArray'] = activityList
        $storeSelectedDataList['returnQuantityArray'] = quantityList
        $storeSelectedDataList['returnMeanTempArray'] = meanTempList
        $storeSelectedDataList['returnMaxTempArray'] = maxTempList
        $storeSelectedDataList['returnMeanWeightArray'] = meanWeightList
        $storeSelectedDataList['returnMaxWeightArray'] = maxWeightList



    }

    async function getActivtyWithManyDates() {
        console.log(selectedDateArray)

        if (!timestampKST.trim()) {
            timestampKST = ''
            dayrange = ''
            return;
        }
        isloadding = true;

        //3.36.242.203:8000
        const res = await fetch(`http://3.36.242.203:8000/api/activitywithdate`, {
            method: 'POST',
            body: JSON.stringify({dates: selectedDateArray, farm: farm, sampleRate: 0.2}),
            headers: {'Content-Type': 'application/json'}
        })

        const resData = await res.json()

        //daysSplit(Object.keys(resData.activity), Object.values(resData.activity), Object.values(resData.quantity))
        isloadding = false;
        dataLoad(resData);

        Linechart.dataupdate();


    }


    function handleIsLogScale() {
        isLogScale.set(!$isLogScale)
        Linechart.dataupdate();
    }


</script>

<div class="">
    <div class="container">
        {#if isloadding}
            <div class="loader">
                <BarLoader size="70" color="#FF3E00" unit="px" duration="1s"></BarLoader>
                <span>loading...</span>
            </div>
        {/if}
        <div class="item">
            <div class="itemInner">
                <!--calender-->
                <select bind:value={farm}>
                    <option value="dongilps">동일피에스</option>
                    <option value="deulpul">들풀농장</option>
                </select>
                <DateSeletor bind:selectedDateArray={selectedDateArray}/>
                <button on:click={getActivtyWithManyDates}>데이터 불러오기</button>

            </div>

            <div class="itemInner">
                <!--boxp-lot-->

                <Boxchart domain={"activity"} data={$storeSelectedDataList}/>
            </div>
        </div>
        <div class="item">
            <Boxchart domain={"meanWeight"} data={$storeSelectedDataList}/>
            <Boxchart domain={"maxWeight"} data={$storeSelectedDataList}/>
        </div>
        <div class="item">

            <Boxchart domain={"meanTemp"} data={$storeSelectedDataList}/>
            <Boxchart domain={"maxTemp"} data={$storeSelectedDataList}/>
        </div>
        <div class="item">
            <div class="itemInnerNoWidth">
                <input type=checkbox on:click={handleIsLogScale} bind:checked={$isLogScale}>
                <span>LogScale</span>
                <!--activity-plot-->
                <Linechart_chartjs bind:this={Linechart}/>
<!--                <Linechart_carbon domain={"activity"}/>-->
                <Linechart_carbon domain={"quantity"}/>
                <Linechart_carbon domain={"activity/quantity"}/>
            </div>
        </div>
        <div class="item">
            <!--Image-->
        </div>
    </div>
</div>


<style>
    .canvas {
        width: 1100px;
    }

    .frame {
        /* Frame-col */


        /* Auto layout */

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 30px 42px 98px 20px;
        gap: 10px;

        position: absolute;
        width: 1186px;

        left: 254px;
        top: 73px;


    }

    .container {
        /* container-col */


        /* Auto layout */

        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0px;

        width: 1183px;


        /* Inside auto layout */

        flex: none;
        order: 0;
        flex-grow: 0;


    }

    .item {
        /* item-row */


        /* Auto layout */

        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 10px;
        gap: 10px;

        width: 1144px;


        /* Inside auto layout */

        flex: none;
        order: 0;
        flex-grow: 0;


        background: rgba(252, 252, 252, 0.99);
        border-radius: 15px;
    }

    .itemInnerNoWidth {
        /* itemInner */


        /* Auto layout */

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 15px;


        /* Inside auto layout */

        flex: none;
        order: 0;
        flex-grow: 0;

        background: #fafafb;
        border-radius: 15px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    .itemInner {
        /* itemInner */


        /* Auto layout */

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 15px;

        width: 550px;


        /* Inside auto layout */

        flex: none;
        order: 0;
        flex-grow: 0;

        background: #fafafb;
        border-radius: 15px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }


</style>
