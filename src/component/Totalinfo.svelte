<script>

    import {LineChart} from "@carbon/charts-svelte";
    import {storeDeulpulTotalDataList, storeDongilpsTotalDataList} from "../store/store";
    import dayjs from "dayjs";
    import Boxchart from "./Boxchart.svelte";
    import {beforeUpdate, onMount} from "svelte";
    import {BarLoader} from "svelte-loading-spinners";

    let isloadding;

    function dataLoad(farm, resData) {
        // 날짜 -> 중첩그래프용 시간, 실제 시간, 활동량, 개체수, {"meanTemp" "maxTemp" "meanWeight" "maxWeight"}
        //$storeDataList['dayLabelList'] = dayLabelList
        //$storeDataList['returnDaysArray'] = returnDaysArray
        //$storeDataList['returnActivityArray'] = returnActivityArray
        //$storeDataList['returnQuantityArray'] = returnQuantityArray

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

        if (farm==="dongilps"){
            $storeDongilpsTotalDataList['dayLabelList'] = dayLabelList
            $storeDongilpsTotalDataList['returnDaysArray'] = timeLineList
            $storeDongilpsTotalDataList['returnActivityArray'] = activityList
            $storeDongilpsTotalDataList['returnQuantityArray'] = quantityList
            $storeDongilpsTotalDataList['returnMeanTempArray'] = meanTempList
            $storeDongilpsTotalDataList['returnMaxTempArray'] = maxTempList
            $storeDongilpsTotalDataList['returnMeanWeightArray'] = meanWeightList
            $storeDongilpsTotalDataList['returnMaxWeightArray'] = maxWeightList
        }else if (farm==="deulpul"){
            $storeDeulpulTotalDataList['dayLabelList'] = dayLabelList
            $storeDeulpulTotalDataList['returnDaysArray'] = timeLineList
            $storeDeulpulTotalDataList['returnActivityArray'] = activityList
            $storeDeulpulTotalDataList['returnQuantityArray'] = quantityList
            $storeDeulpulTotalDataList['returnMeanTempArray'] = meanTempList
            $storeDeulpulTotalDataList['returnMaxTempArray'] = maxTempList
            $storeDeulpulTotalDataList['returnMeanWeightArray'] = meanWeightList
            $storeDeulpulTotalDataList['returnMaxWeightArray'] = maxWeightList
        }




    }

    function getDateRangeList(range) {
        var now = dayjs();
        let dateList = []
        for (let i = range; i >= 0; i--) {
            dateList.push(now.add(-i,"d").format("YYYY-MM-DD"));
        }
        console.log(dateList)
        return dateList;

    }

    async function LoadTotalInfomation(farm) {
        //3.36.242.203:8000
        isloadding = true;
        let selectedDateArray = getDateRangeList(15);
        const res = await fetch(`http://127.0.0.1:8000/api/activitywithdate`, {
            method: 'POST',
            body: JSON.stringify({dates: selectedDateArray, farm: farm, sampleRate: 0.05}),
            headers: {'Content-Type': 'application/json'}
        })

        const resData = await res.json()
        dataLoad(farm, resData);
        isloadding = false;

    }
    beforeUpdate(()=>{

        if ($storeDeulpulTotalDataList['dayLabelList'].length ===0){

            LoadTotalInfomation('dongilps')
            LoadTotalInfomation('deulpul')

        }
        //
    })


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

{#if isloadding}
    <div class="boards loader">
        <BarLoader size="70" color="#FF3E00" unit="px" duration="1s"></BarLoader>
        <span>loading...</span>
    </div>
{/if}

<div><h3>동일 PS 15일 요약 정보</h3></div>
<div class="boards">
    <div class="XLargeBoard">
        <Boxchart domain={"activity"} data={$storeDongilpsTotalDataList}/>
    </div>

</div>


<div><h3>들풀농장 15일 요약 정보</h3></div>
<div class="boards">
    <div class="XLargeBoard">
        <Boxchart domain={"activity"} data={$storeDeulpulTotalDataList}/>
    </div>

</div>

<div class="boards">
    <div class="board">
        <Boxchart domain={"meanWeight"} data={$storeDeulpulTotalDataList}/>

    </div>
    <div class="board">
        <Boxchart domain={"maxWeight"} data={$storeDeulpulTotalDataList}/>
    </div>
</div>


<div class="boards">
    <div class="board">
        <Boxchart domain={"meanTemp"} data={$storeDeulpulTotalDataList}/>

    </div>
    <div class="board">
        <Boxchart domain={"maxTemp"} data={$storeDeulpulTotalDataList}/>
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
    .XLargeBoard {
        width: 1145px;
        height: 450px;
        left: 275px;
        top: 272px;
        padding: 24px 22px;
        background: #FCFCFC;
        border-radius: 15px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    .largeBoard {
        width: 844px;
        height: 450px;
        left: 275px;
        top: 272px;
        padding: 24px 22px;
        background: #FCFCFC;
        border-radius: 15px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    .board {
        width: 560px;
        height: 450px;
        left: 0px;
        top: 0px;
        padding: 24px 22px;
        background: #FCFCFC;
        border-radius: 15px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    .smallBoard {
        width: 277px;
        height: 450px;
        left: 1138px;
        top: 272px;

        padding: 24px 22px;
        background: #FCFCFC;
        border-radius: 15px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

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