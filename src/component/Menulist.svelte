<script>
    import * as icons from "svelte-bootstrap-icons";


</script>

<div class="container">

    <div class="item">
        <svelte:component style="display:inline" width="20px" height="20px" this={icons['Activity']} title={'Activity'} />
        <span>Activity</span>
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
        padding:1em;
        margin: auto;
    }

</style>