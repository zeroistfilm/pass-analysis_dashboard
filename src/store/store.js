import {writable} from "svelte/store";

export let itemDict = writable({
    'isActivity': true,
    'isOtherFunction': false,
    'isOtherFunction2': false,
})