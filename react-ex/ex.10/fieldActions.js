export function changeValue(e){
    console.log('Hello!')
    return {
        type: 'VALUE_CHANGE',
        payload: e.target.value
    }
}