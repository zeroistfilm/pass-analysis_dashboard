<script>

</script>

<div class="cards">
    테스트중입니다.
    <div class="cardItem" id="sale">
        <p class="itemTitle">현재 활동량</p>
        <p class="itemValue">684</p>
        <p class="itemValue">전일 대비 증감 ▲20%</p>
    </div>
    <div class="cardItem" id="rent">
        <p class="itemTitle">현재 추정 평균 무게</p>
        <p class="itemValue">32154px</p>
        <p class="itemValue">전일 대비 증감 ▲3%</p>
    </div>
    <div class="cardItem" id="customer">
        <p class="itemTitle">현재 온도</p>
        <p class="itemValue">5732</p>
    </div>
    <div class="cardItem" id="agent">
        <p class="itemTitle">현재 사료, 물 소비량</p>
        <p class="itemValue">50kg/H, 20L/H</p>
    </div>
</div>


<style>

    .cards {
        /* Cards */


        /* Auto layout */

        display: flex;
        flex-direction: row;
        align-items: flex-start;
        flex-wrap: wrap;
        padding: 0px;
        gap: 25px;

        /*!*position: absolute;*!*/
        /*width: 1140px;*/
        /*height: 108.89px;*/
        /*left: 275px;*/
        /*top: 143px;*/



    }
    .cardItem{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 13px;
        gap: 10px;

        width: 250px;


        /* White color */

        background: #FCFCFC;
        border-radius: 15px;

    }

    #sale {

        flex: none;
        order: 0;
        flex-grow: 1;
    }

    #rent {
        flex: none;
        order: 1;
        flex-grow: 1;
    }

    #customer {
        flex: none;
        order: 2;
        flex-grow: 1;
    }

    #agent {
        flex: none;
        order: 3;
        flex-grow: 1;
    }


    .itemTitle { /* Frame 18 *

        /* Auto layout */

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 5px;

        width: 149.25px;


        /* Inside auto layout */

        flex: none;
        order: 0;
        flex-grow: 1;
    }

    .itemValue {
        width: 149.25px;
        height: 33px;


        font-style: normal;
        font-weight: 700;
        line-height: 33px;
        /* identical to box height */


        /* Text Primary color */

        color: #11142D;


        /* Inside auto layout */

        flex: none;
        order: 1;
        align-self: stretch;
        flex-grow: 0;
    }
</style>