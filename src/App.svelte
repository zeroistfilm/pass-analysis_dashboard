<script>

    import Chart from "./component/Chart.svelte";
    import NavBar from "./component/NavBar.svelte";
    import {onMount, afterUpdate, beforeUpdate} from 'svelte';
    import Menulist from "./component/Menulist.svelte";
    import {itemDict} from "./store/store.js"

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


        {#if $itemDict['isOtherFunction'] }
            <div class="otherFunction">
                otherFunction
            </div>
        {/if}

        {#if $itemDict['isOtherFunction2'] }
            <div class="otherFunction">
                otherFunction2
            </div>
        {/if}

        {#if $itemDict['isActivity']}
            <div class="Chart">
                <Chart/>
            </div>
        {/if}

    </div>

</main>

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
        height: 80vh;
        /*flex-basis: 10%;*/
    }


    .Chart {
        width: 85vw;
        /*flex-basis: 80%;*/
    }
</style>