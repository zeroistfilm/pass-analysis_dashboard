import {derived, writable} from "svelte/store";

export let itemDict = writable({
    'TotalInfo': false,
    'DatesInfo': true,
    'isOtherFunction2': false,
})

export let activityList = writable({
    'dayLabelList': [],
    'returnDaysArray': [],
    'returnValuesArray': []
});


export let isLogScale = writable(true)