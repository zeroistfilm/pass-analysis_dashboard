import {derived, writable} from "svelte/store";

export let itemDict = writable({
    'TotalInfo': false,
    'DatesInfo': true,
    'isOtherFunction2': false,
})

export let storeDataList= writable({
    'dayLabelList': [],
    'returnDaysArray': [],
    'returnActivityArray': [],
    'returnQuantityArray':[]
});


export let isLogScale = writable(false)