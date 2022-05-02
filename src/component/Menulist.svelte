<script>
    import * as icons from "svelte-bootstrap-icons";
    import {onMount} from "svelte";
    import {itemDict} from "../store/store.js"







    function menuOnOff(item) {
        let tmpVal = $itemDict[item];
        if (!tmpVal){ //false면
           for(let value in $itemDict){
               if (value===item){
                   $itemDict[value]=true
               }else{
                   $itemDict[value]=false
               }
           }
        }
    }

</script>

<div class="container">

    <div class="item" on:click={()=>{menuOnOff('isActivity')}}>
        <svelte:component style="display:inline" width="20px" height="20px" this={icons['Activity']}
                          title={'Activity'}/>
        <span>Activity</span>
    </div>

    <div class="item" on:click={()=>{menuOnOff('isOtherFunction')}}>
        <svelte:component style="display:inline" width="20px" height="20px" this={icons['Activity']}
                          title={'Activity'}/>
        <span>isOtherFuntion</span>
    </div>
    <div class="item" on:click={()=>{menuOnOff('isOtherFunction2')}}>
        <svelte:component style="display:inline" width="20px" height="20px" this={icons['Activity']}
                          title={'Activity'}/>
        <span>isOtherFuntion2</span>
    </div>


</div>

<style>
    .container {

        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;

    }

    .item {
        padding: 1em;
        margin: auto;
    }

</style>