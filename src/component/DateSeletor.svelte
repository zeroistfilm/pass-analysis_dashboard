<script>
    import {DateInput, DatePicker, localeFromDateFnsLocale} from 'date-picker-svelte'
    import {enUS, ru} from 'date-fns/locale'
    import {afterUpdate} from "svelte";


    let dateFnsLocale = enUS;
    $: locale = localeFromDateFnsLocale(dateFnsLocale);
    let chartData;
    let date = new Date()
    let olddate = date;

    export let selectedDateArray = [];

    $:{ // update date with valid date change
        if (olddate !== date) {

            let filteredDateFormat = date.getFullYear().toString() + "-"
                + (("00" + (date.getMonth() + 1).toString()).slice(-2)) + "-"
                + (("00" + date.getDate().toString()).slice(-2));
                console.log(filteredDateFormat)
            if (!selectedDateArray.includes(filteredDateFormat)) {
                selectedDateArray = [...selectedDateArray, filteredDateFormat]
                selectedDateArray.sort()
            }

            olddate = date
        }
    }


    function deleteDateFromArray(elem) {
        selectedDateArray = selectedDateArray.filter(item => item !== elem)
    }


</script>


<div class="container">
    <div class="item selector">
        <DateInput bind:value={date}
                   on:click={()=>{console.log('click')}}
                   format="yyyy/MM/dd"
                   placeholder="2000/31/12"
                   visible="true"
                   {locale}/>
    </div>
    <div class="item dayList">
        <h3>선택한 날짜</h3>
        <ul>
            {#each selectedDateArray as elem}
                <li on:click={()=>deleteDateFromArray(elem)}>{elem}</li>
            {/each}
        </ul>
    </div>
</div>

<style>

    .container{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
    }

    .item{
        padding: 1em;
        margin: auto;
    }

    .selector{
        width: 50%;
        height: 300px;
        float:left
    }
    .dayList{
        width: 50%;
        float: left;
    }
    li {
        padding: 5px 0px 5px 5px;
        margin-bottom: 5px;
        border-bottom: 1px solid #efefef;
        font-size: 12px;
    }
</style>