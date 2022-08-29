import {derived, writable} from "svelte/store";

export let itemDict = writable({
    'TotalInfo': false,
    'DatesInfo': true,
    'isOtherFunction2': false,
})
export let storeDongilpsTotalDataList= writable({
    'dayLabelList': [],
    'returnDaysArray': [],
    'returnActivityArray': [],
    'returnQuantityArray':[],
    'returnMeanTempArray':[],
    'returnMaxTempArray':[],
    'returnMeanWeightArray':[],
    'returnMaxWeightArray':[],

});

export let storeDeulpulTotalDataList= writable({
    'dayLabelList': [],
    'returnDaysArray': [],
    'returnActivityArray': [],
    'returnQuantityArray':[],
    'returnMeanTempArray':[],
    'returnMaxTempArray':[],
    'returnMeanWeightArray':[],
    'returnMaxWeightArray':[],

});

export let storeSelectedDataList= writable({
    'dayLabelList': [],
    'returnDaysArray': [],
    'returnActivityArray': [],
    'returnQuantityArray':[],
    'returnMeanTempArray':[],
    'returnMaxTempArray':[],
    'returnMeanWeightArray':[],
    'returnMaxWeightArray':[],

});


export let isLogScale = writable(true)