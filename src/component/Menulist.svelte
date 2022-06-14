<script>
    import * as icons from "svelte-bootstrap-icons";
    import {onMount} from "svelte";
    import {itemDict} from "../store/store.js"

    function menuOnOff(item) {
        let tmpVal = $itemDict[item];
        if (!tmpVal) { //false면
            for (let value in $itemDict) {
                if (value === item) {
                    $itemDict[value] = true
                } else {
                    $itemDict[value] = false
                }
            }
        }
    }

</script>

<div class="frame">
    <div class="container">
        <div class="item" on:click={()=>{menuOnOff('TotalInfo')}}>
            <div class="itemInner">

                <span class="material-symbols-rounded">rocket_launch</span>
                <span class="itemText">종합 정보</span>
            </div>
        </div>
        <div class="item" on:click={()=>{menuOnOff('DatesInfo')}}>
            <div class="itemInner">
                <span class="material-symbols-rounded">calendar_month</span>
                <span class="itemText">날짜별 정보</span>
            </div>
        </div>
        <div class="item" on:click={()=>{menuOnOff('isOtherFunction2')}}>
            <div class="itemInner">
                <span class="material-symbols-rounded">sync_problem</span>
                <span class="itemText">기타 추가 예정 .. </span>
            </div>
        </div>
    </div>

</div>

<style>
    .frame {
        /* Auto layout */

        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 30px 42px 98px 20px;
        gap: 10px;

        position: absolute;
        width: 254px;
        height: 1159px;
        left: 0px;
        top: 73px;

        background: #FFFFFF;

    }

    .container {
        /* Component 12 */


        /* Auto layout */

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;

        width: 188px;
        height: 280px;


        /* Inside auto layout */

        flex: none;
        order: 0;
        flex-grow: 0;
    }

    .item {
        /* Component 3 */


        /* Auto layout */

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 8px 15px;
        gap: 10px;

        width: 188px;
        height: 40px;

        /* Primary color */

        background: #eeebff;
        border-radius: 12px;

        /* Inside auto layout */

        flex: none;
        order: 0;
        flex-grow: 0;
    }

    .itemInner {
        /* Frame 283 */


        /* Auto layout */

        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0px;
        gap: 8px;

        width: 158px;
        height: 24px;


        /* Inside auto layout */

        flex: none;
        order: 0;
        align-self: stretch;
        flex-grow: 0;
    }
    .itemText{
        /* Dashboard */


        width: 126px;
        height: 22px;

        font-family: 'Manrope';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        /* identical to box height, or 157% */


        /* White color */

        color: #000000;


        /* Inside auto layout */

        flex: none;
        order: 1;
        flex-grow: 1;
    }
</style>