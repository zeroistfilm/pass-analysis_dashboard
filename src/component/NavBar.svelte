<script>
    import * as icons  from "svelte-bootstrap-icons";

    export let isHamburger=true;
    export let isSetting=false;

    $:{console.log(isHamburger)}
</script>

<div class="container">
    <div class="item">
        <svelte:component width="100%" height="100%" on:click={()=>{isHamburger=!isHamburger}}  this={icons['List']} title={'List'} />
    </div>
    <div class="item">
        <svelte:component width="100%" height="100%" on:click={()=>{alert('logo click')}} this={icons['Rainbow']} title={'Rainbow'} />
    </div>
    <div class="item">
        <svelte:component width="100%" height="100%" on:click={()=>{alert('setting click')}} this={icons['Gear']} title={'Gear'} />
    </div>
</div>


<style>
    .container {

        height: 5vh;
        display: flex;
        justify-content: space-between;
    }

    .item {
        width: 40px;
        height: 40px;
    }

    img{
        width: 100%;
    }



</style>

