<script>
    import * as icons  from "svelte-bootstrap-icons";

    export let isHamburger=true;
    export let isSetting=false;

    $:{console.log(isHamburger)}
</script>

<div class="frame">
<div class="container">
    <div class="item">
        <img src="https://user-images.githubusercontent.com/47134564/173547231-8da0abcb-6296-48e6-8180-413abd3cdda4.png" alt="logo">
<!--        <svelte:component width="100%" height="100%" on:click={()=>{isHamburger=!isHamburger}}  this={icons['List']} title={'List'} />-->
    </div>
<!--    <div class="item">-->
<!--        <svelte:component width="100%" height="100%" on:click={()=>{alert('logo click')}} this={icons['Rainbow']} title={'Rainbow'} />-->
<!--    </div>-->
<!--    <div class="item">-->
<!--        <svelte:component width="100%" height="100%" on:click={()=>{alert('setting click')}} this={icons['Gear']} title={'Gear'} />-->
<!--    </div>-->
</div>
</div>

<style>
    .frame{
        /* Top bar */


        /* Auto layout */

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 15px 20px;
        gap: 10px;

        /*position: absolute;*/
        width: 1440px;
        height: 73px;
        left: 0px;
        top: 0px;

        /* White color */

        background: #FCFCFC;
    }
    .container {

        /* Frame 16 */


        /* Auto layout */

        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0px;
        gap: 476px;

        width: 1400px;
        height: 43px;


        /* Inside auto layout */

        flex: none;
        order: 0;
        align-self: stretch;
        flex-grow: 0;
    }

    .item {
        /* Frame 15 */


        /* Auto layout */

        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0px;
        gap: 82px;

        /*width: 660px;*/
        height: 43px;


        /* Inside auto layout */

        flex: none;
        order: 0;
        flex-grow: 1;

    }


</style>

