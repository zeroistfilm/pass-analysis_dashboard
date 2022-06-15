<script>

    import DatesInfo from "./component/DatesInfo.svelte";
    import NavBar from "./component/NavBar.svelte";
    import Boxchart from "./component/Boxchart.svelte";
    // import {onMount, afterUpdate, beforeUpdate} from 'svelte';
    import Menulist from "./component/Menulist.svelte";
    import {itemDict} from "./store/store.js"
    import {LineChart} from "@carbon/charts-svelte";
    import Totalinfo from "./component/Totalinfo.svelte";

    let isHamburger;



</script>

<main class="container">
    <div class="navbar">
        <NavBar bind:isHamburger={isHamburger}/>
    </div>


    <Menulist/>


    <div class="contents">
        {#if $itemDict['TotalInfo'] }
            <div class="TotalInfo">
                <Totalinfo/>
            </div>
        {/if}

        {#if $itemDict['DatesInfo']}
            <div class="InfoDates">
                <DatesInfo/>

            </div>
        {/if}



        {#if $itemDict['isOtherFunction2'] }
            <div class="otherFunction">
                otherFunction2 - Test GitActions 깃 액션 성공하나요~
            </div>
        {/if}



    </div>

</main>

<style>
    .container {
        display: flex;
        flex-direction: column;
    }

    .contents {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 30px 42px 98px 20px;
        gap: 10px;

        position: absolute;
        width: 1300px;
        height: 1160px;
        left: 254px;
        top: 72px;

        background: #FFFFFF;
    }

</style>